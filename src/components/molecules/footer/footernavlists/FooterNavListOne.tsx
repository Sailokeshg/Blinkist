import React from "react";
import NavHead from "../../../atoms/footer/navlist/navhead/NavHead";
import NavItem from "../../../atoms/footer/navlist/navitem/NavItem";
import { Grid } from "@material-ui/core";

const list = [
  "Book lists",
  "What is Nonfiction?",
  "What to read next?",
  "Benefits of reading",
];
const FooterNavListOne = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <NavHead headname="Editorial" />
      </Grid>
      {list.map((e) => (
        <Grid item>
          <NavItem itemname={e} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterNavListOne;