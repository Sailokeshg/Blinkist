import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ThemeProvider from "@mui/styles/ThemeProvider";
import { theme } from "../../../../themes/Theme";



const FooterCaption = () => {
  
  const useStyles = makeStyles({
    caption: {
      fontStyle: "normal",
      fontSize: "24px",
      fontWeight: 500,
      color: "#0365F2",
    },
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" className={classes.caption}>
        Big ideas in small packages Start learnign now
      </Typography>
    </ThemeProvider>
  );
};

export default FooterCaption;
