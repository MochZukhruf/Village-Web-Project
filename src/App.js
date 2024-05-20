import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import { Media } from './components/Media';




function App() {
  return (
    <><Router>

    <div className="App">
      
      <Navbar/>
        <Hero/>
        <Body/>
        <Media/> 
      <Routes>
      </Routes>
      <Footer/>
    </div>

    </Router></>
  );
}

export default App;
