import React from "react";
import { Button } from "@mui/material";
import NavUp from "../nav/nav-up/NavUp";
import NavDown from "../nav/nav-down/NavDown";
import useStyle from "../../../themes/Theme";

interface HeaderProps {
  icon: boolean;
  handleChange: () => void;
}

const Explore = (props: HeaderProps) => {
  const classes = useStyle();
  return (
    <Button endIcon={props.icon ? <NavUp /> : <NavDown />}
    className ={classes.exploreButton}
    >Explore</Button>
  );
};

export default Explore;