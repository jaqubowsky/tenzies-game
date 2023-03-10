import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#0B2434",
    main: "#F5F5F5",
    button: "#5035FF",
    buttonHover: "#5035ffe2",
    font: "#FFFFFF",
    clickedDice: "#59E391",
    shadow: "rgba(0, 0, 0, 0.15)",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
