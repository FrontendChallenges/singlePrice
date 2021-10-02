import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
