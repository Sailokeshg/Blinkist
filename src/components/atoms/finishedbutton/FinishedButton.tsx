import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

interface FinishedButtonProp {
  handleFinish: (item: string) => void;
  name: string;
}

const useStyle = makeStyles({
  finishReading: {
    fontWeight: 500,
    fontSize: "16px",
    color: "#0365F2",
    textTransform: "none",
    borderColor: "none",
  },
});

const FinishedButton = (props: FinishedButtonProp) => {
  const classes = useStyle();
  return (
    <Button
      variant="text"
      className={classes.finishReading}
      onClick={() => {
        props.handleFinish(props.name);
      }}
      component="button"
    >
      Finished
    </Button>
  );
};

export default FinishedButton;
