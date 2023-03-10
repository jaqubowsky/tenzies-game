import styled from "styled-components";

const StyledDice = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.shadow};
  font-weight: 900;
  font-size: 2rem;
  cursor: pointer;
  background: ${(props) => props.background || ""};
  border-radius: 10px;
`;

export default StyledDice;
