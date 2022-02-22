import React from "react";
import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

interface ButtonTypes {
  itemicon: React.ReactElement;
  itemname: string;
  handleChange: () => void;
}
const useStyle = makeStyles({
  buttons: {
    textTransform: "none",
    color: "#6D787E",
    fontWeight: 400,
    fontStyle: "Normal",
    fontSize: "16px",
    "&:hover": {
      color: "#0365F2",
    },
  },
});
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
