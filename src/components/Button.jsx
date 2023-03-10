import StyledButton from "./styles/Button.styled";

const Button = (props) => {
  return <StyledButton onClick={props.handleClick}>{props.name}</StyledButton>;
};

export default Button;
