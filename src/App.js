import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import Landing from './pages/Landing';
import { createMuiTheme, ThemeProvider, Switch, FormControlLabel, CssBaseline } from '@material-ui/core'
// import { lightBlue, red } from '@material-ui/core/colors'
import { Context } from './Context';
import '@fontsource/roboto';


function App() {
  const [theme, updateTheme] = useState(true);



  return (
    <BrowserRouter>
      <Context.Provider value={[theme, updateTheme]}>
        <ThemeProvider theme={createMuiTheme({
          palette: {
            type: theme ? 'light' : 'dark'
          },
        })}
        >
          <CssBaseline />
          <FormControlLabel
            control={<Switch color="primary" onChange={() => updateTheme(!theme)} />}
            label={theme ? 'Light' : 'Dark'}
          />
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/home' exact component={Home} />
        </ThemeProvider>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
