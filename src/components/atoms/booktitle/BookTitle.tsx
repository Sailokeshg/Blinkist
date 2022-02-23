import { Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import {ThemeProvider} from "@mui/styles";
import {theme} from "../../../themes/Theme";

interface BookDetailsProps {
    bookName: string;
}

const useStyles = makeStyles({
  bookTitleOne: {
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 700,
    marginLeft: "16px",
    marginTop: "23px",
  },
});
const CardHead = (props:BookDetailsProps) => {
   const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" className={classes.bookTitleOne}>
        {props.bookName}
      </Typography>
      </ThemeProvider>
      
    )
};

export default CardHead;