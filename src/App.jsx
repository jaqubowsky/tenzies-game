import { useState } from "React";
import Theme from "./components/styles/Theme";
import Main from "./components/Main";
import Dice from "./components/Dice";
import DiceContainer from "./components/diceContainer";
import GlobalStyle from "./components/styles/Global";

function App() {
  const [diceArray, setDiceArray] = useState(getAllNewDice());

  function getAllNewDice() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  }

  const diceElements = diceArray.map((dice) => (
    <Dice key={Math.random()} value={dice} />
  ));

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Main>
          <DiceContainer>{diceElements}</DiceContainer>
        </Main>
      </Theme>
    </>
  );
}

export default App;
