//import Button from 'react-bootstrap/Button'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import "./LandingPage.css"
import browndog from '../images/brown_dog_centered_8x.png';
import kittycat from '../images/orangecat.png';
import { useWindowWidth } from "@react-hook/window-size";

const LandingPage = () => {
    //const axiosPrivate = useAxiosPrivate();
    const nav = useNavigate();
    const width = useWindowWidth();
    const isMobile = useWindowWidth() <= 1130;

    const handleSubmit = (event) => {
        const buttonId = event.target.id;
        nav(`/${buttonId}`)
    }
    if(isMobile){
        return (
            <div className="landingpage-mobile">
                <h1 style={{fontSize: 24}}><center>WELCOME TO STUDY BUDDY!</center></h1>
                <img src={kittycat} alt="cat" className='image-kitty-mobile' />
                <center><Card className = "card-about-mobile">
                    <Card.Title className='card-title-mobile'>About</Card.Title>
                        <Card.Body className='card-body-mobile'>
                        Study Buddy allows you to take care of a virtual pet to achieve your academic goals! Choose from a variety of pets and colors
                        of pets to find the buddy who suits you best. By completing tasks, you can receive candies of various sizes to feed your pet. Watch it grow and level up! 
                        Integrate your Canvas account so your pet can help you keep track of your school assignments. With Study Buddy, you get a cute 
                        way to make keeping up with your schoolwork and personal study goals fun! Click on the buttons below to register or log in to see your buddy.
                        </Card.Body>
                </Card></center>
                    <div>
                        <center>
                        <button className='landingbutton-register-mobile' id="register" type="submit" onClick={handleSubmit} >Register</button>
                        <button className='landingbutton-login-mobile' id="login" type="submit" onClick={handleSubmit}>Login</button> 
                        </center>
                    </div>
            </div>
        )

    }
    return (
        <div className="landingpage" style={{width: width}}>
        <h1 style={{ marginTop: "35px"}}><center><div className= "titlebox">WELCOME TO TASK PET!</div></center></h1>
        <img src={browndog} alt="dog" className='image' style={{width: "375px", height: "500px" }} />
       <center><Card className = "landing-card" style={{width: '35rem'}}>
            <Card.Title style={{fontSize: "1.5rem", fontWeight: "bold"}}>About</Card.Title>
            <Card.Body>
                Task Pet allows you to take care of a virtual pet to achieve your academic goals! Choose from a variety of pets 
                to find the one who suits you best. By completing tasks, you can receive candies of various sizes to feed your pet. Watch it grow and level up! 
                Integrate your Canvas account so your pet can help you keep track of your school assignments. With Task Pet, you get a cute 
                way to make keeping up with your schoolwork and personal study goals fun! Click on the buttons below to register or log in to see your pet.
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