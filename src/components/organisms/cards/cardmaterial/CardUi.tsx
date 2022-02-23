import React from "react";
import { Card, Grid } from "@mui/material";
import CurrentBar from "../../../atoms/current-bar/CurrentBar";
import FinishedBar from "../../../atoms/finished-bar/FinishedBar";
import ReadAgainButton from "../../../atoms/readagainbutton/ReadAgainButton";
import CardHead from "../../../molecules/card/CardHead";
import FinishedButton from "../../../atoms/finishedbutton/FinishedButton";
import { makeStyles } from "@mui/styles";
interface CardProps {
  bookdetails: {
    image: string;
    name: string;
    author: string;
    time: string;
    readcount: string;
    finished: boolean;
  }[];
  handleReadAgain: (item: string) => void;
  handleFinish: (item: string) => void;
}

// const useStyle = makeStyles({
//   cardborder: {
//     borderRadius: "8px",
//   },
// });

const cardUi = (props: CardProps) => {

//   const classes = useStyle();

  const bookCards = props.bookdetails.map((e) => (
    <Grid item key={e.name}>
      <Card >
        <Grid container direction="column">
          <Grid item>
            <CardHead
              image={e.image}
              bookName={e.name}
              authorName={e.author}
              time={e.time}
              readcount={e.readcount}
            />
          </Grid>
          <Grid item>
            {!e.finished ? (
              <>
                <FinishedButton
                  name={e.name}
                  handleFinish={props.handleFinish}
                />
                <CurrentBar />
              </>
            ) : (
              <>
                {" "}
                <ReadAgainButton
                  name={e.name}
                  handleReadAgain={props.handleReadAgain}
                />
                <FinishedBar />
              </>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));

  return (
    <Grid
      container
      key="name"
      rowSpacing="32px"
      columnSpacing="32px"
     
    >
      {bookCards}
    </Grid>
  );
};

export default cardUi;
