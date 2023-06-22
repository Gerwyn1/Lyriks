import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxxs:true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs:380,
        xxs: 425,
        xs: 480,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
