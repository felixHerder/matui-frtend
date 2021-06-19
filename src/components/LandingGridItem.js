import React from 'react';
import { Icon, Container, Typography, makeStyles } from '@material-ui/core';
import { } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  gridItem: {
    padding: "50px"
  },

}));

export default function LandingGridItem(props) {
  const classes = useStyles();
  return (
    <Container align="left" className={classes.gridItem}>
      <Icon>
        {props.icon}
      </Icon>
      <Typography variant="h5">
        {props.title}
      </Typography>
      <Typography>
        {props.description}
      </Typography>
    </Container>
  );
}