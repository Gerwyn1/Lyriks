import { Theme } from "@mui/material/styles";

const transitionDuration = 1000;

export const themedStyles = (
  theme?: Theme,
  mobileResponsiveWidth?: string | number,
  autoCompleteValue? : string
) => {
  return {
    drawer: {
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: mobileResponsiveWidth,
      backgroundColor: "#131313",
      overflowX: "hidden",
    },
    content: {
      padding: 16,
      minWidth: mobileResponsiveWidth,
      marginLeft: 0,
      transition: theme?.transitions.create("margin", {
        easing: theme?.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    contentShift: {
      minWidth: mobileResponsiveWidth,
      marginLeft: mobileResponsiveWidth,
      transition: theme?.transitions.create("margin", {
        easing: theme?.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    list: {
      minHeight: "100vh",
    },
    listItem: {
      p: "6px",
      width: theme?.spacing(5),
      height: theme?.spacing(5),
    },
    firstListItem: {
      color: "#fff",
      borderRadius: "50%",
      backgroundColor: "#00B3FF",
    },
    lastListItem: {
      transform: "rotate(180deg)",
    }
  };
};
