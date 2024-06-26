import { Button, Typography } from "@mui/material";
import React from "react";
import {ThemeProvider,makeStyles} from "@mui/styles";
import {theme} from "../../../themes/Theme";

interface FinishedButtonProp {
  handleFinish: (item: string) => void;
  name: string;
}


const FinishedButton = (props: FinishedButtonProp) => {
  const useStyle = makeStyles({
    finishReading: {
      color: "#0365F2",
      textTransform: "none",
      borderColor: "none",
      paddingBottom:"10px",
      paddingTop:"14px",
    },
  });

  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
    <Button
      variant="text"
      className={classes.finishReading}
      onClick={() => {
        props.handleFinish(props.name);
      }}
      component="button"
    >
      <Typography variant="body1">
      Finished
      </Typography>
    </Button>
    </ThemeProvider>
  );
};

export default FinishedButton;
