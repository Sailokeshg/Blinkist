import { Grid, Toolbar } from "@mui/material";
import React from "react";
import AvatarDropDown from "../../../molecules/avatar/AvatarDropDown";
import HeaderLeft from "../header-left/HeaderLeft";
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../../themes/Theme';

interface Props {
  icon: boolean;
  handleChange: () => void;
}

const ToolBarHeader = (props: Props) => {
  return (
 
    <Toolbar>
      <Grid container columnGap="160px" justifyContent="center">
        <Grid item>
          <HeaderLeft icon={props.icon} handleChange={props.handleChange} />
        </Grid>
        <Grid item>
          <AvatarDropDown />
        </Grid>
      </Grid>
    </Toolbar>
    
  );
};

export default ToolBarHeader;
