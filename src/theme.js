import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0288d1',
    },
    secondary: {
      main: '#fdce3b',
    },
    text: {
      primary: '#1e2027',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial',
    h1: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;