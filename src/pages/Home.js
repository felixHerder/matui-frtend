import React from 'react';

import '@fontsource/roboto';
import { Container } from '@material-ui/core';
import Navbar from '../components/Navbar';
import GridLayout from '../components/GridLayout';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
