import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#43A047",
    },
    error: {
      main: "#E53935",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "20px 16px",
          borderBottom: "1px solid #ddd",
        },
      },
    },
  },
});
