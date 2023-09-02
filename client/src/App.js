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
import SideContent from 'components/Common/SideContent';

// Auth
import PrivateRoute from 'components/PrivateRoute';

// Context
import {useTheme} from 'contexts/themeContext';

import {ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {isDark} = useTheme();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app bg-white dark:bg-dark mx-auto flex h-full">
          <Navbar />

          <main className="w-full bg-white dark:bg-dark flex">
            <div id={'post-scroll'} className="page w-full overflow-auto">
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

            <SideContent />
          </main>
        </div>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme={isDark ? 'light' : 'dark'}
        autoClose={1500}
        transition={Slide}
      />
    </Provider>
  );
}

export default App;
