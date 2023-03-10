import StyledDice from "./styles/Dice.styled";

const Dice = (props) => {
  return (
    <StyledDice background={props.background} onClick={props.handleClick}>
      <span>{props.value}</span>
    </StyledDice>
  );
};

export default Dice;
