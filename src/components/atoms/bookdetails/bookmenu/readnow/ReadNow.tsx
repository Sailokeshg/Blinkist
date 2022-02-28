import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const ReadNow = () => {
  const useStyle = makeStyles({
    readnow: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#22C870",
      borderColor: "#111",
      textTransform: "none",
    },
  });
  const classes = useStyle();
  return (
    <Button className={classes.readnow} variant="outlined" component="button">
      Read now
    </Button>
  );
};

export default ReadNow;
