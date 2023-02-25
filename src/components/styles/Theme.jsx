import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#0B2434",
    main: "#F5F5F5",
    button: "#5035FF",
    dice: "#FFFFFF",
    clickedDice: "#59E391",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
