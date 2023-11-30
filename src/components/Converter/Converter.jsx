import Select from "react-select";
import currencyapi from "@everapi/currencyapi-js";
import { currencies } from "../../data/currency-data";
import { useState, useEffect, useRef } from "react";
import {
  Container,
  SelectsContainer,
  StyledInput,
  StyledSelector,
} from "./Converter.styled";
import { customStyledSelect } from "./customStyle";
import FinalResult from "../FinalResult/FinalResult";

const Converter = () => {
  const fromAmountField = useRef();
  const toAmountField = useRef();
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [directConvert, setDirectConvert] = useState(false);
  const [reverseConvert, setReverseConvert] = useState(false);

  useEffect(() => {
    if (directConvert) {
      const client = new currencyapi(
        "cur_live_L3HLKmxdL7ZYoHJl1CnfIjoNcrWSwAmlGqIH3NYv"
      );

      client
        .convert({
          value: fromAmount,
          base_currency: fromCurrency,
          currencies: toCurrency,
        })

        .then((response) => {
          console.log(response.data);
          if (!fromCurrency) {
            setToAmount("");
            return;
          }

          if (!toCurrency) {
            setFromAmount(fromAmountField.current.value);
            return;
          }

          if (response.data) {
            Object.keys(response.data).forEach((currencyCode) => {
              setToAmount(response.data[currencyCode].value.toFixed(3));
            });
          }
        });
    }
  }, [fromAmount, toAmount, fromCurrency, toCurrency, directConvert]);

  useEffect(() => {
    if (reverseConvert) {
      const client = new currencyapi(
        "cur_live_L3HLKmxdL7ZYoHJl1CnfIjoNcrWSwAmlGqIH3NYv"
      );

      client
        .convert({
          value: toAmount,
          base_currency: toCurrency,
          currencies: fromCurrency,
        })

        .then((response) => {
          if (!toCurrency) {
            setFromAmount("");
            return;
          }

          if (!fromCurrency) {
            setToAmount(toAmountField.current.value);
            return;
          }

          if (response.data) {
            Object.keys(response.data).forEach((currencyCode) => {
              setFromAmount(response.data[currencyCode].value.toFixed(3));
            });
          }
        });
    }
  }, [fromAmount, toAmount, fromCurrency, toCurrency, reverseConvert]);

  const handleFromConvert = (option) => {
    if (option) {
      setFromCurrency(option.value);
    }
  };

  const handleToConvert = (option) => {
    if (option) {
      setToCurrency(option.value);
    }
  };

  const handleFromAmount = (e) => {
    setFromAmount(e.target.value);
    setDirectConvert(true);
    setReverseConvert(false);
  };

  const handleToAmout = (e) => {
    setToAmount(e.target.value);
    setDirectConvert(false);
    setReverseConvert(true);
  };

  return (
    <Container>
      <SelectsContainer>
        <StyledSelector>
          <StyledInput
            type="number"
            onChange={handleFromAmount}
            value={fromAmount}
            ref={fromAmountField}
          />
          <Select
            isClearable
            isSearchable
            className="basic-single"
            classNamePrefix="select"
            styles={customStyledSelect}
            name="fromCurrency"
            options={currencies}
            value={currencies.find(
              (currency) => currency.value === fromCurrency
            )}
            onChange={handleFromConvert}
            placeholder="Currency"
          />
        </StyledSelector>
        <StyledSelector>
          <StyledInput
            type="number"
            onChange={handleToAmout}
            value={toAmount}
            ref={toAmountField}
          />
          <Select
            isClearable
            isSearchable
            className="basic-single"
            classNamePrefix="select"
            styles={customStyledSelect}
            name="toCurrency"
            options={currencies}
            value={currencies.find((currency) => currency.value === toCurrency)}
            onChange={handleToConvert}
            placeholder="Currency"
          />
        </StyledSelector>
      </SelectsContainer>
      <FinalResult
        directConvert={directConvert}
        toAmount={toAmount}
        fromAmount={fromAmount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </Container>
  );
};

export default Converter;
