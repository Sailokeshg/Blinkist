import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "../../atoms/search-icon/SearchIcon";

interface SearchInputProps {
  search: (item: string) => void;
}

const useStyle = makeStyles({
  TextField: {
    width: "658px",
    marginBottom: "0px",
    marginTop: "58px",
    color: "#6D787E",
    padding: "16px",
    fontWeight: 700,
    fontSize: "24px",
    marginLeft: "225px",
  },
});

const MainSearch = (props: SearchInputProps) => {
  const classes = useStyle();
  return (
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
  );
};

export default MainSearch;
