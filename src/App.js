import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import '@fontsource/roboto';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <CssBaseline />
        <Route path='/'>
          <Link to='/home'>Home</Link>
        </Route>
        <Route path='/home' exact component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
