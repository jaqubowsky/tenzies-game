import Theme from "./components/styles/Theme";
import Main from "./components/Main";
import DiceContainer from "./components/diceContainer";
import GlobalStyle from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Main>
          <DiceContainer></DiceContainer>
        </Main>
      </Theme>
    </>
  );
}

export default App;
