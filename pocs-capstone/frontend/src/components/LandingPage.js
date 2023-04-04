//import Button from 'react-bootstrap/Button'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./LandingPage.css"
const LandingPage = () => {
    const axiosPrivate = useAxiosPrivate();
    const nav = useNavigate();

    const handleSubmit = (event) => {
        const buttonId = event.target.id;
        nav(`/${buttonId}`)
    }
    
    return (
        <div className="landingpage">
        <h1><center>WELCOME TO STUDY BUDDY!</center></h1>
       <button className='landingbutton' id="register" type="submit" onClick={handleSubmit}>Register</button>
       <button className='landingbutton' id="login" type="submit" onClick={handleSubmit}>Login</button>
    </div>
    )
}

export default LandingPage