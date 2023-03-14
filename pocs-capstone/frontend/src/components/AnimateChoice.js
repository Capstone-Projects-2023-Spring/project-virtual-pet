import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from './hs.jpg'
import graysheet from './ghs.jpg'
import './AnimateChoice.css'
import './textbox.css'
import Card from 'react-bootstrap/Card';
import { useState, useRef, useContext } from "react"
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import {useNavigate }from 'react-router-dom'
//import selectpet from './selectpet'

const AVATAR_URL = '/avatar/'
const PETNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const AnimateChoice = () => {
    const axiosPrivate = useAxiosPrivate();
//    const handlers = useContext(PetSelectionContext);//
    const [showTextBox, setShowTextBox] = useState(Array(2).fill(false));
    const spriteRefs = [useRef(null), useRef(null)];
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [submittedText, setSubmittedText] = useState(null);
    const [enteredText, setEnteredText] = useState("");
    const petType = "CT";
    const navigator = useNavigate();
    const textChangeHandler = (i) => {
        setEnteredText(i.target.value);
        //console.log(i.target.value);
      };
  // handle selection
    const handleClick = (index) => {
        spriteRefs[index].current.goToAndPlay(1);
        spriteRefs[index].current.pause();
        setSelectedIndex(index);
        for (let i = 0; i < spriteRefs.length; i++) {
            if (i !== index) {
                setSelectedIndex(index);
                //spriteRefs[i].current.goToAndPlay(2);//
            }
        }
        const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = true;
        setShowTextBox(updatedShowTextBox);
     };
//handle submit
     const handleSubmit = (event, index) => {
        event.preventDefault();
        setSubmittedText(enteredText);
        const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = false;
        setShowTextBox(updatedShowTextBox);
        const currentDate = new Date().toISOString().slice(0,10)
        const last_feed = currentDate;
        const last_interaction = currentDate;
        const petInfo = {
            avatar_type: petType,
            last_interaction,
            last_feed,
            pet_name: enteredText,
            palette: index
        };

        axiosPrivate.post(AVATAR_URL, petInfo)
        .then((response )=>{
            navigator("/")
        })
        .catch((error) => {
            console.log(error);
        });

    }
    
  /*      axios.post('http://127.0.0.1:8000/avatar/', petInfo)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        }*/ 

//contains sprite sheets
    return (
        <div className='petsprite-body'>
            <Card style= {{width: '130rem'}}>
            <Card.Header className = 'pet-choice'><center><h1>CHOOSE YOUR PET</h1></center></Card.Header> </Card>
            <hr />
            <div className='petname-display'>

            
            <div
            className="sprite-container">
            <Spritesheet
                index = {1}
                ref={spriteRefs[0]}
                className={`sprite ${selectedIndex !== null && selectedIndex !== 0 ? 'hidden' : ''}`}
                image = {orangesheet}
                stopLastFrame = {true}
                widthFrame = {266}
                heightFrame = {305}
                steps = {2}
                fps = {20}
                loop = {false}
                autoplay = {false}
                isResponsive = {false}
                endAt = {2}
                  onClick={() => handleClick(0)}
            />
            <Spritesheet
                index = '1'
                ref = {spriteRefs[1]}
                stopLastFrame = {true}
                className={`sprite ${selectedIndex !== null && selectedIndex !== 1 ? 'hidden' : ''}`}
                image = {graysheet}
                widthFrame = {266}
                heightFrame = {305}
                steps = {2}
                fps = {20}
                loop = {false}
                autoplay = {false}
                isResponsive = {false}
                  onClick={() => handleClick(1)}
            />
            </div>
            {showTextBox.map((isShown, index) => isShown && ( 
                
                    <form key={index} onSubmit={(event) => handleSubmit(event, index)}>
                        <input className = "input" type="text" placeholder="Name your pet!" value={enteredText} onChange={textChangeHandler}/>
                        <button className="button" type="submit">Submit</button>
                    </form>
                
            ))}
            {submittedText && (<form className = 'pet-name' > {enteredText}</form>)}

            </div>
        </div>
    );
}

export default AnimateChoice


