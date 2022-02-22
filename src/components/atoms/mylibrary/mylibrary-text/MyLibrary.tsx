import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  myLibrary: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#03314B",
  },
});

const MyLibrary = () => {
  const classes = useStyle();
  return (
    <Typography variant="body1" className={classes.myLibrary}>
      My Library
    </Typography>
  );
};

export default MyLibrary;
