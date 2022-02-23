import React from "react";
import { Button, Typography } from "@mui/material";
import NavUp from "../nav/nav-up/NavUp";
import NavDown from "../nav/nav-down/NavDown";
import { makeStyles } from "@mui/styles";

interface HeaderProps {
  icon: boolean;
  handleChange: () => void;
}

const useStyle = makeStyles({
  exploreButton: {
    marginTop: "-8px",
    fontSize: "16px",
    padding: "none",
    textTransform: "none",
    fontWeight: 500,
    color: "#03314B",
    "&:hover": {
      borderBottom: "3px solid #2CE080",
      borderRadius: "0px",
      background: "none",
    },
  },
});
const Explore = (props: HeaderProps) => {
  const classes = useStyle();
  return (
    <Button
      endIcon={props.icon ? <NavUp /> : <NavDown />}
      className={classes.exploreButton}
    ><Typography variant="body1"> 
      Explore
      </Typography>
    </Button>
  );
};

export default Explore;
