import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { theme } from "../../../themes/Theme";
import { makeStyles } from "@mui/styles";



const BookDetailsTabs = () => {

  const useStyle = makeStyles({
    activeTab: {
      textTransform: "none",
      fontSize: 16,
      fontWeight: 400,
      textAlign: "left",
      paddingRight: "150px",
    },
    tabStyle: {
      textTransform: "none",
      fontSize: 16,
      fontWeight: 400,
      textAlign: "left",
      paddingRight: "150px",
      position: "relative",
    },
    bookDetailsTabsTwo:{
        padding: "0px",
        marginTop: "20px",
        marginLeft: "469px",
        textAlign: "left",
    },
    bookDetalisTabsTypo: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#03314B",
        width: "600px",
        
      },
      bookDetailsTabsOne:{
        fontSize: "16px",
        fontWeight: "400",
        marginLeft: "463px",
        color: "#03314B",
        width: "600px",
      },

  });
  const classes = useStyle();
  const [value, setValue] = useState("0");
  const [bool, setBool] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setBool(!bool);
  };

  return (
      <ThemeProvider theme={theme}>
    <TabContext value={value}>
      <Tabs
       value={value}
       onChange={handleChange}
       className={classes.bookDetailsTabsOne}
       TabIndicatorProps={{style:{backgroundColor:"#22C870"}}}>
        <Tab
        
          label="Synopsis"
          value="0"
          className={value === "0" ? classes.activeTab : classes.tabStyle}
        />
        <Tab
          label="Who is it for?"
          value="1"
          className={value === "1" ? classes.activeTab : classes.tabStyle}
        />
        <Tab
          label="About the author"
          value="2"
          className={value === "2" ? classes.activeTab : classes.tabStyle}
        />
      </Tabs>
      <TabPanel value="0" className={classes.bookDetailsTabsTwo}>
        <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
          </Typography>
        </TabPanel>
        <TabPanel value="1" className={classes.bookDetailsTabsTwo}>
        <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            It is for the people who are determined as an entrepreneur. It shows a way how we can put a startup and develop it
          </Typography>
        </TabPanel>
        <TabPanel value="2" className={classes.bookDetailsTabsTwo}>
        <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            By Jim Collins and Bill Lazier
          </Typography>
        </TabPanel>
    </TabContext>
    </ThemeProvider>
  );
};
export default BookDetailsTabs;