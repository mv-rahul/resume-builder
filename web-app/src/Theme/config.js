import { createMuiTheme } from "@material-ui/core/styles";
const customStyle = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "#f7941d",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "0.925rem",
        textAlign: "center",

        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
    MuiFab: {
      label: {
        fontSize: "1rem",
        textTransform: "none",
        color: "#fff",
        width: "10em",
      },
      sizeSmall: {
        height: "0.5em",
        width: "2.5em",
      },
    },
  },

  palette: {
    primary: {
      light: "#f8a33e",
      main: "#f7941d",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontSize: 14,
    // fontWeight:"500"
  },
});

export { customStyle };
