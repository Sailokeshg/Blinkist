import { Typography } from '@material-ui/core'
import React from 'react'
import useStyle from '../../../../themes/Theme'

const MyLibraryHeading = () =>{
    const classes = useStyle();
  return (
    <Typography variant='h1' className={classes.myLibraryHeading}>
        My Library
    </Typography>
  )
}

export default MyLibraryHeading;