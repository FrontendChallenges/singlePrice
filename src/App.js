import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <Box sx={{ backgroundColor: 'red', height: '100vh' }}></Box>
        <Footer author='Jinok' challengeBy='Frontend Mentor' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
