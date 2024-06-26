import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../themes/Theme';


const MyLibraryHeading = () =>{
  
  const useStyle = makeStyles({
    myLibraryHeading: {
      marginTop: "59px",
      marginRight: "793px",
      fontSize: "36px",
      fontWeight: 700,
      color: "#03314B",
    },
  });
    const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
    <Typography variant='h1' className={classes.myLibraryHeading}>
        My Library
    </Typography>
    </ThemeProvider>
  )
}

export default MyLibraryHeading;