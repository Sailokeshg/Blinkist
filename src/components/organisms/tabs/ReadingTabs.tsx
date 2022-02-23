import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../themes/Theme";
import { makeStyles } from "@mui/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import MainPageReading from "../../Templates/reading/MainPageReading";
import MainPageFinished from "../../Templates/finished/MainPageFinished";

interface Books {
  currentReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
  }[];
  finishedReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
  }[];
  handleReadAgain: (item: string) => void;
  handleFinish: (item: string) => void;
}

const useStyle = makeStyles({
  activeTab: {
    textTransform: "none",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "left",
    paddingRight: "150px",
  },
  tabStyle: {
    textTransform: "none",
    textAlign: "left",
    paddingRight: "100px",
    position: "relative",
  },
  tabs: {
    marginLeft: "460px",
    marginTop: "60px",
    position: "inherit",
  },
});

const ReadingTabs = (props: Books) => {
  const classes = useStyle();
  const [value, setValue] = useState("0");
  const [bool, setBool] = useState(false);

  const handleTabs = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setBool(!bool);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs
          className={classes.tabs}
          value={value}
          TabIndicatorProps={{ style: { backgroundColor: "#22C870" } }}
          onChange={handleTabs}
        >
          <Tab
            label={
              <Typography variant="subtitle2">Currently reading</Typography>
            }
            value="0"
            className={bool === false ? classes.activeTab : classes.tabStyle}
          />

          <Tab
            label={<Typography variant="subtitle2">Finished</Typography>}
            value="1"
            className={bool === false ? classes.activeTab : classes.tabStyle}
          />
        </Tabs>
        <TabPanel value="0">
          <MainPageReading handleReadAgain={props.handleReadAgain}
          handleFinish={props.handleFinish}
          currentReading={props.currentReading}/>
          </TabPanel>
        <TabPanel value="1">
          <MainPageFinished
          handleReadAgain={props.handleReadAgain}
          handleFinish={props.handleFinish}
          finishedReading={props.finishedReading}/>
          </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};
export default ReadingTabs;
