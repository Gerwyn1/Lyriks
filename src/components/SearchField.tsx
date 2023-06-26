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
import { top100Films } from "@/utils/Data";

interface Film {
  title: string;
  year: number;
}

export default function SearchField(props: TextFieldProps) {
  const theme = useTheme();
  const lessThan425 = useMediaQuery(theme.breakpoints.down("mobileL"));
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
        size={lessThan425 ? "small" : "medium"}
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
                  sx={{ display: lessThan425 ? "none" : "block" }}
                  icon={<SearchOutlinedIcon />}
                />
                <Typography noWrap>
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
              border: autoCompleteValue
                ? "none"
                : `1px solid ${theme.palette.autocomplete.borderFocused}`,
            },
          },
          "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
            color: theme.palette.autocomplete.endAdornment,
          },
          "& #search-for-song-label": {
            color: theme.palette.autocomplete.label,
            display: autoCompleteValue ? "none" : "block",
            ml: 1,
            "& .MuiTypography-root": {
              [theme.breakpoints.down("mobileM")]: {
                fontSize: theme.typography.mobileM,
              },
              [theme.breakpoints.down("mobileS")]: {
                fontSize: theme.typography.mobileS,
              },
            },
          },
        }}
      />
    </>
  );
}
