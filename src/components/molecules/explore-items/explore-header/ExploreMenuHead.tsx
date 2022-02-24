import { Grid, Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "../../../../themes/Theme";


const ExploreMenuHead = () => {

  const useStyle = makeStyles({
    exploreHeadItemOne: {
      color: "#116BE9",
      paddingTop: "22px",
      paddingBottom: "20px",
    },
    exploreHeadItemTwo: {
      color: " #6D787E",
      paddingTop: "22px",
      paddingBottom: "20px",
      
    },
  });
  
  const classes = useStyle();
  return (
<ThemeProvider theme={theme}>
    <Grid container direction="row">
      <Grid item xs={4}>
        <Typography variant="body1" className={classes.exploreHeadItemOne}>
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
