import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  myLibraryHeading: {
    marginTop: "59px",
    marginLeft: "240px",
    fontSize: "36px",
    fontWeight: 700,
    color: "#03314B",
  },
});
const MyLibraryHeading = () =>{
    const classes = useStyle();
  return (
    <Typography variant='h1' className={classes.myLibraryHeading}>
        My Library
    </Typography>
  )
}

export default MyLibraryHeading;