import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;

  border-radius: 4px;
  border: 1px solid gainsboro;
  &:hover {
    transform: scale();
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
