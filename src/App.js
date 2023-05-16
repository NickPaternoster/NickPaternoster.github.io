import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar';
import Home from './views/Home';
import About from './views/About';
import Research from './views/Research';
import Cv from './views/Cv';
import Contact from './views/Contact';
import './styles/GeneralStyle.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container"> {/* Add the CSS class to the top-level div */}
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
