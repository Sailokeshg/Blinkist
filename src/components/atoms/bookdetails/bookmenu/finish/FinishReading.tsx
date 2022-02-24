import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";


interface FinishReadingProp {
    handleFinish: (bookname: string) => void
    bookname: string    
    button:boolean
}
const FinishReading =(props:FinishReadingProp)=> {

    const useStyle = makeStyles({
        finishReading: {
        fontWeight: 500,
        fontSize: "16px",
        color: "#03314B",
        backgroundColor: "#2CE080",
        textTransform: "none",
        borderColor: "none",
        }
    });

    const classes = useStyle();

    const handle = () => {
        props.handleFinish(props.bookname);
    }
    return(
<Button onClick={handle}
className={classes.finishReading}  sx={{
    display: props.button ? "none" : "",
    "&:hover": {
      backgroundColor: "#2CE080",
    },
  }}>Finished Reading</Button>
    )
}
export default FinishReading;