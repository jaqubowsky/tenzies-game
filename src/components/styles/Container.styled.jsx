import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.main};
  border-radius: 25px;
  max-width: 500px;
  height: 500px;
  width: 70%;
`;
export default StyledContainer;
