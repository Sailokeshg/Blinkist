import { Grid, Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "../../../../themes/Theme";

const useStyle = makeStyles({
  exploreHeadItemOne: {
    color: "#116BE9",
  },
  exploreHeadItemTwo: {
    color: " #6D787E",
  },
});
const ExploreMenuHead = () => {
  const classes = useStyle();
  return (
<ThemeProvider theme={theme}>
    <Grid container direction="row">
      <Grid item xs={4}>
        <Typography variant="subtitle3" className={classes.exploreHeadItemOne}>
          Explore by category
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1" className={classes.exploreHeadItemTwo}>
          See recently added titles
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1" className={classes.exploreHeadItemTwo}>
          See popular titles
        </Typography>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default ExploreMenuHead;
