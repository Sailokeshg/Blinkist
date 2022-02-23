import React from "react";
import Logo from "../../../atoms/logo/Logo";
import FooterCaption from "../../../atoms/footer/footercaption/FooterCaption";
import { makeStyles } from "@mui/styles";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles({
  entiregrid: {
    width: "378px",
    height: "128px",
  },
  logogrid: {
    height: "26px",
    width: "124px",
  },
  captiongrid: {
    marginTop: "32px",
    maxWidth: "350px",
    textAlign:"start",
  },
});
const FooterCaptionGrid = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.entiregrid}>
      <Grid item className={classes.logogrid}>
        <Logo />
      </Grid>
      <Grid item className={classes.captiongrid}>
        <FooterCaption />
      </Grid>
    </Grid>
  );
};

export default FooterCaptionGrid;
