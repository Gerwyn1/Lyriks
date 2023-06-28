import { Theme } from "@mui/material/styles";

const transitionDuration = 1000;
interface VariablesProps {
  responsiveDrawerWidth?: string | number;
  nav?: { text: string };
  navIcon?: string;
  autocompleteValue?: string;
  state?: { selected: boolean };
}

export const themedStyles = (
  theme?: Theme,
  {
    responsiveDrawerWidth,
    nav: { text: navText } = { text: "" },
    navIcon,
    autocompleteValue,
    state: { selected: autocompleteSelected } = { selected: false },
  }: VariablesProps = {}
) => {
  const drawerItemSvg = {
    p: "6px",
    width: theme?.spacing(5),
    height: theme?.spacing(5),
  };

  return {
    drawer: {
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: responsiveDrawerWidth,
      backgroundColor: "#131313",
      overflowX: "hidden",
    },
    content: {
      padding: 16,
      minWidth: responsiveDrawerWidth,
      marginLeft: 0,
      transition: theme?.transitions.create("margin", {
        easing: theme?.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    contentShift: {
      minWidth: responsiveDrawerWidth,
      marginLeft: responsiveDrawerWidth,
      transition: theme?.transitions.create("margin", {
        easing: theme?.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    drawerList: {
      minHeight: "100vh",
    },
    drawerItem: {
      "& .MuiSvgIcon-root": {
        ...drawerItemSvg,
        color: navIcon === navText ? "#fff" : "#898989",
      },
    },
    drawerFirstItem: {
      "& .MuiSvgIcon-root": {
        ...drawerItemSvg,
        color: "#fff",
        borderRadius: "50%",
        backgroundColor: "#00B3FF",
      },
    },
    drawerLastItem: {
      position: "absolute",
      bottom: 5,
      "& .MuiSvgIcon-root": {
        ...drawerItemSvg,
        transform: "rotate(180deg)",
        color: navIcon === "Exit Icon" ? "#fff" : "#898989",
      },
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
      backgroundColor: autocompleteSelected
        ? `${theme?.palette.autocomplete.selected} !important`
        : `${theme?.palette.autocomplete.unselected} !important`,
    },
  };
};
