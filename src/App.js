import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Home from './views/Home';
import About from './views/About';
import ResearchInterest from './views/ResearchInterest';
import Projects from './views/Projects';
import Cv from './views/Cv';
import Contact from './views/Contact';
import Education from './views/Education';
import Skills from './views/Skills';
import Pubs from './views/Pubs';
import Awards from './views/Awards';
import Loading from './components/Loading'; // Import the Loading component
import './styles/GeneralStyle.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Here you might want to fetch data or wait for some async processes to complete
    setTimeout(() => { // Simulate an async operation like data fetching
      setIsLoading(false); // Set loading to false when data is fetched or after a timeout
    }, 3000); // Adjust time as necessary for your app
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <MenuBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research/researchinterest" element={<ResearchInterest />} />
            <Route path="/research/projects" element={<Projects />} />
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
  );
}

export default App;
