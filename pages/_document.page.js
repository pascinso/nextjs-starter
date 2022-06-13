import Document, { Html, Head, Main, NextScript } from "next/document";

export default class App extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
App.getInitialProps = async function getInitialProps(ctx) {
  return { ...(await Document.getInitialProps(ctx)) };
};
