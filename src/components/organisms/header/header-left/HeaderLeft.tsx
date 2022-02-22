import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "../../../atoms/logo/Logo";
import useStyle from "../../../../themes/Theme";
import SearchIcon from "../../../atoms/search-icon/SearchIcon";
import Explore from "../../../atoms/explore/Explore";
import MyLibrary from "../../../atoms/mylibrary/mylibrary-text/MyLibrary";

interface HeaderLeftProps {
  icon: boolean;
  handleChange: () => void;
}
const HeaderLeft = (props: HeaderLeftProps) => {
  const classes = useStyle();
  return (
    <Grid container className={classes.headerLeftGridMain}>
      <Grid item className={classes.headerLeftGrid}>
        <Logo />
      </Grid>
      <Grid item className={classes.headerLeftGrid}>
        <SearchIcon />
      </Grid>
      <Grid item className={classes.headerLeftGrid}>
        <Explore icon={props.icon} handleChange={props.handleChange} />
      </Grid>
      <Grid item className={classes.headerLeftGrid}>
            <MyLibrary/>
          </Grid>
    </Grid>
  );
};

export default HeaderLeft;
