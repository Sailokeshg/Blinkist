import React from "react";
import { Button } from "@material-ui/core";
import useStyle from "../../../themes/Theme";

interface ButtonTypes {
  itemicon: React.ReactElement;
  itemname: string;
  handleChange: () => void;
}

const Buttons = (props: ButtonTypes) => {
  const classes = useStyle();
  return (
    <Button
      variant="text"
      startIcon={props.itemicon}
      className={classes.buttons}
      onClick={() => props.handleChange}
    >
      {props.itemname}
    </Button>
  );
};

export default Buttons;
