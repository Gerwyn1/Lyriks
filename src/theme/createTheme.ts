import React from "react";
import { createTheme } from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";

interface CustomTypographyOptions {
  [variant: string]: TypographyProps["style"];
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xs: true;
    sm: true;
    base: true;
    lg: true;
    xl: true;
    "2xl": true;
    "3xl": true;
    "4xl": true;
    "5xl": true;
    "6xl": true;
    "7xl": true;
    "8xl": true;
    "9xl": true;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    base: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    "2xl": React.CSSProperties;
    "3xl": React.CSSProperties;
    "4xl": React.CSSProperties;
    "5xl": React.CSSProperties;
    "6xl": React.CSSProperties;
    "7xl": React.CSSProperties;
    "8xl": React.CSSProperties;
    "9xl": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    xs?: React.CSSProperties;
    sm?: React.CSSProperties;
    base?: React.CSSProperties;
    lg?: React.CSSProperties;
    xl?: React.CSSProperties;
    "2xl"?: React.CSSProperties;
    "3xl"?: React.CSSProperties;
    "4xl"?: React.CSSProperties;
    "5xl"?: React.CSSProperties;
    "6xl"?: React.CSSProperties;
    "7xl"?: React.CSSProperties;
    "8xl"?: React.CSSProperties;
    "9xl"?: React.CSSProperties;
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
    mobileXL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    laptopXL: true;
  }

  interface Palette {
    white: string;
    midnightBlack: string;
    slateSteel: string;
    charcoal: string;
    silverSlate: string;
    shadowGraphite: string;
    moonstoneMist: string;
    deepSkyBlue: string;
    midnightShadow: string;

    drawer: {
      paper: string;
      firstIconBgColor: string;
      selected: string;
      unselected: string;
    };

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
    white?: string;
    midnightBlack?: string;
    slateSteel?: string;
    charcoal?: string;
    silverSlate?: string;
    shadowGraphite?: string;
    moonstoneMist?: string;
    deepSkyBlue?: string;
    midnightShadow?: string;

    drawer?: {
      paper: string;
      firstIconBgColor: string;
      selected: string;
      unselected: string;
    };

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
    white: "#fff",
    midnightBlack: "#1C1B1C",
    slateSteel: "#333333",
    charcoal: "#252525",
    silverSlate: "#8C8C8C",
    shadowGraphite: "#555555",
    moonstoneMist: "#898989",
    deepSkyBlue: "#00B3FF",
    midnightShadow: "#131313",
  },
});

theme = createTheme({
  breakpoints: {
    values: {
      mobileS: 320,
      mobileM: 375,
      mobileL: 425,
      mobileXL: 480,
      tablet: 768,
      laptop: 1024,
      laptopL: 1440,
      laptopXL: 2560,
    },
  },
  palette: {
    drawer: {
      paper: theme.palette.midnightShadow,
      firstIconBgColor: theme.palette.deepSkyBlue,
      selected: theme.palette.moonstoneMist,
      unselected: theme.palette.white,
    },
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
    xs: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    base: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    lg: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    },
    xl: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
    "2xl": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
    "3xl": {
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    "4xl": {
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
    },
    "5xl": {
      fontSize: "3rem",
      lineHeight: 1,
    },
    "6xl": {
      fontSize: "3.75rem",
      lineHeight: 1,
    },
    "7xl": {
      fontSize: "4.5rem",
      lineHeight: 1,
    },
    "8xl": {
      fontSize: "6rem",
      lineHeight: 1,
    },
    "9xl": {
      fontSize: "8rem",
      lineHeight: 1,
    },
  } as CustomTypographyOptions,
});
