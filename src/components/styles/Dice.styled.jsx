import styled from "styled-components";

const StyledDice = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.shadow};
  font-weight: 900;
  font-size: 1.8rem;
`;

export default StyledDice;
