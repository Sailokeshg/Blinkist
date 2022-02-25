import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import SearchIcon from "../../atoms/search-icon/SearchIcon";
import {theme} from "../../../themes/Theme";




interface SearchInputProps {
  search: (item: string) => void;
}

const MainSearch = (props: SearchInputProps) => {

  const useStyle = makeStyles({
    TextField: {
      width: "658px",
      marginBottom: "2px",
      marginTop: "58px",
      color: "#6D787E",
      padding: "16px",
      fontWeight: 700,
      fontSize: "24px",
      marginRight: "250px",
    },
  });

  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
    <TextField
      variant="standard"
      placeholder="Search by title or author"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => {
        props.search(e.target.value.toLowerCase());
      }}
      className={classes.TextField}
    ></TextField>
    </ThemeProvider>
  );
};

export default MainSearch;
