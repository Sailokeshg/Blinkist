import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/styles";
import {theme} from "../../../../themes/Theme";


const Policies = () => {

    const useStyle = makeStyles({
        policies: {
            fontStyle: "normal",
            color: "#6D787E",
            display: "inline",    
            float: "left",
        }
    });

    const classes = useStyle();
    return(
        <ThemeProvider theme={theme}>
        <Typography variant='caption1'
        className={classes.policies}>
             © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
        </Typography>
        </ThemeProvider>
    )
}

export default Policies;