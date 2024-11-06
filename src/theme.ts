import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik, Arial",
  },
  palette: {
    primary: {
      main: "#d9b878",
    },
    secondary: {
      main: "#7899D9",
    },
    text: {
      //   primary: "#303030",
      primary: "rgba(0, 0, 0, 0.9);",
    },
  },
});

export default theme;
