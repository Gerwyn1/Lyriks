import React, { useState } from "react";
import {
  Autocomplete,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
  AutocompleteRenderOptionState,
  List,
  ListItem,
  Paper,
  AutocompleteRenderInputParams,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { themedStyles } from "@/theme/themeStyles";
import CreateSvgIcon from "@/components/CreateSvgIcon";
import styles from "@/styles/SearchField.module.css";
import { top100Films } from "@/utils/Data";

interface Film {
  title: string;
  year: number;
}

interface SearchFieldProps {
  lessThan425: boolean;
}

export default function SearchField({
  lessThan425,
}: SearchFieldProps & TextFieldProps) {
  const theme = useTheme();
  const [autocompleteValue, setAutocompleteValue] = useState("");

  console.log(autocompleteValue);

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    title: Film["title"],
    state: AutocompleteRenderOptionState
  ) => (
    <ListItem
      sx={themedStyles(theme, { autocompleteValue, state }).autocompleteOption}
      {...props}
    >
      {title}
    </ListItem>
  );

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label={
        <Stack direction="row" gap={lessThan425 ? 1 : 2} alignItems={"center"}>
          <CreateSvgIcon icon={<SearchOutlinedIcon />} />
          <Typography noWrap>Search for song, artist, lyrics...</Typography>
        </Stack>
      }
    />
  );

  return (
    <Autocomplete
      size={lessThan425 ? "small" : "medium"}
      inputValue={autocompleteValue}
      onInputChange={(_, newValue) => setAutocompleteValue(newValue)}
      id="search-for-song"
      freeSolo={false}
      clearOnEscape={true}
      options={top100Films.map((film) => film.title)}
      renderOption={renderOption}
      renderInput={renderInput}
      PaperComponent={styled(Paper)({
        background: "transparent",
        borderRadius: "30px",
      })}
      ListboxComponent={styled(List)({
        backgroundColor: theme.palette.optionList.bgColor,
        borderRadius: theme?.typography.pxToRem(30),
      })}
      ListboxProps={{
        className: styles.autoCompleteListbox,
      }}
      sx={themedStyles(theme, { autocompleteValue }).autocomplete}
    />
  );
}
