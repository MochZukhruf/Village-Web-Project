import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';



function App() {
  return (
    <><Router>

    <div className="App">
      <Header/>
      <Navbar/>
        <Hero/>
      <Routes>
      </Routes>
    </div>

    </Router></>
  );
}

export default App;
