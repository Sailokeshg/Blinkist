import { Typography } from "@material-ui/core";
import React from "react";
import useStyle from "../../../themes/Theme";

interface AuthorDetails {
  authorName: string;
}
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
