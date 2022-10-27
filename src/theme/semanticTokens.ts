import { colorTokens } from "./colors";

export const semanticTokens = {
  colors: {
    ...colorTokens,
    primary: {
      default: "blue.500",
      _dark: "blue.400",
    },
    "btn-bg-hover": {
      default: "gray.300",
      _dark: "gray.600",
    },
    "btn-bg-active-hover": {
      default: "blackAlpha.800",
      _dark: "whiteAlpha.800",
    },
    text: {
      default: "blackAlpha.900",
      _dark: "whiteAlpha.900",
    },
    textInverted: {
      default: "blue.50",
      _dark: "blue.900",
    },
    branding: {
      default: "white",
      _dark: "gray.800",
    },
    "bg-default": {
      default: "blackAlpha.100",
      _dark: "blackAlpha.800",
    },
  },
  borders: {},
};
