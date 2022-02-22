import React from "react";
import TimerIcon from "../../atoms/timer/TimerIcon";
import useStyle from "../../../themes/Theme";
import { Grid,Typography } from "@mui/material";

interface TimeRead{
    time: string;
}
const ReadTime = (props:TimeRead) => {
  const classes = useStyle();

  return (
    <Grid container className={classes.readTimeGrid}>
      <Grid item><TimerIcon/></Grid>
      <Grid item>
          <Typography variant="caption">
              {props.time}
          </Typography>
      </Grid>
    </Grid>
  );
};

export default ReadTime;
