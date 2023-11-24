import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & input {
    width: 78%;
    height: 43px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

export const AddButton = styled.button`
  width: 12%;

  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  & svg {
    width: 100%;
  }
`;
