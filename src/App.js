import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import About from './pages/About';

import Solutions from './pages/Solutions';



function App  ()  {
  return (
    <Router>
      <div className="App">
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
        
            <Route path="/about" element={<About />} />
            
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
