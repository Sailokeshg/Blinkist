import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";


const useStyle = makeStyles({
    finishedBar: {
        width: "295px",
        height: "15px",
        position: "relative",
        background: "#DFE8F6",
        boxSizing: "border-box",
        borderRadius: "0px 0px 8px 8px",
      },
});
const FinishedBar = () => {
    const classes = useStyle();
    
    return (
        <Typography  className={classes.finishedBar} />
    
    );
}
export default FinishedBar;