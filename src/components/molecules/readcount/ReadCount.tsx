import React from "react";
import UserIcon from "../../atoms/usericon/UserIcon";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Typography } from "@mui/material";
interface Props {
  readcount: string;
}

const useStyle = makeStyles({
  readCountGrid: {
    color: "#6D787E",
    
  },
});
const ReadCount = (props: Props) => {
  const classes = useStyle();
  return (
    <Grid container direction="row" className={classes.readCountGrid}>
      <Grid item>
        <UserIcon />
      </Grid>
      <Grid item>
        <Typography variant="caption3">{props.readcount}</Typography>
      </Grid>
    </Grid>
  );
};

export default ReadCount;
