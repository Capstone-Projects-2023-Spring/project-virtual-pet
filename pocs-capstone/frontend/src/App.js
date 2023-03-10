

import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

import { useState, useEffect } from 'react'

import Register from './components/Register'
import Login from './components/Login'
import Layout from './components/Layout'

import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth.js';

import {Routes,Route} from 'react-router-dom';

import './App.css'

function App(){

  return (

    <Routes>
      <Route path="/" element = {<Layout/>}>
        
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        
        
        <Route element={<PersistLogin />}>
          <Route element = {<RequireAuth/>}>
            <Route path="/" element={<Main/>}/>
          </Route>
        </Route>
      
      
      </Route>
    </Routes>

  );
}
export default App
