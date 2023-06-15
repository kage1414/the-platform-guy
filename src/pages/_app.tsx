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
        <title>ThePlatformGuy.com</title>
        <meta
          name="description"
          content="Authentic swim platform and swim deck reproductions for any style of boat"
        />
        <meta
          name="og:title"
          property="og:title"
          content="ThePlatformGuy.com"
        />
        <link rel="canonical" href="https://theplatformguy.com/" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
