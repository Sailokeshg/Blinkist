import React from "react";
import TimerIcon from "../../atoms/timer/TimerIcon";
import {makeStyles} from "@material-ui/core/styles";
import { Grid,Typography } from "@mui/material";

interface TimeRead{
    time: string;
}

const useStyle = makeStyles({
  readTimeGrid: {
    allignItems: "center",
    color: "#6D787E",
  },
});
const ReadTime = (props:TimeRead) => {
  const classes = useStyle();

  return (
    <Grid container className={classes.readTimeGrid}>
      <Grid item><TimerIcon/></Grid>
      <Grid item>
          <Typography variant="caption3">
              {props.time}
          </Typography>
      </Grid>
    </Grid>
  );
};

export default ReadTime;
