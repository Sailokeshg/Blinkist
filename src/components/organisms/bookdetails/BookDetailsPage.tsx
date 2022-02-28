import React from "react";
import bookimage from "../../atoms/assets/bookimage.png";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ThemeProvider from "@mui/styles/ThemeProvider";
import {theme} from "../../../themes/Theme";
import ReadTime from "../../molecules/read-time/ReadTime";
import AuthorName from "../../atoms/author/AuthorName";
import BookNote from "../../atoms/bookdetails/note/BookNote";
import BookDetailsTitle from "../../atoms/bookdetails/title/BookDetailsTitle";
import KeyIdeas from "../../atoms/bookdetails/keyideas/KeyIdeas";
import SendToKindle from "../../atoms/bookdetails/bookmenu/kindle/SendToKindle";
import ReadNow from "../../atoms/bookdetails/bookmenu/readnow/ReadNow";
import FinishReading from "../../atoms/bookdetails/bookmenu/finish/FinishReading";

interface Props {
    handleFinish: (item:string) => void;
    button:boolean;
}
const BookDetailsPage = (props:Props) => {
  const useStyles = makeStyles({
    bookDetailsBox: {
      marginTop: "40px",
      marginLeft: "90px",
      textAlign: "left",
    },
    bookDetailsGrid: {
      marginTop: "83px",
    },
    bookimage: {
        marginTop: "100px",
        
        
    }
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Box className={classes.bookDetailsBox}>
      <Grid container columnSpacing="125px" justifyContent="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <Grid container direction="column" rowSpacing="24px">
                  <Grid item>
                      <KeyIdeas />
                  </Grid>
                <Grid item>
                  <BookDetailsTitle />
                </Grid>
                <Grid item>
                  <BookNote />
                </Grid>
                <Grid item>
                  <AuthorName authorName="By Jim Collins and Bill Lazier" />
                </Grid>
                <Grid item>
                  <ReadTime time="15-minute read" />
                </Grid>
                <Grid item className={classes.bookDetailsGrid}>
                  <Grid container columnSpacing="32px">
                    <Grid item>
                      <ReadNow />
                    </Grid>
                    <Grid item>
                      <FinishReading
                        button={props.button}
                        bookname="Beyond Entrepreneurship 2.0"
                        handleFinish={props.handleFinish}
                      />
                    </Grid>
                    <Grid item>
                      <SendToKindle />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card className={classes.bookimage}>
            <CardMedia
              component="img"
              height="292px"
              width="294.1px"
              image={bookimage}
              alt="Book"
              
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
};

export default BookDetailsPage;
