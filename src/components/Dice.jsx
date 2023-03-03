import StyledDice from "./styles/Dice.styled";

const Dice = (props) => {
  return (
    <StyledDice>
      <span>{props.value}</span>
    </StyledDice>
  );
};

export default Dice;
