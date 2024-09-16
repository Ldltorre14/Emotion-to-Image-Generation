import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NavHeader from './components/NavHeader';

function App() {
  
  return (
    <Router>
      
      <NavHeader/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Routes> 
    </Router>
  );
}

export default App
