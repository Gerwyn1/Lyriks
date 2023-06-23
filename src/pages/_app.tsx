import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxxs: true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobileS: true;
    mobileM: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    laptopXL: true;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 380,
        xxs: 425,
        xs: 480,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        mobileS: 320,
        mobileM: 375,
        mobileL: 425,
        tablet: 768,
        laptop: 1024,
        laptopL: 1440,
        laptopXL: 2560,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
