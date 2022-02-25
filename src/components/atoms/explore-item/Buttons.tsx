import React from "react";
import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

interface ButtonTypes {
  itemicon: React.ReactElement;
  itemname: string;
  handleChange: () => void;
}

const Buttons = (props: ButtonTypes) => {
  
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

  const classes = useStyle();
  return (
    <Link to="/explore" style={{ textDecoration: "none" }}>
    <Button
      variant="text"
      startIcon={props.itemicon}
      className={classes.buttons}
      onClick={() => props.handleChange}
    >
      {props.itemname}
    </Button>
    </Link>
  );
};

export default Buttons;
