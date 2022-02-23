import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import {theme} from "../../../../../themes/Theme";
import ThemeProvider from "@mui/styles/ThemeProvider";

interface NavHeadNameProp {
    headname: string
}

const useStyle= makeStyles({
    navHead: {
    fontStyle: "normal",
    fontWeight: 700,
    color: "#03314B",
    }
});
const NavHead = (props:NavHeadNameProp) =>{
    const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
    <Typography variant='body1' className={classes.navHead}>
        {props.headname}
    </Typography>
    </ThemeProvider>
  )
}

export default NavHead