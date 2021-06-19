import React, { useEffect, useState } from 'react';
import { MenuItem, Drawer, IconButton, AppBar, Link, Box, Container, Toolbar, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons';
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
      // alignItems: 'flex-end',
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
    },
    color: 'whitesmoke'
  },
  menuIcon: {
    color: "white"
  }
}));
export default function Navbar() {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false
  });
  const { toggleMenu, toggleMenuOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false }));
    }
    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, [])

  const classes = useStyles();

  const displayToggleMenu = () => {
    const handleToggleMenuOpen = () => setState(prevState => (
      { ...prevState, toggleMenuOpen: true }));

    const handleToggleMenuClose = () => setState(prevState => (
      { ...prevState, toggleMenuOpen: false }));
    return (
      <Toolbar>
        <IconButton
          onClick={handleToggleMenuOpen}
        >
          <Menu className={classes.menuIcon} />
        </IconButton>

        <Drawer anchor='left' open={toggleMenuOpen} onClose={handleToggleMenuClose}>

          <div>{getToggleMenuOptions()}</div>
        </Drawer>


      </Toolbar>
    )
  }
  const getToggleMenuOptions = () => {
    return (
      <Box>
        {['home', 'services', 'signup'].map(mopt => (
          <MenuItem key={mopt}>{mopt}</MenuItem>
        ))}
      </Box>
    )
  }
  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.toolbar}>

        <Typography component='h1'
          variant='h5'
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
    );
  }
  return (
    <Container>
      <AppBar>
        {toggleMenu ? displayToggleMenu() : displayLargeMenu()}
      </AppBar>
    </Container>
  )
}