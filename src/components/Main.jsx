import StyledMain from "./styles/Main.styled";
import Container from "./Container";

const Main = ({ children }) => {
  return (
    <StyledMain>
      <Container>{children}</Container>
    </StyledMain>
  );
};

export default Main;
