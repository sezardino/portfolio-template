import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles, theme } from "@/styles";
import { DefaultLayout } from "@/components/layout";
import { AppContext } from "@/context";
import { useCurrentSection } from "@/hooks";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        {/* <AppContext.Provider value={appState}> */}
        <GlobalStyles />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        {/* </AppContext.Provider> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
