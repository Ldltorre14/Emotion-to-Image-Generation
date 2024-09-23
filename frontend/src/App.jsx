import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Playground from './pages/Playground';
import NavHeader from './components/NavHeader';

function App() {
  
  return (
    <Router>
      
      <NavHeader/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Playground" element={<Playground/>} />
      </Routes> 
    </Router>
  );
}

export default App
