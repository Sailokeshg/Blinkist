import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AuthorName from "../../atoms/author/AuthorName";
import BookTitle from "../../atoms/booktitle/BookTitle";
import ReadTime from "../read-time/ReadTime";

interface CardHeadProps {
  image: string;
  bookName: string;
  authorName: string;
  time: string;
}
const useStyle = makeStyles({
  cardGridOne: {
    margin: " 16px 4px 0px 16px",
  },
  cardGridTwo: {
    marginLeft: "17.67px",
    marginTop: "17.67px",
  },
 
}
  );
const CardHead = (props: CardHeadProps) => {
  const classes = useStyle();
  return (
    <>
      <Grid>
        <CardMedia
          alt="bookimage"
          component="img"
          height="292px"
          width="294.1px"
          image={props.image}
        />
      </Grid>
      <Grid item>
        <BookTitle bookName={props.bookName} />
      </Grid>
      <Grid item className={classes.cardGridOne}>
        <AuthorName authorName={props.authorName} />
      </Grid>
      <Grid item className={classes.cardGridTwo}>
        <ReadTime time={props.time} />
      </Grid>
    </>
  );
};

export default CardHead;
