import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

// Pages
import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Profile from 'Pages/Profile';
import {useMemo} from 'react';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {themeSettings} from './theme';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
