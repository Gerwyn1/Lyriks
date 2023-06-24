import {
  createTheme,
  CustomTypographyOptions,
  responsiveFontSizes,
} from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";

// interface CustomTypographyOptions extends TypographyProps {
//   lol?: {
//     fontSize?: string;
//   };
// }

// interface CustomTypographyOptions {
//     [lol: string]: TypographyProps["style"];
//   }

//   interface CustomTypographyOptions {
//     [variant: string]: TypographyProps["style"];
//   }

//   interface TypographyProps {
//     lol?: {
//       fontSize?: string;
//     };
//   }

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lol: true;
  }
}

declare module "@mui/material/styles" {
    interface TypographyPropsOptionsOverrides {
        lol: true;
      }
//   interface TypographyProps {
//     lol?: {
//       fontSize?: string;
//     };
//   }

//   interface CustomTypographyOptions {
//     [variant: string]: TypographyProps["style"];
//   }

    interface CustomTypographyOptions {
      [lol: string]: TypographyProps["style"];
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

export let theme = createTheme({
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
  typography: {
    fontSize: 16,
    lol: {
      fontSize: ".5rem",
    },
    h1: {
      fontSize: "3.5rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
    button: {
      fontSize: "0.875rem",
    },
    overline: {
      fontSize: "0.75rem",
    },
  } as CustomTypographyOptions,
  components: {
    MuiTypography: {
      styleOverrides: {
        lol: {
          fontSize: ".5rem",
        },
      } as CustomTypographyOptions,
    },
  },
});

// theme = responsiveFontSizes(theme);

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('mobileM')]: {
      fontSize: '2rem',
    },
  };


