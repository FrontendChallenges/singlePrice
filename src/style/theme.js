import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Karla', sans-serif",
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
