import { Grid } from "@mui/material";
import React from "react";
import { BannerItemOne } from "../../../atoms/banner/itemone/BannerItemOne";
import BannerItemTwo from "../../../atoms/banner/itemtwo/BannerItemTwo";

const BannerItems = () => {
  return (
    <Grid container direction="column" rowSpacing="15px">
      <Grid item>
        <BannerItemOne />
      </Grid>
      <Grid item>
        <BannerItemTwo />
      </Grid>
    </Grid>
  );
};
export default BannerItems;