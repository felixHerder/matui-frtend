import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import '@fontsource/roboto';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/home' exact component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
