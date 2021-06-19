import React from 'react';
import { Link, Container, Typography, makeStyles } from '@material-ui/core';

function Copyright() {
  return (
    <Typography>
      <Link href="https://felixherder.space">
        felixherder.space
      </Link>
      {" " + new Date().getFullYear()}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(6)
  }
}))
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="h6">
          Titan Corp
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Safeguarding Capital Investments
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );

}