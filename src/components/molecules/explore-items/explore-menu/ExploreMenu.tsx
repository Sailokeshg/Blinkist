import React from "react";
import Buttons from "../../../atoms/explore-item/Buttons";
import Box from "@material-ui/core/Box";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {Grid, Typography} from "@mui/material"
import { makeStyles, ThemeProvider } from "@mui/styles";
import ExploreMenuHead from "../explore-header/ExploreMenuHead";
import { Divider } from "@mui/material";
import { theme } from "../../../../themes/Theme";

const exploreMenuList = [
  { name: "Entrepreneurship", comp: <RocketLaunchOutlinedIcon /> },
  { name: "Science", comp: <ScienceOutlinedIcon /> },
  { name: "Economics", comp: <FiberSmartRecordOutlinedIcon /> },
  { name: "Corporate Culture", comp: <BusinessCenterOutlinedIcon /> },
  { name: "Psychology", comp: <PsychologyOutlinedIcon /> },
  { name: "Nature & Environment", comp: <YardOutlinedIcon /> },
  { name: "Politics", comp: <AccountBalanceOutlinedIcon /> },
  { name: "Health & Nutrition", comp: <LocalHospitalOutlinedIcon /> },
  { name: "History", comp: <PublicOutlinedIcon /> },
  { name: "Motivation & Inspiration", comp: <TipsAndUpdatesOutlinedIcon /> },
  { name: "Productivity", comp: <HourglassBottomOutlinedIcon /> },
  { name: "Career & Success", comp: <ModeStandbyOutlinedIcon /> },
  { name: "Marketing & Sales", comp: <AutoGraphOutlinedIcon /> },
  { name: "Personal Development", comp: <SignalCellularAltOutlinedIcon /> },
  { name: "Communication Skills", comp: <CommentOutlinedIcon /> },
  { name: "Money & Investments", comp: <AccountBalanceWalletOutlinedIcon /> },
  { name: "Sex & Relationship", comp: <FavoriteBorderOutlinedIcon /> },
  { name: "Education", comp: <SchoolOutlinedIcon /> },
];

interface Handler {
  handleChange: () => void;
}


const ExploreMenu = (props: Handler) => {

  const useStyle = makeStyles({
    exploreBox: {
      position: "absolute",
      width: "100%",
      height: "100%",
      paddingTop: "20px",
    },
    exploreBoxOne: {
      paddingLeft: "335px",
      backgroundColor: "#F1F6F4",
      paddingBottom: "15px",
      justifyContent: "center",
    },
    exploreBoxTwo: {
      backgroundColor: "#111",
      height: "100%",
      width: "100%",
      opacity: "0.2",
    },
    exploreDivider: {
      marginRight: "10px",
      marginLeft: "106px",
    },
    exploreGrid: {
      paddingTop: "10px",
      marginLeft: "100px",
      textAlign: "left",
      justifyContent:"space-evenly",
    },
  });

  let count = 1;
  const classes = useStyle();
  const components = exploreMenuList.map((e) => ({
    id: count++,
    comp: (
      <Buttons
        handleChange={props.handleChange}
        itemname={e.name}
        itemicon={e.comp}
      />
    ),
  }));
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box zIndex="1" className={classes.exploreBox}>
        <Box className={classes.exploreBoxOne}>
          <Box width="1100px">
            <ExploreMenuHead />
            <Divider 
              className={classes.exploreDivider}
              style={{ border: "1px solid #042330" }}
            />
            <Grid container rowSpacing="16px" className={classes.exploreGrid}>
              {components.map((e) => (
                <Grid item xs={4} key={e.id}>
                  {e.comp}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box className={classes.exploreBoxTwo}></Box>
      </Box>
    </ThemeProvider>
    </>
  );
};

export default ExploreMenu;
