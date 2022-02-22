import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "../../../atoms/logo/Logo";
import { makeStyles } from "@mui/styles";
import SearchIcon from "../../../atoms/search-icon/SearchIcon";
import Explore from "../../../atoms/explore/Explore";
import MyLibrary from "../../../atoms/mylibrary/mylibrary-text/MyLibrary";

interface HeaderLeftProps {
  icon: boolean;
  handleChange: () => void;
}

const useStyle = makeStyles({
  headerLeftGridMain: {
    columnGap: "42px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  headerLeftGrid: {
    marginTop: "6px",
  },
});
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
