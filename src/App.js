import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MenuBar from './components/MenuBar';
import Home from './views/Home';
import About from './views/About';
import Research from './views/Research';
import Cv from './views/Cv';
import Contact from './views/Contact';
import './styles/GeneralStyle.css'; // Import the CSS file

function HomeRoute() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`home-container ${isHome ? 'home-background' : ''}`}>
      <Home />
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
