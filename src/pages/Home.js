import React from 'react';

import '@fontsource/roboto';
import { Container } from '@material-ui/core';
import Navbar from '../components/Navbar';
import HomeGridLayout from '../components/HomeGridLayout';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <main>
          <HomeGridLayout />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
