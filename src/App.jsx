import { useState, useEffect } from "react";
import Theme from "./components/styles/Theme";
import Main from "./components/styles/Main.styled";
import Dice from "./components/Dice";
import Button from "./components/Button";
import DiceContainer from "./components/styles/DiceContainer.styled";
import Container from "./components/styles/Container.styled";
import Description from "./components/styles/Description.styled";
import GlobalStyle from "./components/styles/Global";
import { nanoid } from "nanoid";

const NUM_OF_DICES = 10;

function App() {
  const [diceArray, setDiceArray] = useState(getNewDiceArray());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const winningCondition = diceArray.every((dice) => {
      return dice.isHeld && dice.value === diceArray[0].value;
    });

    if (winningCondition) {
      setTenzies(true);
      console.log("You win!");
    }
  }, [diceArray]);

  function rollDice() {
    setDiceArray((prevArray) =>
      prevArray.map((dice) => {
        return dice.isHeld ? dice : { ...getNewDice() };
      })
    );
  }

  function getRandomNumber() {
    return Math.ceil(Math.random() * 6) + 1;
  }

  function getNewDice() {
    return {
      value: getRandomNumber(),
      isHeld: false,
      id: nanoid(),
    };
  }

  function getNewDiceArray() {
    const newDiceArray = [];

    for (let i = 0; i < NUM_OF_DICES; i++) {
      newDiceArray.push(getNewDice());
    }

    return newDiceArray;
  }

  function holdDice(id) {
    setDiceArray((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
  }

  const diceElements = diceArray.map((dice) => (
    <Dice
      key={dice.id}
      value={dice.value}
      background={dice.isHeld && ((props) => props.theme.colors.clickedDice)}
      handleClick={() => holdDice(dice.id)}
    />
  ));

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Main>
          <Container>
            <h1>Tenzies</h1>
            <Description>
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </Description>
            <DiceContainer>{diceElements}</DiceContainer>
            <Button handleClick={rollDice} name={"Roll"}></Button>
          </Container>
        </Main>
      </Theme>
    </>
  );
}

export default App;
