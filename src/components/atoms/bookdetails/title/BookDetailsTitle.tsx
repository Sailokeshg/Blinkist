import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


const BookDetailsTitle = () => {

    const useStyle = makeStyles({
        bookTitle:{
            fontSize: "36px",
        fontWeight: 700,
        color: "#03314B",
        }
    })
  const classes = useStyle();
  return (
    <Typography className={classes.bookTitle} variant="h1">
      Beyond Entrepreneurship 2.0
    </Typography>
  );
};

export default BookDetailsTitle;
