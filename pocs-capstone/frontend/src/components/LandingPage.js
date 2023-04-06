//import Button from 'react-bootstrap/Button'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import "./LandingPage.css"
import kittycat from '../images/orangecat.png';
const LandingPage = () => {
    //const axiosPrivate = useAxiosPrivate();
    const nav = useNavigate();

    const handleSubmit = (event) => {
        const buttonId = event.target.id;
        nav(`/${buttonId}`)
    }
    
    return (
        <div className="landingpage">
        <h1><center>WELCOME TO STUDY BUDDY!</center></h1>
        <img src={kittycat} alt="cat" className='image' />
       <center><Card className = "card" style={{width: '30rem'}}>
            <Card.Title>About</Card.Title>
            <Card.Body>
                Study buddy allows you to take care of a virtual pet to achieve your study goals! Choose from a variety of pets and colors
                of pets to find the buddy you like best. By completing tasks, you can receive candies of various sizes to feed your pet and watch it grow. 
                Integrate your institution Canvas account to have your pet keep track of your school assignments. With Study Buddy, you get a fun and cute 
                way to make keeping up with your schoolwork and personal study goals fun! Click on the buttons below to register or log in to see your buddy.
            </Card.Body>
           
        </Card></center>
        <p></p>
        <div>
            <center>
            <button className='landingbutton' id="register" type="submit" onClick={handleSubmit} >Register</button>
            <button className='landingbutton' id="login" type="submit" onClick={handleSubmit}>Login</button> 
            </center>
            </div>
    </div>
    )
}

export default LandingPage