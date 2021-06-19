import React from 'react';
import LandingGridItem from './LandingGridItem'

import { Typography, Container, Grid, makeStyles } from '@material-ui/core';
import { ThumbUp, Build, VerifiedUser } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: '120px',
    paddingBottom: '120px',
  }

}));

export default function ProductInfo() {
  const { mainContainer } = useStyles();
  return (
    <Container className={mainContainer}>
      <Typography variant="h2" align="center">
        Services Offered
      </Typography>
      <Grid container >
        <Grid item lg={4} md={12}>
          <LandingGridItem title="200 markets"
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cumque eos?'
            icon={<ThumbUp />}
          />
        </Grid>
        <Grid item lg={4} md={12}>
          <LandingGridItem title="Structured Queries"
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cumque eos?'
            icon={<Build />}
          />
        </Grid>
        <Grid item lg={4} md={12}>
          <LandingGridItem title="Large Clientbase"
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cumque eos?'
            icon={<VerifiedUser />}
          />
        </Grid>
      </Grid>

    </Container>
  );
}