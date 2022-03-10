import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles, theme } from "@/styles";
import { DefaultLayout } from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
