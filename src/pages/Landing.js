import React from 'react';

import { Container, } from '@material-ui/core'
import LandingGrid from '../components/LandingGrid';

export default function Landing() {
  return (
    <Container>
      <main>
        <LandingGrid />
      </main>
    </Container>
  )
}