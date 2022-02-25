import React from "react";
import { Grid } from "@mui/material";
import BannerItems from "../banneritems/BannerItems";
import BannerImage from "../../../atoms/banner/image/BannerImage";
import { makeStyles } from "@mui/styles";

const MainBanner = () => {
  const useStyle = makeStyles({
mainBanner:{
    backgroundColor: "#F1F6F4",
    marginLeft: "490px",
    width: "940px",
    marginTop: "32px",
},
mainBannerItem:{
    margin: "45px",
},
bannerImage:{
    marginTop:"20px",
    marginLeft:"100px",
}

  });
  const classes = useStyle();
  return <Grid container className={classes.mainBanner}>
      <Grid item className={classes.mainBannerItem}>
          <BannerItems/>
      </Grid >
      <Grid item className={classes.bannerImage}>
          <BannerImage/>
          </Grid>
  </Grid>;
};

export default MainBanner;
