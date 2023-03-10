import { useState } from "React";
import Theme from "./components/styles/Theme";
import Main from "./components/Main";
import Dice from "./components/Dice";
import Button from "./components/Button";
import DiceContainer from "./components/diceContainer";
import GlobalStyle from "./components/styles/Global";

function App() {
  const [diceArray, setDiceArray] = useState(getNewDiceArray());

  function getNewDiceArray() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  }

  function getAllNewDice() {
    setDiceArray(getNewDiceArray());
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
          <Button handleClick={getAllNewDice} name={"Roll"}></Button>
        </Main>
      </Theme>
    </>
  );
}

export default App;
