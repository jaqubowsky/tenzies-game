import StyledContainer from "./styles/Container.styled"

const Container = ({children}) => {
  return(
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container