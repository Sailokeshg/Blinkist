import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import customStyle from "../../../themes/Theme";

 function AddToLibraryButton() {
  const classes = customStyle();
  return (
    <Button startIcon={<AddIcon />} className={classes.addToLibBtn}>
      Add to library
    </Button>
  );
}

export default AddToLibraryButton;