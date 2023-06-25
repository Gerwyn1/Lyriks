import React, { useState } from "react";
import {
  Autocomplete,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useMediaQuery,
  useTheme,
  AutocompleteRenderOptionState,
} from "@mui/material";
import { styled } from "@mui/system";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import CreateSvgIcon from "@/components/CreateSvgIcon";
import styles from "@/styles/SearchField.module.css";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
];

interface Film {
  title: string;
  year: number;
}

export default function SearchField(props: TextFieldProps) {
  const theme = useTheme();
//   const lessThan425 = useMediaQuery(theme.breakpoints.down("xxs"));
//   const lessThan480 = useMediaQuery(theme.breakpoints.down("xs"));
  const [autoCompleteValue, setAutoCompleteValue] = useState("");

  const OptionListStyle = styled("ul")({
    backgroundColor: theme.palette.optionList.bgColor,
  });

  const OptionStyle = styled("li")({
    "&:hover": {
      backgroundColor: `${theme.palette.option.bgColor} !important`,
    },
  });

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    title: Film["title"],
    state: AutocompleteRenderOptionState
  ) => (
    <OptionStyle
      sx={{
        backgroundColor: state.selected
          ? `${theme.palette.autocomplete.selected} !important`
          : `${theme.palette.autocomplete.unselected} !important`,
        color: theme.palette.autocomplete.optionText,
      }}
      {...props}
    >
      {title}
    </OptionStyle>
  );

  return (
    <>
      <Autocomplete
        // size={lessThan480 ? "small" : "medium"}
        inputValue={autoCompleteValue}
        onInputChange={(
          event: React.SyntheticEvent<Element, Event>,
          newValue
        ) => {
           setAutoCompleteValue(newValue);
        }}
        id="search-for-song"
        freeSolo={false}
        options={top100Films.map((film) => film.title)}
        renderOption={renderOption}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <Stack direction="row" gap={2} alignItems={"center"}>
                <CreateSvgIcon
                //   sx={{ display: lessThan425 ? "none" : "block" }}
                //   fontSize={lessThan480 ? "small" : "medium"}
                sx={{ display: "none" }}
                  icon={<SearchOutlinedIcon />}
                />
                <Typography
                variant='h2'
                //   sx={{
                //     // [theme.breakpoints.down("xxs")]: { fontSize: ".8rem" },
                //     // [theme.breakpoints.down("xxxs")]: {
                //     //   fontSize: "0.6rem",
                //     //   mt: 0.5,
                //     // },
                //     // fontSize: theme.typography.variants.customFontSize.fontSize,
                //   }}
                >
                  Search for song, artist, lyrics...
                </Typography>
              </Stack>
            }
          />
        )}
        ListboxComponent={OptionListStyle}
        ListboxProps={{
          className: styles.autoCompleteListbox,
        }}
        sx={{
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiAutocomplete-inputRoot": {
            color: theme.palette.autocomplete.valueText,
            backgroundColor: theme.palette.autocomplete.inputBgColor,
          },
          "& .MuiAutocomplete-inputRoot.Mui-focused": {
            "& fieldset": {
              border: autoCompleteValue ? "none" : `1px solid ${theme.palette.autocomplete.borderFocused}`,
            },
          },
          "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
            color: theme.palette.autocomplete.endAdornment,
          },
          "& #search-for-song-label": {
            color: theme.palette.autocomplete.label,
            display: autoCompleteValue ? "none" : "block",
            ml: 1,
            // fontSize: lessthan380 ? "0.7rem" : lessThan480 ? "0.8rem" : "1rem",
          },
          // test
        }}
      />
    </>
  );
}
