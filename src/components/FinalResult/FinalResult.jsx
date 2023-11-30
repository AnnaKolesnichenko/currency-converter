import {
  StyledAmount,
  StyledContainer,
  StyledCurrency,
  StyledFinalResult,
} from "./FinalResult.styled";

const FinalResult = ({
  directConvert,
  toAmount,
  fromAmount,
  fromCurrency,
  toCurrency,
}) => {
  return (
    <StyledContainer>
      {directConvert && toAmount ? (
        <StyledFinalResult>
          <div>
            <StyledAmount>{fromAmount}</StyledAmount>
            <StyledCurrency>{fromCurrency}</StyledCurrency>
          </div>
          <span>===</span>
          <div>
            <StyledAmount>{toAmount}</StyledAmount>
            <StyledCurrency>{toCurrency}</StyledCurrency>
          </div>
        </StyledFinalResult>
      ) : (
        <StyledFinalResult>
          <div>
            <StyledAmount>{toAmount}</StyledAmount>
            <StyledCurrency>{toCurrency}</StyledCurrency>
          </div>
          <span>===</span>
          <div>
            <StyledAmount>{fromAmount}</StyledAmount>
            <StyledCurrency>{fromCurrency}</StyledCurrency>
          </div>
        </StyledFinalResult>
      )}
    </StyledContainer>
  );
};

export default FinalResult;
