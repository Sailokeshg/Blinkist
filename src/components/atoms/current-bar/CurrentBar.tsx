import React from 'react'
import  useStyle  from '../../../themes/Theme'
import { Typography } from '@mui/material'

const CurrentBar =()=> {
    const classes = useStyle();
  return (
    <Typography 
    className={classes.currentBar}/>
  )
}

export default CurrentBar