import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { theme } from "../../../../../themes/Theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const useStyle = makeStyles({
    navItem: {
        width: "214px",
        marginTop: "16px",
        fontStyle: "normal",
        color: "#6D787E",
    }
});

interface NavItemProp {
    itemname: string
}

const NavItem = (props:NavItemProp) => {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
        <Typography variant="body2" className={classes.navItem}>
        {props.itemname}
        </Typography>
        </ThemeProvider>
    )
}

export default NavItem;