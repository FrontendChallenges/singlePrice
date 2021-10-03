import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Karla', sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    subtitle1: {
      fontWeight: 700,
    },
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
  },
});

export default theme;
