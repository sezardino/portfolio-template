import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles, theme } from "@/styles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
