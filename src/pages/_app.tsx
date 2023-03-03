import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>The Platform Guy</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
