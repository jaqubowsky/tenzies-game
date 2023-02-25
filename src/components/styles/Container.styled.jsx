import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  height: 45%;
  width: 25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors.main};
  border-radius: 25px;
`;
export default StyledContainer;
