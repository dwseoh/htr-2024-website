import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const inputSelectStyle = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "htr.500",
        },
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "htr.500",
  },
};

const theme = extendTheme(
  {
    breakpoints: createBreakpoints({
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    }),
    fonts: {
      heading: `Major Mono Display, ${base.fonts?.heading}`,
      body: `Montserrat, ${base.fonts?.body}`,
      default: `Montserrat, ${base.fonts?.body}`,
    },
    colors: {
      htr: { 600: "#5078af", 500: "#699DE4", 400: "#A4C2F4" }, // 500 is normal, 400 is light, 600 is darker
      htr2: {},
    },
    components: {
      Input: { ...inputSelectStyle },
      Select: { ...inputSelectStyle },
      Checkbox: {
        baseStyle: {
          control: { ...brandRing },
        },
      },
      Button: {
        variants: {
          primary: (props) => ({
            ...brandRing,
            backgroundColor: mode("htr.500", "htr.500")(props),
            color: mode("white", "gray.800")(props),
            _hover: {
              backgroundColor: mode("htr.400", "htr.400")(props),
            },

            _active: {
              backgroundColor: mode("htr.600", "htr.600")(props),
            },
          }),
        },
      },
      Container: {
        primary: (props) => ({
          backgroundColor: mode("gray.100", "gray.800")(props),
          color: mode("gray.800", "gray.100"),
        }),
      },
      AccordionButton: {
        variants: {
          primary: (props) => ({
            _hover: {
              backgroundColor: mode("gray.800", "gray.100"),
            },

            _focus: {
              ringColor: "gray.800",
            },
          }),
        },
      },
      HStack: {
        variants: {
          primary: (props) => {
            backgroundColor: mode("gray.800", "white")(props);
          },
        },
      },
    },
    textStyles: {
      thin: {
        fontSize: "1.5em",
        fontWeight: "light",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "htr",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
