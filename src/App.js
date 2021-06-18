import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import './App.css';
import '@fontsource/roboto';

import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />

      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
