import './textbox.css'
import Card from 'react-bootstrap/Card';
import { useState, useRef, useContext } from "react";
import canvas_sidebar from './canvas_sidebar.png'
import new_access_token from './new_access_token.png'
import './CanvasIntegrationPage.css'
import './AnimateChoice.css'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import {useNavigate }from 'react-router-dom'
//currently theres some repeat stuff in the two files canvas integration and animate choice.


//not right
const CANVAS_URL = '/canvas_integration/'
const CanvasIntegrationPage = () => {
    const axiosPrivate = useAxiosPrivate();
    const [submittedText, setSubmittedText] = useState(null);
    const [canvas_token, setEnteredText] = useState("");

    const textChangeHandler = (i) => {
        setEnteredText(i.target.value);
        //console.log(i.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedText(canvas_token);
        axiosPrivate.post(CANVAS_URL, canvas_token)
        .then((response )=>{
            navigator("/")
        })
        .catch((error) => {
            console.log(error);
        });
        }
    return (
        <div>
            <Card style= {{width: '130rem'}}>
            <Card.Header className = 'pet-choice'><center><h1>ADD YOUR CANVAS ACCOUNT!</h1></center></Card.Header> </Card>
            <hr />
             <Card.Header className = 'header'>So you want your pet to help you track your Canvas assignments...  </Card.Header>
             <Card.Title className = 'text'>It's easy! Just follow these steps: </Card.Title>
             <Card.Body className='text'>
             <p> 1. Access your Canvas account, and select your profile on the sidebar:  </p>
             <p></p><img src = {canvas_sidebar} alt = "Canvas Sidebar"></img>
             <p></p> 2. Select settings. 
             <p></p> 3. Under approved integrations, scroll all the way to the bottom! 
             <p></p> Select "New access token". 
             <p></p> <img src = {new_access_token} alt = "+ New access token"></img>
             <p></p> 4. Enter a purpose and expiration date (ex. study buddy, and the end of your semester date). 
             <p></p> Select "Generate token", and copy and paste it here! </Card.Body>

             <form onSubmit={(event) => handleSubmit(event)}>
                    <input className = "input" type = "text" placeholder= "Enter token here!" value={canvas_token} onChange={textChangeHandler}/>
                    <button className="smallbutton" type="submit">Submit</button>


                </form>

            
        </div>
    )
}

export default CanvasIntegrationPage
