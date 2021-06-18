import React from 'react';
import { Link, Box, Container, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    fontWeight: 'bold',
    letterSpacing: 1.5
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3)
    }
  }
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <Container>
      <Toolbar className={classes.toolbar}>
        <Typography component='h1'
          variant='h4'
          className={classes.siteTitle}
        >
          Titan Corp</Typography>
        <Box className={classes.menuBox}>
          {['home', 'services', 'signup'].map(mopt => (
            <Link key={mopt} component='button' variant='body1'
              className={classes.menuOption}
            >{mopt.toUpperCase()}</Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  )
}