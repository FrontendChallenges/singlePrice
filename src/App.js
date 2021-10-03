import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './assets/style/theme';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PriceCard from './components/PriceCard';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <Box component='main'>
          <PriceCard
            joinTitle='Join our community'
            joinSummary='30-day, hassle-free money back guarantee'
            joinDesc='Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.'
            subScripTitle='Monthly Subscription'
            subScripPrice='$29'
            subScripDesc='Full access for less than $1 a day'
            whyUsTitle='Why Us'
            whyUsDesc='Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week'
          />
        </Box>
        <Footer author='Jinok' challengeBy='Frontend Mentor' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
