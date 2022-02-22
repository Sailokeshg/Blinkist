import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  buttons: {
    textTransform: "none",
    color: "#6D787E",
    fontWeight: "400",
    fontStyle: "Normal",
    fontSize: "16px",
    "&:hover": {
      color: "#0365F2",
    },
  },
  exploreButton: {
    marginTop: "-8px",
    fontSize: "16px",
    padding: "none",
    textTransform: "none",
    fontWeight: 500,
    color: "#03314B",
    "&:hover": {
      borderBottom: "3px solid #2CE080",
      borderRadius: "0px",
      background: "none",
    },
  },
  authorNameTypography: {
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 500,
    color: "#6D787E",
  },
  addToLibBtn: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "20px",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  avatarDrop: {
    marginBottom: "23px",
    marginTop: "29px",
    marginLeft: "292px",
  },
  avatarNavDown: {
    marginTop: "6.85px",
  },

  myLibraryHeading: {
    marginTop: "59px",
    marginLeft: "240px",
    fontSize: "36px",
    fontWeight: 700,
    color: "#03314B",
  },
  myLibrary: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#03314B",
    
  },
  headerLeftGridMain: {
    columnGap: "42px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  headerLeftGrid: {
    marginTop: "6px",
  },
  exploreHeadItemOne: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#116BE9",
  },
  exploreHeadItemTwo: {
    fontWeight: "500",
    fontSize: "16px",
    color: " #6D787E",
  },
  exploreBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  exploreBoxOne: {
    paddingLeft: "285px",
    backgroundColor: "#F1F6F4",
    paddingBottom: "15px",
  },
  exploreBoxTwo: {
    backgroundColor: "#111",
    height: "100%",
    width: "100%",
    opacity: "0.4",
  },
  exploreDivider: {
    marginRight: "170px",
  },
  exploreGrid: {
    paddingTop: "10px",
  },
  bookTitleOne: {
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 700,
    marginLeft: "16px",
    marginTop: "23px",
  },
  readTimeGrid: {
    allignItems: "center",
    fontSize: "normal",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#6D787E",
  },
  cardGridOne: {
    margin: " 16px 0px 0px 16px",
  },
  cardGridTwo: {
    marginLeft: "17.67px",
    marginTop: "17.67px",
  },
  currentBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    borderRadius: "0px 0px 8px 8px",
  },
  finishedBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#DFE8F6",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
  typography: {
    fontFamily: "CeraProMedium",
  }
});

export default useStyle;
