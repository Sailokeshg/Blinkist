import { Button  } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import makeStyles from "@mui/styles/makeStyles";
const SendToKindle = () => {

    const useStyle = makeStyles({
        sendToKindle: {
        fontSize: "16px",
        fontWeight: 400,
        color: "#6D787E",
        textTransform: "none",
        }
    });
    const classes = useStyle();
    return (
        <Button
        endIcon={<ArrowForwardIcon/>}
        variant="text"
        component="button"
        className={classes.sendToKindle}>Send to kindle</Button>
    )
}
export default SendToKindle;