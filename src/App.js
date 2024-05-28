import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { History } from './components/pages/profile/History';
import { Aboutus } from './components/pages/profile/Aboutus';
import { Vision } from './components/pages/profile/Vision';
import { Geography } from './components/pages/profile/Geography';
import { Demography } from './components/pages/profile/Demography';
import Structureroute from './components/pages/goverment/Structureroute';


function App() {
  return (
    <><Router>

    <div className="App">
      
      <Navbar/>
      <Structureroute/>
        
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/vision' element={<Vision/>}/>
        <Route path='/geography' element={<Geography/>}/>
        <Route path='/demography' element={<Demography/>}/>
        
        
        
      </Routes>
      <Footer/>
    </div>

    </Router></>
  );
}

export default App;
