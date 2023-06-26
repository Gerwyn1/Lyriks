import React from "react";
import { createTheme } from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";

interface CustomTypographyOptions {
  [variant: string]: TypographyProps["style"];
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    mobileS: true;
    mobileM: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    laptopXL: true;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    mobileS: React.CSSProperties;
    mobileM: React.CSSProperties;
    mobileL: React.CSSProperties;
    tablet: React.CSSProperties;
    laptop: React.CSSProperties;
    laptopL: React.CSSProperties;
    laptopXL: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mobileS?: React.CSSProperties;
    mobileM?: React.CSSProperties;
    mobileL?: React.CSSProperties;
    tablet?: React.CSSProperties;
    laptop?: React.CSSProperties;
    laptopL?: React.CSSProperties;
    laptopXL?: React.CSSProperties;
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
    midnightBlack: string;
    slateSteel: string;
    charcoal: string;
    silverSlate: string;
    shadowGraphite: string;
    white: string;

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
    midnightBlack?: string;
    slateSteel?: string;
    charcoal?: string;
    silverSlate?: string;
    shadowGraphite?: string;
    white?: string;

    autocomplete?: {
      inputBgColor: string;
      selected: string;
      unselected: string;
      valueText: string;
      optionText: string;
      borderFocused: string;
      endAdornment: string;
      label: string;
    };
    optionList?: {
      bgColor: string;
    };
    option?: {
      bgColor: string;
    };
  }
}

export let theme = createTheme({
  palette: {
    midnightBlack: "#1C1B1C",
    slateSteel: "#333333",
    charcoal: "#252525",
    silverSlate: "#8C8C8C",
    shadowGraphite: "#555555",
    white: "#fff",
  },
});

theme = createTheme({
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
      optionText: theme.palette.white,
      selected: theme.palette.slateSteel,
      unselected: theme.palette.charcoal,
      inputBgColor: theme.palette.midnightBlack,
      label: theme.palette.silverSlate,
      valueText: theme.palette.silverSlate,
      endAdornment: theme.palette.silverSlate,
      borderFocused: theme.palette.silverSlate,
    },
    optionList: {
      bgColor: theme.palette.charcoal,
    },
    option: {
      bgColor: theme.palette.shadowGraphite,
    },
  },

  typography: {
    mobileS: ".6rem",
    mobileM: "1rem",
    mobileL: "3.8rem",
    tablet: "3.8rem",
    laptop: "3.8rem",
    laptopL: "3.8rem",
    laptopXL: "3.8rem",
  } as CustomTypographyOptions,
});