import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Structurehome } from './Structurehome'
import { Kepaladesa } from './content/Kepaladesa'
import { BMD } from './content/BMD'
import { Kaurkeuang } from './content/Kaurkeuang'
import { Kaurkr } from './content/Kaurkr'
import { Kaurpemb } from './content/Kaurpemb'
import { Kaurpemer } from './content/Kaurpemer'
import { Kaurumum } from './content/Kaurumum'
import { KKT } from './content/KKT'
import { Pranata } from './content/Pranata'
import { Sekretaris } from './content/Sekretaris'
import { Kaurpemberdaya } from './content/Kaurpemberdaya'

const Structureroute = () => {
  return (
    <Routes>
        <Route path='/structure' element={<Structurehome/>}/>
        <Route path='kepaladesa' element={<Kepaladesa/>}/>  
        <Route path='bmd' element={<BMD/>}/>
        <Route path='kaurkeuang' element={<Kaurkeuang/>}/>
        <Route path='kaurkr' element={<Kaurkr/>}/>
        <Route path='kaurpemb' element={<Kaurpemb/>}/>
        <Route path='kaurpemer' element={<Kaurpemer/>}/>
        <Route path='kaurumum' element={<Kaurumum/>}/>
        <Route path='kkt' element={<KKT/>}/>
        <Route path='pranata' element={<Pranata/>}/>
        <Route path='sekretaris' element={<Sekretaris/>}/>
        <Route path='kaurpm' element={<Kaurpemberdaya/>}/>
    </Routes>
  )
}

export default Structureroute