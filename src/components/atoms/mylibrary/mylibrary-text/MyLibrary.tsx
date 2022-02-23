import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {theme} from "../../../../themes/Theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const useStyle = makeStyles({
  myLibrary: {
    fontSize: "16px",
    paddingBottom: "-20px",
    
    
  },
});

const MyLibrary = () => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
    <Typography variant="body1" className={classes.myLibrary}>
      My Library
    </Typography>
    </ThemeProvider>
  );
};

export default MyLibrary;
