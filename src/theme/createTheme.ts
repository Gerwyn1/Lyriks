import React from "react";
import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lol: true;
    size: true;
    fatSize: true;
  }
}
interface CustomTypographyOptions {
    [variant: string]: TypographyProps["style"];
  }

declare module "@mui/material/styles" {
  interface TypographyVariants {
    lol: React.CSSProperties;
    size: React.CSSProperties;
    fatSize: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    lol?: React.CSSProperties;
    size?: React.CSSProperties;
    fatSize?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileS: true;
    mobileM: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    laptopXL: true;
  }

  interface Palette {
    autocomplete: {
      inputBgColor: string;
      selected: string;
      unselected: string;
      valueText: string;
      optionText: string;
      borderFocused: string;
      endAdornment: string;
      label: string;
    };

    optionList: {
      bgColor: string;
    };
    option: {
      bgColor: string;
    };
  }

  interface PaletteOptions {
    autocomplete: {
      inputBgColor: string;
      selected: string;
      unselected: string;
      valueText: string;
      optionText: string;
      borderFocused: string;
      endAdornment: string;
      label: string;
    };
    optionList: {
      bgColor: string;
    };
    option: {
      bgColor: string;
    };
  }
}

// export let theme = createTheme({
//   breakpoints: {
//     values: {
//       mobileS: 320,
//       mobileM: 375,
//       mobileL: 425,
//       tablet: 768,
//       laptop: 1024,
//       laptopL: 1440,
//       laptopXL: 2560,
//     },
//   },
// });

export let theme = createTheme({
    breakpoints: {
        values: {
          mobileS: 320,
          mobileM: 375,
          mobileL: 425,
          tablet: 768,
          laptop: 1024,
          laptopL: 1440,
          laptopXL: 2560,
        },
      },
  palette: {
    autocomplete: {
      inputBgColor: "#1C1B1C",
      selected: "#333333",
      unselected: "#252525",
      valueText: "#8C8C8C",
      optionText: "#fff",
      borderFocused: "#8C8C8C",
      endAdornment: "#8C8C8C",
      label: "#8C8C8C",
    },
    optionList: {
      bgColor: "#252525",
    },
    option: {
      bgColor: "#555555",
    },
  },

  typography: {
    fatSize: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    size: {
      lineHeight: 1.5,
      fontSize: "3rem",
    //   "@media (min-width: 700px)": {
    //     fontSize: "1.5rem",
    //   },
    //   [theme.breakpoints.down("mobileM")]: {
    //     fontSize: "2.5rem",
    //   },
    },
    // lol: {
    //   fontSize: "0.75rem",
    //   "@media (min-width: 600px)": {
    //     fontSize: "1.5rem",
    //   },
    //   [theme.breakpoints.down("mobileS")]: {
    //     fontSize: "2.5rem",
    //   },
    // },
  } as CustomTypographyOptions,
});

theme = responsiveFontSizes(theme, {
    breakpoints: [
      "mobileS",
      "mobileM",
      "mobileL",
      "tablet",
      "laptop",
      "laptopL",
      "laptopXL",
    ],
  factor: 2, // The scaling factor for the font sizes
  variants: ["h1", "h2", "body1", "size", "fatSize"] as any, // Specify the variants you want to make responsive
});

// "lol",