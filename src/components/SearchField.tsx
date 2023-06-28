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

  const StyledList = styled(List)({
    backgroundColor: theme.palette.optionList.bgColor,
  });

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    title: Film["title"],
    state: AutocompleteRenderOptionState
  ) => (
    <ListItem
      sx={{
        backgroundColor: state.selected
          ? `${theme.palette.autocomplete.selected} !important`
          : `${theme.palette.autocomplete.unselected} !important`,
        ...themedStyles(theme, undefined, autocompleteValue).autocompleteOption,
      }}
      {...props}
    >
      {title}
    </ListItem>
  );

  return (
    <>
      <Autocomplete
        size={lessThan425 ? "small" : "medium"}
        inputValue={autocompleteValue}
        onInputChange={(_, newValue) => setAutocompleteValue(newValue)}
        id="search-for-song"
        freeSolo={false}
        clearOnEscape={true}
        options={top100Films.map((film) => film.title)}
        renderOption={renderOption}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <Stack
                direction="row"
                gap={lessThan425 ? 1 : 2}
                alignItems={"center"}
              >
                <CreateSvgIcon icon={<SearchOutlinedIcon />} />
                <Typography noWrap>
                  Search for song, artist, lyrics...
                </Typography>
              </Stack>
            }
          />
        )}
        ListboxComponent={StyledList}
        ListboxProps={{
          className: styles.autoCompleteListbox,
        }}
        sx={{
          ...themedStyles(theme, undefined, autocompleteValue).autocomplete
        }}
      />
    </>
  );
}