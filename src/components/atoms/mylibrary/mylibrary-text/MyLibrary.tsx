import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {theme} from "../../../../themes/Theme";
import {Link} from "react-router-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";



const MyLibrary = () => {

  const useStyle = makeStyles({
    myLibrary: {
      fontSize: "16px",
      paddingBottom: "-20px",
       color:'#03314B',
    },
  });
  
  const classes = useStyle();
  return (
    <Link to="/" style={{ textDecoration: "none" }} >
    <ThemeProvider theme={theme}>
    <Typography variant="body2" className={classes.myLibrary}>
      My Library
    </Typography>
    </ThemeProvider>
    </Link>
  );
};

export default MyLibrary;
