import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    ghost: { borderRadius: "full", ":hover": { bg: "btn-bg-hover" } },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};
