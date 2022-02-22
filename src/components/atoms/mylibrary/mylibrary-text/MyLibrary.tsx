import { Typography } from '@material-ui/core';
import React from 'react'
import useStyle from '../../../../themes/Theme'



const MyLibrary =()=> {
    const classes = useStyle();
  return (
    <Typography variant='body1' className={classes.myLibrary}>
        My Library
    </Typography>
  )
}

export default MyLibrary