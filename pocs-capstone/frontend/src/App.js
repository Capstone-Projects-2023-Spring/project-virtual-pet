

import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

import { useState, useEffect } from 'react'

import Register from './components/Register'
import Login from './components/Login'
import Layout from './components/Layout'

import Loader from './components/Loader'

import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth.js';

import AnimateChoice from './components/AnimateChoice.js'
import {Routes,Route} from 'react-router-dom';

import './App.css'
import CanvasIntegrationPage from './components/CanvasIntegrationPage.js'

function App(){

  return (

    <Routes>
      <Route path="/" element = {<Layout/>}>
        
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        
        
        <Route element={<PersistLogin />}>
          <Route element = {<RequireAuth/>}>
            <Route path="/" element={<Main/>}/>
            <Route path = "/loader" element={<Loader/>}/>
            <Route path = "/pet_selection" element ={<AnimateChoice/>}/>
            <Route path = "/canvas_integration" element = {<CanvasIntegrationPage/>}/>
          </Route>
        </Route>
      
      
      </Route>
    </Routes>

  );
}
export default App
