import { useEffect, useState } from "react";
import {
  Container,
  CurrencyItem,
  CurrencyList,
  StyledCurrency,
  StyledCurrencyRate,
} from "../Header.styled";
import currencyapi from "@everapi/currencyapi-js";

const Header = () => {
  const [uahRate, setUahRate] = useState("");
  const [eurRate, setEurRate] = useState("");

  useEffect(() => {
    const client = new currencyapi(
      "cur_live_L3HLKmxdL7ZYoHJl1CnfIjoNcrWSwAmlGqIH3NYv"
    );

    client
      .latest({
        base_currency: "USD",
        currencies: "UAH",
      })
      .then((response) => {
        setUahRate(response.data.UAH.value.toFixed(3));
      });

    client
      .latest({
        base_currency: "EUR",
        currencies: "UAH",
      })
      .then((response) => {
        setEurRate(response.data.UAH.value.toFixed(3));
      });
  });

  return (
    <Container>
      <CurrencyList>
        <CurrencyItem>
          <StyledCurrency>USD</StyledCurrency>
          <StyledCurrencyRate>{uahRate}</StyledCurrencyRate>
        </CurrencyItem>
        <CurrencyItem>
          <StyledCurrency>EUR</StyledCurrency>
          <StyledCurrencyRate>{eurRate}</StyledCurrencyRate>
        </CurrencyItem>
      </CurrencyList>
    </Container>
  );
};

export default Header;

//0e89aa77847964a0f31ff16ca1a664e3
