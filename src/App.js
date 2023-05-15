import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar';
import Home from './views/Home';
import About from './views/About';
import Research from './views/Research';
import Cv from './views/Cv';
import Contact from './views/Contact';

function App() {
 return (
  <Router>
    <MenuBar />
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/research" component={Research} />
      <Route path="/cv" component={Cv} />
      <Route path="/contact" component={Contact} />
    </Routes>
  </Router>
 )
}

export default App;
