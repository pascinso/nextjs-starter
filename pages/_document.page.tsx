import Document, { Head, Html, Main, NextScript } from "next/document";

export default class useDocument extends Document {
  override render(): JSX.Element {
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

useDocument.getInitialProps = async function getInitialProps(context) {
  return { ...(await Document.getInitialProps(context)) };
};
