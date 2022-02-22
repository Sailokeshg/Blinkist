import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@material-ui/core/styles";

const customStyle = makeStyles({
  addToLibBtn: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "20px",
    fontSize: "16px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
});

 function AddToLibraryButton() {
  const classes = customStyle();
  return (
    <Button startIcon={<AddIcon />} className={classes.addToLibBtn}>
      Add to library
    </Button>
  );
}

export default AddToLibraryButton;