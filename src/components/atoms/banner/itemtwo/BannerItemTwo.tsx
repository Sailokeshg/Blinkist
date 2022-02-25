import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const BannerItemTwo = () => {

    const useStyles = makeStyles({
        bannerItemTwo: {
            fontWeight: "400",
            fontSize: "18px",
            color: "#6D787E",
            textAlign:"left",
        }
        ,
    });
    const classes = useStyles();
  return <>
  <Typography variant="subtitle2"
  width="461px"
  className={classes.bannerItemTwo}>
  Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
  </Typography>
  </>;
};
export default BannerItemTwo;