

import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

import { useState, useEffect } from 'react'

import Register from './components/LoginLogout/Register.js'
import Login from './components/LoginLogout/Login.js'
import Logout from './components/LoginLogout/Logout.js'
import Layout from './components/Layout.js'
import LandingPage from './components/LandingPage.js'
import Loader from './components/Loader'

import PersistLogin from './components/LoginLogout/PersistLogin.js'
import RequireAuth from './components/LoginLogout/RequireAuth.js'

import AnimateChoice from './components/AnimateChoice.js'
import {Routes,Route} from 'react-router-dom';

import './App.css'
import CanvasIntegrationPage from './components/CanvasIntegrationPage.js'
import AccountPage from './components/AccountPage'
import PetProfPage from './components/PageDisplay/PetProfPage.js'
import Tutorial from './components/Tutorial/Tutorial.js'

function App(){

  return (

    <Routes>
        
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="logout" element={<Logout/>}/>
        <Route path ="landing" element={<LandingPage/>}/>
        <Route path="tut" element = {<Tutorial/>}/>

        <Route element={<PersistLogin />}>
          <Route element = {<RequireAuth/>}>
            <Route path="/" element = {<Layout/>}>
            <Route path="/" element={<Main/>}/>
            <Route path = "/loader" element={<Loader/>}/>
            <Route path = "/pet_selection" element ={<AnimateChoice/>}/>
            <Route path = "/canvas_integration" element = {<CanvasIntegrationPage/>}/>
            <Route path = "/account" element={<AccountPage/>}/>
            {/* <Route path = "/petprofile" element={<CanvasIntegrationPage/>}/> */}
          </Route>
        </Route>
      </Route>

    </Routes>

  );
}
export default App
