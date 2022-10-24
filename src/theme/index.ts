import type { ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";
import { Button } from "./components/Button";
import { semanticTokens } from "./semanticTokens";

const fonts = {
  heading: `'Inter', sans-serif;`,
  body: `'Inter', sans-serif;`,
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "text",
      bg: "bg-default",
      lineHeight: "base",
      WebkitFontSmoothing: "antialiased",
      fontSize: "16px",
    },
    a: {},

    "*::placeholder": {
      color: "gray.400",
    },
    "*, *::before, &::after": {
      borderColor: "gray.200",
      wordWrap: "break-word",
    },
  },
};

const topaz = extendTheme({
  config,
  fonts,
  styles,
  colors,
  semanticTokens,
  components: {
    Button,
  },
});

export default topaz;
