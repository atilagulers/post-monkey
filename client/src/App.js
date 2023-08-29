import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Redux
import {store} from 'store';
import {Provider} from 'react-redux';

// Pages
import Home from 'pages/Home';
import Profile from 'pages/Profile/Profile';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';

// Components
import Navbar from 'components/Navbar/Navbar';

// Auth
import PrivateRoute from 'components/PrivateRoute';

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
    <Provider store={store}>
      <div className="app bg-white dark:bg-darkmx-auto flex">
        <header className="border-r border-gray-300 dark:border-gray-700  bg-dark">
          <Navbar />
        </header>

        <main className="w-[100%] bg-white dark:bg-dark overflow-auto flex">
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SignIn />}></Route>

                <Route path="/sign-up" element={<SignUp />}></Route>

                <Route
                  path="/home"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </div>
          <div className="side-content w-full p-5">
            <div className="w-[250px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              perferendis animi illo deserunt incidunt blanditiis excepturi
              vitae eius. Sed necessitatibus ipsa ex. Eaque quas pariatur omnis
              nobis quo maiores magni.
            </div>
          </div>
        </main>

        {/*<button
        className="bg-black text-white dark:bg-white dark:text-black"
        onClick={handleThemeSwitch}
      >
        SWITCH
      </button>*/}
      </div>
    </Provider>
  );
}

export default App;
