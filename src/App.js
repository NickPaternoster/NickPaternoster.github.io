import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MenuBar from './components/MenuBar';
import Home from './views/Home';
import About from './views/About';
import Research from './views/Research';
import Cv from './views/Cv';
import Contact from './views/Contact';
import Education from './views/Education';
import Skills from './views/Skills';
import Pubs from './views/Pubs';
import Awards from './views/Awards';
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
        <div className="page-container">
          <MenuBar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomeRoute />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cv/education" element={<Education />} />
              <Route path="/cv/skills" element={<Skills />} />
              <Route path="/cv/pubs" element={<Pubs />} />
              <Route path="/cv/awards" element={<Awards />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
