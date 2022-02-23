import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface AuthorDetails {
  authorName: string;
}

const useStyle = makeStyles({
  authorNameTypography: {
    fontStyle: "normal",
    color: "#6D787E",
    textAlign: "left",
  },
  
});
const AuthorName = (props: AuthorDetails) => {
  const classes = useStyle();
  return (
    <>
      <Typography variant="body1" className={classes.authorNameTypography}>
        {props.authorName}
      </Typography>
    </>
  );
};

export default AuthorName;
