import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Karla', sans-serif",
    body1: {
      fontSize: '1.6rem',
    },
  },
  palette: {
    primary: { main: 'hsl(179, 62%, 43%)' },
    secondary: { main: 'hsl(71, 73%, 54%)' },
    text: {
      primary: 'hsl(218, 22%, 67%)',
      secondary: 'hsl(204, 43%, 93%)',
    },
    background: {
      default: '#E6EFF6',
    },
  },
});

export default theme;
