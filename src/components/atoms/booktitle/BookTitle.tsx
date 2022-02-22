import { Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

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
        <>
      <Typography variant="subtitle1" className={classes.bookTitleOne}>
        {props.bookName}
      </Typography>
      </>
    )
}

export default CardHead;