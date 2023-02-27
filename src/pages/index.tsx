import { HomePage } from "@/components/HomePage";
import { MenuBar } from "@/components/MenuBar";
import { createTheme, Paper, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#973300",
    },
    secondary: {
      main: "#006597",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <MenuBar />
          <HomePage />
        </Paper>
      </ThemeProvider>
    </>
  );
}
