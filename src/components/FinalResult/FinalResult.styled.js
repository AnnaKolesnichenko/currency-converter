import styled from "styled-components";

export const StyledContainer = styled.div`
  /* width: 100%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #282c34; */
  display: flex;
  flex-direction: row;
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFinalResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 40%;

  padding: 20px 30px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledAmount = styled.span`
  font-size: 20px;
  margin-right: 10px;
  padding: 4px 10px;
  border-radius: 5px;
  background-color: #5d6370;
`;

export const StyledCurrency = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
