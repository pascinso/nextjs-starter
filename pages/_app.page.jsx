import "./style.scss";
import { useStore } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  useStore();

  return (
    <main id="app">
      <Component {...pageProps} />
    </main>
  );
};

export default useApp;
