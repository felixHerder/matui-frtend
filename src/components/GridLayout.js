import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainGridItem: {
    backgroundColor: 'blue'
  },
  secondRowFirtsItem: {
    backgroundColor: 'green'
  },
  secondRowSecondItem: {
    backgroundColor: 'orange'
  },
  thirdRow: {
    backgroundColor: 'pink'
  }
}));
export default function GridLayout() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <Typography className={classes.mainGridItem}>
          Main Grid Item
          Main Grid Item
          Main Grid Item
          Main Grid Item
          Main Grid Item

        </Typography>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowFirtsItem}>
          Second Row first Item
        </Typography>
      </Grid>

      <Grid item sm={6} xs={12} >
        <Typography className={classes.secondRowSecondItem}>
          Second Row first Item
        </Typography>
      </Grid>

      <Grid item sm={4} xs={12} >
        <Typography className={classes.thirdRow}>
          Third Row
        </Typography>
      </Grid>

      <Grid item sm={4} xs={12} >
        <Typography className={classes.thirdRow}>
          Third Row
        </Typography>
      </Grid>

      <Grid item sm={4} xs={12} >
        <Typography className={classes.thirdRow}>
          Third Row
        </Typography>
      </Grid>
    </Grid >
  );
}