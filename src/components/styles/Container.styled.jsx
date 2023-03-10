import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.main};
  border-radius: 25px;
  max-width: 500px;
  width: 70%;
  padding: 3rem 1rem;
  gap: 1.2em;
`;
export default Container;
