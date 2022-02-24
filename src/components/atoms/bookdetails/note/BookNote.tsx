import { Typography } from "@mui/material";
import React from 'react';
import { makeStyles } from "@mui/styles";

const BookNote = () => {

    const useStyle = makeStyles({
        bookNote: {
            fontSize: "20px",
            fontWeight: 400,
            color: "#03314B",
        },
    });
  const classes=useStyle();
  return (<Typography
        className={classes.bookNote}
        variant="subtitle2"
        
      >
          Turning Your Business into an Enduring Great Company
      </Typography>
  );
};

export default BookNote;
