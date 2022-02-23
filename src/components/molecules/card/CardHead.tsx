import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AuthorName from "../../atoms/author/AuthorName";
import BookTitle from "../../atoms/booktitle/BookTitle";
import ReadTime from "../read-time/ReadTime";
import ReadCount from "../readcount/ReadCount";

interface CardHeadProps {
  image: string;
  bookName: string;
  authorName: string;
  time: string;
  readcount: string;
}
const useStyle = makeStyles({
  cardGridOne: {
    margin: " 16px 4px 0px 16px",
  },
  cardGridTwo: {
    marginTop: "17.67px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
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
      <Grid container direction="row" className={classes.cardGridTwo}>
      <Grid item >
        <ReadTime time={props.time} />
      </Grid>
      <Grid item >
        <ReadCount readcount={props.readcount} />
      </Grid>
      </Grid>
    </>
  );
};

export default CardHead;
