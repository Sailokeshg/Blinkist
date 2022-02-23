import { Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes/Theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

interface ReadAgainButtonProp {
  handleReadAgain: (item: string) => void;
  name: string;
}

const useStyle = makeStyles({
  readAgain: {
    color: "#0365F2",
    width: "parent",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "10px",
    fontSize: "16px",
    fontWeight: 500,
    "&:hover": {
      borderRadius: "0px",
      textDecoration: "underline",
    },
  },
});
const ReadAgainButton = (props: ReadAgainButtonProp) => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="text"
        className={classes.readAgain}
        onClick={() => {
          props.handleReadAgain(props.name);
        }}
      >
        <Typography variant="body1">Read Again</Typography>
      </Button>
    </ThemeProvider>
  );
};

export default ReadAgainButton;
