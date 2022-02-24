import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@mui/styles";
import LoginAvatar from "../../atoms/avatar/LoginAvatar";
import NavDown from "../../atoms/nav/nav-down/NavDown";

const AvatarDropDown = () => {
  const useStyle = makeStyles({
    avatarDrop: {
      marginBottom: "23px",
      marginTop: "29px",
      marginLeft: "292px",
    },
    avatarNavDown: {
      marginTop: "6.85px",
    },
  });
  
  const classes = useStyle();

  return (
    <Grid container className={classes.avatarDrop}>
      <Grid item>
        <LoginAvatar />
      </Grid>
      <Grid item className={classes.avatarNavDown}>
          <NavDown/>
      </Grid>
    </Grid>
  );
};

export default AvatarDropDown;
