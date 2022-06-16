import "../styles/globals.css";
import type { AppProps } from "next/app";
import useKeyboard from "../store/store";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  const initData = useKeyboard((state) => state.initData);
  const header = useKeyboard((state) => state.header);

  useEffect(() => {
    async function initKeyboardStore() {
      const response = await fetch("/api/sheets", { method: "GET" });
      const result = await response.json();

      initData(result.data);
    }

    if (header.length <= 0) initKeyboardStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component {...pageProps} />;
}

export default App;
