import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { History } from './components/pages/profile/History';
import { Aboutus } from './components/pages/profile/Aboutus';


function App() {
  return (
    <><Router>

    <div className="App">
      
      <Navbar/>
        
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        
      </Routes>
      <Footer/>
    </div>

    </Router></>
  );
}

export default App;
