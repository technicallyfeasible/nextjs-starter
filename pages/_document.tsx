import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
