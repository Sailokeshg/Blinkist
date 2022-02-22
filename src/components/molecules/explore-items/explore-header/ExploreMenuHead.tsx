import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyle from "../../../../themes/Theme";
const ExploreMenuHead = () => {
  const classes = useStyle();
  return (
    <Grid container direction="row">
      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.exploreHeadItemOne}>Explore by category</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.exploreHeadItemTwo}>See recently added titles</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.exploreHeadItemTwo}>See popular titles</Typography>
      </Grid>
    </Grid>
  );
};

export default ExploreMenuHead;
