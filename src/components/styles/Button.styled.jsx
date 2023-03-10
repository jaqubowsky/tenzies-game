import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.font};
  padding: 0.5em 0;
  width: 150px;
  font-size: 1.6rem;
  margin-top: 2em;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3.8px;

  &:hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }
`;

export default StyledButton;
