import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;

export const CurrencyList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  list-style: none;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 40%;
`;

export const CurrencyItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StyledCurrency = styled.h2`
  font-size: 24px;
`;

export const StyledCurrencyRate = styled.p`
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #5d6370;
`;
