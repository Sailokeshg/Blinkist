import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material'


const useStyle = makeStyles({
  currentBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    borderRadius: "0px 0px 8px 8px",
  },
});
const CurrentBar =()=> {
    const classes = useStyle();
  return (
    <Typography 
    className={classes.currentBar}/>
  )
}

export default CurrentBar