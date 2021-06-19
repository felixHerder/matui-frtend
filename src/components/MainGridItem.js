import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '400px',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg)',
    backgroundSize: 'cover',
    color: theme.palette.common.white
  },
  mainItem: {
    padding: theme.spacing(3),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

}));

export default function MainGridItem() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem} md={6}>
        <Typography component='h2' variant='h5'>
          Venture Capital Integration
        </Typography>
        <Typography variant='body2' paragraph>
          Tailor-made derivatives, not traded on a futures exchange are traded on over-the-counter markets, also known as the OTC market.
        </Typography>
      </Grid>
    </Grid>
  );
}