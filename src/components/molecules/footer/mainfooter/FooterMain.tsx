import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterNavListOne from "../footernavlists/FooterNavListOne";
import FooterNavListTwo from "../footernavlists/FooterNavListTwo";
import FooterNavListThree from "../footernavlists/FooterNavListThree";
import FooterCaptionGrid from "../footercaption/FooterCaptionGrid";
import Policies from "../../../atoms/footer/service-policies/Policies";


const useStyle = makeStyles({
    policygrid: {
        marginLeft: "100px",
        marginTop: "48px",
        marginBottom: "38px",
        fontSize: "14px",
        lineHeight: "22px",
    },
    captiongrid: {
        marginLeft: "102px",
    },
    maingridtwo: {
        marginTop: "38px",
        textAlign:"match-parent",
    },
    maingridone: {
        backgroundColor: "#F1F6F4",
        backgroundRepeat: "repeat",
        backgroundSize: "fill",
        marginTop : "111px",
        paddingLeft: "350px",
        justifyContent: "center", 
    },
    navs:{
        display: "flex",
        textAlign: "justify",
       
    }
})
const FooterMain = () => {
    const classes = useStyle();
  return (
    <Grid container direction="column" className={classes.maingridone}>
      <Grid item>
        <Grid container  className={classes.maingridtwo}>
          <Grid item className={classes.captiongrid}>
            <FooterCaptionGrid />
          </Grid>
          <Grid item className={classes.navs}>
            <FooterNavListOne />
          </Grid>
          <Grid item className={classes.navs}>
            <FooterNavListTwo />
          </Grid>
          <Grid item className={classes.navs}>
            <FooterNavListThree />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.policygrid}>
        <Policies/>
    </Grid>
    </Grid>
    

  );
};

export default FooterMain;
