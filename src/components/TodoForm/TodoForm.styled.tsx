import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  & input {
    margin-right: 5px;
    width: 78%;
    height: 43px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

export const AddButton = styled.button`
  width: 19%;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
