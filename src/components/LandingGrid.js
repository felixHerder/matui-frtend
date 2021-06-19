import React from 'react';
import { Grid } from '@material-ui/core';
import LandingMainItem from './LandingMainItem';
import ProductInfo from './ProductInfo';
export default function LandingGrid() {
  return (
    <Grid container direction="column">
      <Grid item>
        <LandingMainItem />
      </Grid>

      <Grid item>
        <ProductInfo />
      </Grid>

    </Grid>
  );
}
