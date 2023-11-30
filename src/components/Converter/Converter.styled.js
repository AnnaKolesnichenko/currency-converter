import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #282c34;
`;

export const SelectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 40%;

  padding: 60px 30px;
  border-radius: 10px;
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  margin-right: 0px;
  padding: 5px 7px;
  width: 200px;
  height: 38px;
  font-size: 16px;
  background-color: #d5cfc7;
  border-radius: 15px;
  border: 1px solid #cccccc;
  color: #1c180a;

  &:hover {
    border: 1px solid #24485b;
  }
`;
