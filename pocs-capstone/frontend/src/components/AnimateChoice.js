import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from '../../src/images/orange_happy_sheet.png'
import graysheet from '../../src/images/gray_happy_sheet.png' 
import './AnimateChoice.css'
import './textbox.css'
import Card from 'react-bootstrap/Card';
import { useState, useRef, useContext } from "react"
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'
import { faColonSign } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel';
import gray_cat from '../images/gray_neutral_scaled_5x_pngcrushed.png'
import orange_cat from '../images/orange_neutral_scaled_5x_pngcrushed.png'
import white_cat from '../images/whitecat_scaled_5x_pngcrushed.png'
import tux_cat from '../images/tux_cat_scaled_5x_pngcrushed.png'
//import selectpet from './selectpet'

const AVATAR_URL = '/avatar/'
const PETNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const AnimateChoice = () => {
    const axiosPrivate = useAxiosPrivate();
    //    const handlers = useContext(PetSelectionContext);//
    const [showTextBox, setShowTextBox] = useState(Array(2).fill(false));
    const spriteRefs = [useRef(null), useRef(null)];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [submittedText, setSubmittedText] = useState(null);
    const [enteredText, setEnteredText] = useState("");

    const [nameError, setNameError] = useState('')
    const petType = "CT";
    const navigator = useNavigate();
    const width = useWindowWidth()
    const textChangeHandler = (i) => {
        //    if(enteredText === "") {
        //     setEnteredText("Default");
        //  }
        setEnteredText(i.target.value);
        //console.log(i.target.value);
    };
    // handle selection
    const handleClick = (index) => {
        // spriteRefs[index].current.goToAndPlay(1);
        // spriteRefs[index].current.pause();
        setSelectedIndex(index);
        // for (let i = 0; i < spriteRefs.length; i++) {
        //     if (i !== index) {
        //         setSelectedIndex(index);
        //         //spriteRefs[i].current.goToAndPlay(2);//
        //     }
        // }
        const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = true;
        setShowTextBox(updatedShowTextBox);
    };
    //handle submit
    const handleSubmit = (event, index) => {
        event.preventDefault();
        if (enteredText !== "") {
            setSubmittedText(enteredText);
            const updatedShowTextBox = [...showTextBox];
            updatedShowTextBox[index] = false;
            setShowTextBox(updatedShowTextBox);
            
             const currentDate = new Date();
             currentDate.setDate(currentDate.getDate() - 2)
            const startDate = currentDate.toISOString().slice(0, 10)
            console.log(startDate);
            const last_feed = startDate;
            const last_interaction = startDate;
            const total_xp = 1;
            
            const petInfo = {
                avatar_type: petType,
                last_interaction,
                last_feed,
                total_xp,
                pet_name: enteredText,
                palette: index
            };

            axiosPrivate.post(AVATAR_URL, petInfo)
                .then((response) => {
                    navigator("/")
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        else {
            setNameError('You must enter a name!')

        }

    }

    const handleSelect = (selectedPet) => {
        setSelectedIndex(selectedPet)
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
            <Card style={{ width: width }}>
                <Card.Header className='pet-choice'><center><h1>CHOOSE YOUR PET</h1></center></Card.Header> </Card>
            <hr />
            <div className='petname-display'>
                {/* <div className='sprite-container'> */}
            <Carousel activeIndex={selectedIndex} onSelect={handleSelect} variant='dark' interval={null} className='pet-selection-carousel' >
            <Carousel.Item>
      <img src={orange_cat} alt="orange" className='sprite-container' index={0} ref={spriteRefs[0]}></img>
      {/* <p></p><p></p> */}
      {/* <button className = 'button' onClick={() => handleClick(0)}> Select</button> */}
      {/* <form key={0} onSubmit={(event) => handleSubmit(event, 0)}>
      <input className="input" type="text" placeholder="Name your pet!" value={enteredText} onChange={textChangeHandler} />
      <button className="button" type="submit">Submit</button>
  </form> */}
 </Carousel.Item>
 <Carousel.Item>
      <img src={gray_cat} alt="gray" className='sprite-container' index={1} ref={spriteRefs[1]}></img>
      {/* <button className = 'button' onClick={() => handleClick(1)}> Select</button> */}
      {/* <form key={1} onSubmit={(event) => handleSubmit(event, 1)}>
      <input className="input" type="text" placeholder="Name your pet!" value={enteredText} onChange={textChangeHandler} />
      <button className="button" type="submit">Submit</button>
  </form> */}
</Carousel.Item>
                    <Carousel.Item>
                    <img src = {white_cat} alt="white" className='sprite-container' index = {2} ref={spriteRefs[2]}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {tux_cat} alt="tux" className='sprite-container' index = {3} ref={spriteRefs[3]}></img>
                    </Carousel.Item>
                </Carousel>
                {/* </div> */}

                {/* <div
                    className="sprite-container">
                    <Spritesheet
                        index={1}
                        ref={spriteRefs[0]}
                        className={`sprite ${selectedIndex !== null && selectedIndex !== 0 ? 'hidden' : ''}`}
                        image={orangesheet}
                        stopLastFrame={true}
                        widthFrame={255}
                        heightFrame={350}
                        steps={5}
                        fps={3}
                        loop={false}
                        autoplay={false}
                        isResponsive={false}
                        endAt={4}
                        onClick={() => handleClick(0)}
                    />
                    <Spritesheet
                        index='1'
                        ref={spriteRefs[1]}
                        stopLastFrame={true}
                        className={`sprite ${selectedIndex !== null && selectedIndex !== 1 ? 'hidden' : ''}`}
                        image={graysheet}
                        widthFrame={255}
                        heightFrame={350}
                        steps={5}
                        fps={3}
                        loop={false}
                        autoplay={false}
                        isResponsive={false}
                        endAt = {4}
                        onClick={() => handleClick(1)}
                    />
                </div> */}
                

                    {/* // <form key={index} onSubmit={(event) => handleSubmit(event, index)}>
                    //     <input className="input" type="text" placeholder="Name your pet!" value={enteredText} onChange={textChangeHandler} />
                    //     <button className="button" type="submit">Submit</button>
                    // </form> */}
                    <form onSubmit={(event) => handleSubmit(event, selectedIndex)}>
                    <input className="input" type="text" placeholder="Name your pet!" value={enteredText} onChange={textChangeHandler} />
                    <button className="button" type="submit">Submit</button>
                    </form>

                
                {submittedText && (<form className='pet-name' > {enteredText}</form>)}

                {nameError!=="" ? <p>{nameError}</p> : <></>}

            </div>
        </div>
    );
}

export default AnimateChoice


