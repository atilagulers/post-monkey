import {useState, useEffect} from 'react';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Header/Navbar';

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
    <div className="app bg-white dark:bg-black mx-auto mt-8">
      <Navbar />

      <Home />
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
