import nextI18NextConfig from "../../next-i18next.config.js";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { appWithTranslation } from "next-i18next";
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

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          ThePlatformGuy.com - Custom-built boat swim platforms and swim decks
        </title>
        <link rel="icon" href="/platform_favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Custom-built boat swim platform and swim decks for any style of boat"
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

export default appWithTranslation(App, nextI18NextConfig);
