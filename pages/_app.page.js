import "../styles/_default.scss";

export default function useApp({ Component, pageProps }) {
  return (
    <main id="app">
      <Component {...pageProps} />
    </main>
  );
}
