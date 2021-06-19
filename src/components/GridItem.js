import React from 'react';
import { IconButton, Typography, makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  cardImage: {
    height: '300px'
  },
  description: {
    textAlign: 'left'
  }
}));

export default function GridItem(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={props.title}
        subheader='Titan Services'
      />
      <CardMedia
        className={classes.cardImage}
        title={props.title}
        image={props.image}
      />
      <CardContent>
        <Typography className={classes.description}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Visit page">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
}