import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import Auth from 'pages/Auth/Auth';

// Components
import Navbar from 'components/Header/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="app bg-white dark:bg-darkmx-auto flex">
      {false && (
        <header className="border-r border-gray-300 dark:border-gray-700  bg-dark">
          <Navbar />
        </header>
      )}

      <main className="w-[100%] bg-white dark:bg-dark overflow-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />}></Route>
            <Route
              path="/home/*"
              element={
                <div className="w-[50vw]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>

      <button
        className="bg-black text-white dark:bg-white dark:text-black"
        onClick={handleThemeSwitch}
      >
        SWITCH
      </button>
    </div>
  );
}

export default App;
