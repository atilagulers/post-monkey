import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

// Pages
import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Profile from 'Pages/Profile';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
