import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    subtitle3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h1: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    subtitle3: true;
    caption1: true;
    caption2: true;
    caption3: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      light: "#E2F2E9",
      main: "#22C870",
      dark: "#20BA68",
      contrastText: "#22C870",
    },
    secondary: {
      light: "#C6DAF6",
      main: "#0365F2",
    },
    grey: {
      50: "#BAC9CF",
      300: "#6C787F",
      600: "#042330",
      900: "#3A4649",
    },
    text: {
      primary: "#03314B",
      secondary: "#6D787E",
      disabled: "#7475775",
    },
    background: {
      paper: "#F7F7F7",
      default: "#F1F6F4",
    },
  },
  typography: {
    fontFamily: "CeraProMedium",

    h1: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "bold",
    },
    h2:{
        fontSize: "18px",
        lineHeight: "22.63px",
        fontWeight: 700,
    },
    subtitle1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "23px",
      fontWeight: 400,
    },

    subtitle3: {
      fontSize: "16px",
      lineHeight: "20.11px",
      fontWeight: 700,
    },

    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      fontStyle: "normal",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    caption1: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "bold",
    },
    caption3: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17.6px",
    },
  },
});
