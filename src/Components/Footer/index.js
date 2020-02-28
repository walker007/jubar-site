import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Link, Typography } from "@material-ui/core";

import { Facebook, Instagram } from "@material-ui/icons";

const footers = [
  {
    title: "Redes Sociais",
    description: [
      { label: <Facebook />, route: "https://www.facebook.com/jubarabcng/" },
      { label: <Instagram />, route: "https://www.instagram.com/jubarabcng/" }
    ]
  },
  {
    title: "Atalhos",
    description: [
      { label: "Agenda", route: "/agenda" },
      { label: "Eventos", route: "/eventos" }
    ]
  }
];

function Copyright() {
  return (
    <Typography color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Jubar
      </Link>
      {" 2020 - "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  socialIcon: {
    width: "1rem",
    marginRight: "5px",
    padding: "auto"
  },
  footer: {
    backgroundColor: "#e8e8e8",
    marginTop: 5,
    padding: theme.spacing(6, 0, 1)
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={1} justify="space-between">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={index}>
                    <Link
                      target="_blank"
                      href={item.route}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};
