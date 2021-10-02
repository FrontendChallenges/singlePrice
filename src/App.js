import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import Container from '@mui/material/Container';
import PriceCard from './components/PriceCard';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <Main>
          <PriceCard></PriceCard>
        </Main>
        <Footer author='Jinok' challengeBy='Frontend Mentor' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
