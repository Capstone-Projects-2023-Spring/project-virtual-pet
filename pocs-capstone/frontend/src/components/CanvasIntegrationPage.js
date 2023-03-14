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
const CANVAS_URL = '/user-data/'
const CanvasIntegrationPage = () => {
    const axiosPrivate = useAxiosPrivate();
    const [submittedText, setSubmittedText] = useState(null);
    const [canvas_token, setEnteredText] = useState("");
    const [nameError, setNameError] = useState('')

    const textChangeHandler = (i) => {
        setEnteredText(i.target.value);
        //console.log(i.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (canvas_token !== "") {
            setSubmittedText(canvas_token);
            
            axiosPrivate.get(CANVAS_URL).then((response) =>{
                const id = response?.data[0].id
                console.log("ID---->",response.data[0].id) 
                if (id<1)
                    throw("DOPPEEE")
                const url = CANVAS_URL+id+"/"
                console.log("-----> ",url)
                const data = JSON.stringify({canvas_token})
                axiosPrivate.put(url, data)
                    .then((response )=>{
                        console.log(response.data);
                    })
            }).catch((err)=>{console.log(err)})
/*
            const url = CANVAS_URL+id+"/"
            console.log("-----> ",url)
            const data = JSON.stringify({canvas_token})
            axiosPrivate.put(url, data)
            .then((response )=>{
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
            */
        }
        else {
            console.log("NO NAME ENTERED")
            setNameError('You must enter a token!')
        }
    }
    return (
        <div className = "body">
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

             <form className = "submit_canvas" onSubmit={(event) => handleSubmit(event)}>
                    <input className = "input" type = "text" placeholder= "Enter token here!" value={canvas_token} onChange={textChangeHandler}/>
                    <button className="button" type="submit">Submit</button>
                    {nameError!=="" ? <p>{nameError}</p> : <></>}
            </form>
            
        </div>
    )
}

export default CanvasIntegrationPage
