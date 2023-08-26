// src/theme.js
import {createTheme} from '@mui/material/styles';

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export {lightTheme, darkTheme};
