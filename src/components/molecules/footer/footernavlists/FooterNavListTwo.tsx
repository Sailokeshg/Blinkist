import React from "react";

import NavHead from "../../../atoms/footer/navlist/navhead/NavHead";
import NavItem from "../../../atoms/footer/navlist/navitem/NavItem";
import { Grid } from "@material-ui/core";

const list = [
  "Pricing",
  "Blinkist business",
  "Gift cards",
  "Blinkist magaine",
  "Contact & help",
];
const FooterNavListTwo = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <NavHead headname="Useful links" />
      </Grid>
      {list.map((e) => (
        <Grid item>
          <NavItem itemname={e} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterNavListTwo;
