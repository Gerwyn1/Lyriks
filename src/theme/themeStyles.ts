import { Theme } from "@mui/material/styles";

const transitionDuration = 1000;

export const themedStyles = (
  theme?: Theme,
  mobileResponsiveWidth?: string | number,
  autocompleteValue?: string
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
    drawerList: {
      minHeight: "100vh",
    },
    drawerItem: {
      p: "6px",
      width: theme?.spacing(5),
      height: theme?.spacing(5),
    },
    drawerFirstItem: {
      color: "#fff",
      borderRadius: "50%",
      backgroundColor: "#00B3FF",
    },
    drawerLastItem: {
      transform: "rotate(180deg)",
    },
    autocomplete: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiAutocomplete-inputRoot": {
        color: theme?.palette.autocomplete.valueText,
        backgroundColor: theme?.palette.autocomplete.inputBgColor,
      },
      "& .MuiAutocomplete-inputRoot.Mui-focused": {
        "& fieldset": {
          border: autocompleteValue
            ? "none"
            : `1px solid ${theme?.palette.autocomplete.borderFocused}`,
        },
      },
      "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
        color: theme?.palette.autocomplete.endAdornment,
        ...(theme?.breakpoints.down("mobileXL") && {
          [theme.breakpoints.down("mobileXL")]: {
            display: "none",
          },
        }),
      },
      "& #search-for-song-label": {
        color: theme?.palette.autocomplete.label,
        display: autocompleteValue ? "none" : "block",
        ml: 1,
        ...(theme?.breakpoints.down("mobileL") && {
          [theme.breakpoints.down("mobileL")]: {
            ml: 0,
          },
        }),
        "& .MuiTypography-root": {
          ...(theme?.breakpoints.down("mobileM") && {
            [theme.breakpoints.down("mobileM")]: {
              fontSize: theme?.typography.sm,
            },
          }),
          ...(theme?.breakpoints.down("mobileS") && {
            [theme.breakpoints.down("mobileS")]: {
              fontSize: theme?.typography.xs,
            },
          }),
        },
      },
    },
    autocompleteOption: {
      color: theme?.palette.autocomplete.optionText,
      "&:hover": {
        backgroundColor: `${theme?.palette.option.bgColor} !important`,
      },
    },
  };
};
