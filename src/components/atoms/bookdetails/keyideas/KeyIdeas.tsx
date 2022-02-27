import { Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../../themes/Theme';
import { ThemeProvider , makeStyles } from '@mui/styles';

const KeyIdeas =() => {
    const useStyle = makeStyles({
        keyideas: {
        color: "#03314B",
        marginTop: "60px",
        marginRight: "300px",
        },
    });
    const classes = useStyle();
  return (
      <ThemeProvider theme={theme}>
    <Typography variant='body2' className={classes.keyideas}>Get the key ideas from</Typography>
    </ThemeProvider>
  )
}

export default KeyIdeas;