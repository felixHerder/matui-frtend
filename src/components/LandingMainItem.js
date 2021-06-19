import React from 'react';
import { CardMedia, Button, Card, Container, Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    height: "300px"
  },
  mainItem: {
    padding: theme.spacing(8),
    textAlign: 'left',
  },
  mainContainer: {
    paddingTop: '120px',
    paddingBottom: '120px',
    backgroundColor: 'orange',
  },
  imageCard: {
    margin: '50px'
  }

}));

export default function LandingMainItem() {
  const { cardMedia, mainItem, imageCard, mainContainer } = useStyles();
  return (
    <Container className={mainContainer}>
      <Card>
        <Grid container >
          <Grid item md={6} className={mainItem} container direction="column" justify="space-between">
            <Typography variant="h2">
              Lifetime Risk Versity
            </Typography>
            <Typography>
              Venture Capital Assets
            </Typography>
            <Link to="/home">
              <Button color="primary" variant="contained">
                Go on Then
              </Button>
            </Link>
          </Grid>
          <Grid item md={6} >
            <Card className={imageCard}>
              <CardMedia className={cardMedia}
                image="https://cdn.pixabay.com/photo/2017/01/24/03/53/architecture-2004487_960_720.jpg"
              >
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container >

  );
}