import React from 'react';
import { Grid } from '@material-ui/core';
import MainGridItem from './MainGridItem';
import GridItem from './GridItem';

export default function HomeGridLayout() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem title="Dericatives Market"
          image="https://cdn.pixabay.com/photo/2015/11/25/01/31/abstract-background-1061121_960_720.jpg"
          description='OTC Markets are generally separated into two key segments: the customer market and the interdealer market. Customers almost exclusively trade through dealers because of the high search and transaction costs.' />
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12} >
        <GridItem title="Market SalesForce"
          image="https://cdn.pixabay.com/photo/2017/03/25/09/25/business-2173147_960_720.jpg"
          description='Futures exchanges trade in standardized derivative contracts. These are options contracts,swaps contracts and futures contracts on a whole range of underlying products. ' />
      </Grid>

      <Grid item lg={4} md={12} sm={12} xs={12} >
        <GridItem title="OTC Modeling"
          image='https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456_960_720.jpg'
          description='Tailor-made derivatives, not traded on a futures exchange are traded on over-the-counter markets, also known as the OTC market. ' />
      </Grid>

      <Grid item lg={4} md={12} sm={12} xs={12} >
        <GridItem title="Risk Analysis"
          image='https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_960_720.jpg'
          description=' Notional amounts outstanding provide useful information on the structure of the OTC derivatives market but should not be interpreted. The market can be divided.' />
      </Grid>

      <Grid item lg={4} md={12} sm={12} xs={12} >
        <GridItem title="Capital Restructuring"
          image="https://cdn.pixabay.com/photo/2018/10/15/22/11/blockchain-3750157_960_720.jpg"
          description='The market can be divided into two, that for exchange-traded derivatives and that for over-the-counter derivatives. Should not be interpreted.  ' />
      </Grid>
    </Grid >
  );
}