import { Typography } from "@mui/material";
import React from "react";
import useStyles  from "../../../themes/Theme";

interface BookDetailsProps {
    bookName: string;
}
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