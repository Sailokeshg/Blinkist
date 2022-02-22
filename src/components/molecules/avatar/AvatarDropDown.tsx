import { Grid } from "@material-ui/core";
import React from "react";
import useStyle from "../../../themes/Theme";
import LoginAvatar from "../../atoms/avatar/LoginAvatar";
import NavDown from "../../atoms/nav/nav-down/NavDown";

const AvatarDropDown = () => {
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
