import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const BannerItemOne = () => {
const useStyles = makeStyles({
    bannerItemOne: {
        fontWeight: "700",
        fontSize: "36px",
        color: "#03314B",
        textAlign:"left",
    }
});
const classes = useStyles();
    return(
        <>
        <Typography variant="h1"
        width="310px" className={classes.bannerItemOne}>
             Explore Books on entrepreneurship
            </Typography>
        </>
    )
}