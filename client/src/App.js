import {useState} from 'react';

// Pages
import Home from './pages/Home';

// Components
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />

      <Home />
    </div>
  );
}

export default App;
