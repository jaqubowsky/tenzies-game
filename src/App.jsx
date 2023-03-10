import { useState } from "React";
import Theme from "./components/styles/Theme";
import Main from "./components/Main";
import Dice from "./components/Dice";
import Button from "./components/Button";
import DiceContainer from "./components/diceContainer";
import GlobalStyle from "./components/styles/Global";
import { nanoid } from "nanoid";

const NUM_OF_DICES = 10;

function App() {
  const [diceArray, setDiceArray] = useState(getNewDiceArray());

  function getNewDiceArray() {
    const newDice = [];

    for (let i = 0; i < NUM_OF_DICES; i++) {
      const randomNumber = Math.ceil(Math.random() * 6) + 1;
      const randomDiceObj = {
        value: randomNumber,
        isHeld: false,
        id: nanoid(),
      };

      newDice.push(randomDiceObj);
    }

    return newDice;
  }

  function getAllNewDice() {
    setDiceArray(getNewDiceArray());
  }

  const diceElements = diceArray.map((dice) => (
    <Dice key={dice.id} value={dice.value} />
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
