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
import TopLogo from 'components/TopLogo';

// Auth
import {useSelector} from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';

// Context
import {ThemeProvider} from 'contexts/themeContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <div
            className="app bg-white dark:bg-dark mx-auto flex"
            style={{backgroundColor: 'white'}}
          >
            <header className="border-r border-gray-300 dark:border-gray-700  bg-dark">
              <Navbar />
            </header>

            <main className="w-full bg-white dark:bg-dark overflow-auto flex">
              <div className="page w-full">
                <TopLogo />
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
              </div>
              <div className="side-content w-full p-5 border-l border-gray-300 dark:border-gray-700 shadow">
                {/*<div className="w-[250px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis perferendis animi illo deserunt incidunt blanditiis
                  excepturi vitae eius. Sed necessitatibus ipsa ex. Eaque quas
                  pariatur omnis nobis quo maiores magni.
                </div>*/}
              </div>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
