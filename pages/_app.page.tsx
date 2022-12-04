import "styles/global.scss";
import type { AppProps } from "next/app";

export default function useApp({ Component, pageProps }: AppProps) {
  return (
    <main id="app">
      <Component {...pageProps} />;
    </main>
  );
}
