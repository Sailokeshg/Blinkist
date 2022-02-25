import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../../themes/Theme";
const Heading = ()=>{

    const useStyles = makeStyles({
        head:{
            marginTop: "59px",
            marginLeft: "489px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#03314B",
            textAlign:"left",
        
        }
    });
    const classes = useStyles();
    return(
        <ThemeProvider  theme={theme}>
        <Typography variant="h3" className={classes.head}>
            Trending blinks
        </Typography>
        </ThemeProvider>
    )
}
export default Heading;