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


const HeaderLeft = (props: HeaderLeftProps) => {

  const useStyle = makeStyles({
    headerLeftGridMain: {
      columnGap: "42px",
      marginTop: "30px",
      marginBottom: "30px",
      justifyContent: "center",
    },
    headerLeftGrid: {
      marginTop: "6px",
      justifyContent: "center",
    },
    headerLeftGridLibrary: {
      marginTop: "4px",
    }
  });
  
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
      <Grid item className={classes.headerLeftGridLibrary}>
            <MyLibrary/>
          </Grid>
    </Grid>
  );
};

export default HeaderLeft;
