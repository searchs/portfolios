import Document, { Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Portfolios Dialogue" />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
            integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ=="
            crossorigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand:wght@300;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Quicksand", "Montserrat", sans-serif;
              padding: 30px;
              margin: 0 auto;
              color: #2b2d42;
              font-size: 110%;
              background: #f8f8f8;
            }

            a {
              color: #3a0ca3;
            }

            h1 {
              letter-spacing: 2px;
              font-size: 4em;
              font-weight: 200;
              text-transform: uppercase;
            }

            h2 {
              letter-spacing: 2px;
              font-size: 2em;
              font-weight: 300;
            }

            .github {
                background: #f5f5f5;
                padding: 10px;
            }

            .errorpage {
                color: red;
                font-weight: bold;
                letter-spacing: 1px;
                font-size: 1.35rem;
            }
          `}
        </style>
      </html>
    );
  }
}

export default AppDocument;
