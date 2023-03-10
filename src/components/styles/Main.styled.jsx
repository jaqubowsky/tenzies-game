import styled from "styled-components";

const Main = styled.main`
  background: ${(props) => props.theme.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
