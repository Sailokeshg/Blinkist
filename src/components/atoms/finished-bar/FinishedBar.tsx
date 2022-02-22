import React from "react";
import useStyle from "../../../themes/Theme";
import { Typography } from "@mui/material";

const FinishedBar = () => {
    const classes = useStyle();
    
    return (
        <Typography  className={classes.finishedBar} />
    
    );
}
export default FinishedBar;