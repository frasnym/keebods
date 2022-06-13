import "../styles/globals.css";
import type { AppProps } from "next/app";
import { getKeyboardData } from "../library/sheets";
import AppContext from "../library/context";
import { AppContextInterface } from "../types";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={pageProps}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

App.getInitialProps = async () => {
  console.log("Running getInitialProps App");

  let pageProps: AppContextInterface = { header: [], data: [] };

  try {
    pageProps = await getKeyboardData();

    return { pageProps };
  } catch (error) {
    console.error("Unable to get data", error);
    return { pageProps };
  }
};

export default App;
