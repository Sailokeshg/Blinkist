import { Grid, Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  exploreHeadItemOne: {
    fontWeight: 700,
    fontSize: "16px",
    color: "#116BE9",
  },
  exploreHeadItemTwo: {
    fontWeight: 500,
    fontSize: "16px",
    color: " #6D787E",
  },
});
const ExploreMenuHead = () => {
  const classes = useStyle();
  return (
    <Grid container direction="row">
      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.exploreHeadItemOne}>
          Explore by category
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.exploreHeadItemTwo}>
          See recently added titles
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2" className={classes.exploreHeadItemTwo}>
          See popular titles
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ExploreMenuHead;
