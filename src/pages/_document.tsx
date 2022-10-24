import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import topaz from "theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}</style>
      </Head>
      <body>
        <ColorModeScript initialColorMode={topaz.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
