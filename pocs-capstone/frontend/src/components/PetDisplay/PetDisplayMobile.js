import PetSprite from "./PetSprite.js";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PetDisplay.css";
import "../Inventory/Inventory.css";
import orangesheet from "../../../src/images/orange_happy_sheet.png";
import graysheet from "../../../src/images/gray_happy_sheet.png";
import { useDrop } from "react-dnd";
import { useContext, useEffect, useRef, useState } from "react";
import Spritesheet from "react-responsive-spritesheet";
import bgimage from "../../images/bg.gif";
import ProgressBar from "react-bootstrap/ProgressBar";
import CalculateXP from "../../algos/assignXP";
import CalculatePetLevel from "../../algos/calculatePetLevel";
//import AvatarContext from "../../context/AvatarContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import GlobalContext from "../../context/GlobalContext.js";
import MobilePetMoodContext from "../../context/MobilePetMoodContext.js";
import orange_H_gif from '../../images/orange_happy_gif.gif'
import orange_S_gif from '../../images/orange_sad_gif.gif'
import gray_H_gif from '../../images/gray_happy_gif.gif'
import gray_S_gif from '../../images/gray_sad_gif.gif'
import gray_cat from '../../images/gray_neutral_scaled_5x_pngcrushed.png'
import orange_cat from '../../images/orange_neutral_scaled_5x_pngcrushed.png'
import white_cat from '../../images/whitecat_scaled_5x_pngcrushed.png'
import tux_cat from '../../images/tux_cat_scaled_5x_pngcrushed.png'
import white_H_gif from '../../images/white_happy_gif.gif'
import white_S_gif from '../../images/white_sad_gif.gif'
import tux_H_gif from '../../images/tux_happy_gif.gif'
import tux_S_gif from '../../images/tux_sad_gif.gif'
// (next level - remainder) / (next level) //

const SAD = "S";
const NEUTRAL = "N";
const HAPPY = "H";

const TASK_URL = "/tasks/";
const USER_URL = "/user-data/";
const TODAY = new Date();
const PetDisplay = () => {
  //TODO - shouldn't call calc-pet-lev 3 times
  const axiosPrivate = useAxiosPrivate();
  const [mood, setMood] = useState(NEUTRAL); //H = happy, S = Sad, N = Neutral
  // const [mooddesc, setMoodDesc] = useState("");
  const [avatarImage, setAvatarImage] = useState(null);
  //const avatar_handler = useContext(AvatarContext);
  const contextHandler = useContext(GlobalContext);
  const moodHandler = useContext(MobilePetMoodContext);
  const [spritesheetInstance, setSpritesheetInstance] = useState(null);
  //const [exp, setExp] = useState(avatar_handler.avatarInfo.total_xp);
  //const [level, setLevel] = useState(CalculatePetLevel(avatar_handler.avatarInfo.total_xp).LEVEL);
  //const [remainder, setRemainder] = useState(CalculatePetLevel(avatar_handler.avatarInfo.total_xp).REMAINDER);
  //const [next_level, setNextLevel] = useState(CalculatePetLevel(avatar_handler.avatarInfo.total_xp).REMAINDER);
  const [level_info, setLevelInfo] = useState(
    CalculatePetLevel(contextHandler?.avatarInfo.total_xp)
  );
  // const [ratio,setRatio] = useState(level_info.NEXT_LEVEL-level_info.REMAINDER/level_info.NEXT_LEVEL ) //TODO susss

  function animateSpriteSheet() {
    if (contextHandler?.spritesheetInstance) {
      contextHandler?.spritesheetInstance.goToAndPlay(1);
      contextHandler?.spritesheetInstance.pause();
    }
  }

  function handleGetInstance(spritesheet) {
    contextHandler?.setSpritesheetInstance(spritesheet);
  }

  const handleClick = (spritesheet) => {
    spritesheet.goToAndPlay(1);
    spritesheet.pause();
  };

  function dateDelta(date1, date2) {
    return Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
  }

  //We should calculate the pets modd on change of state
  /*
        if it's you're birthday, your pet is happy
        if pet hasn't been fed in a while but tasks are complete pet is neutral
        if pet tasks are overdue, pet is sad
    */
        useEffect (()=>
        {
            var tasks;
            var user;
            var feed_flag = false;
            
    
            axiosPrivate.get(USER_URL).then(response=>{
                user=response?.data
                const birthday = new Date(user?.birthday)
                        //if it's your birthday, your pet is happy
            const birthday_delta = dateDelta(birthday,TODAY)
            if (birthday_delta<1 && birthday_delta>=0){
                setMood(HAPPY)
                // setMoodDesc("I'm so happy it's your birthday!! Yippee!!")
                moodHandler?.setPetMoodDesc("I'm so happy it's your birthday!! Yippee!!")
                console.log("BIRTHDAY HAPPY:",birthday_delta)
                return
            }
            })
            
            const last_interaction = contextHandler.avatarInfo.last_interaction
            const last_feed = new Date(contextHandler.avatarInfo.last_feed)
            
            const feed_delta = dateDelta(TODAY,last_feed) //elapsed time since last feed
            console.log("FEED DELTA",feed_delta,TODAY,last_feed)
            if (feed_delta<=3 && feed_delta>1){
                setMood(NEUTRAL)
                // setMoodDesc("I'm feeling content.")
                moodHandler?.setPetMoodDesc("I'm feeling content.")
                console.log("FEED NEUTRAL",feed_delta)
            }
            else if (feed_delta<=1){
                setMood(HAPPY)
                // contextHandler?.setMoodDesc("Candy is so yummy! I'm so happy!")
                moodHandler?.setPetMoodDesc("Candy is so yummy! I'm so happy!")
                console.log("FEED HAPPY",feed_delta)
             }
            else {
                setMood(SAD)
                // contextHandler?.setMoodDesc("I'm hungry :(")
                moodHandler?.setPetMoodDesc("I'm hungry :(")
                console.log("FEED SAD",feed_delta)
                feed_flag=true
            }
    
            var pass_task_check = false
            //if overdue assignments, pet is sad
            axiosPrivate.get(TASK_URL).then(response=>{
                tasks = response?.data
                tasks.forEach(item => {
                    if (!item.completed){
                        const due = new Date(item.due_date)
                        const task_delta = dateDelta(due, TODAY)
                        console.log("TASK DELTA----->",task_delta,item.due_date,TODAY,item.completed)
                        if (task_delta<0){
                            setMood(SAD)
                            // contextHandler?.setMoodDesc("I'm stressed. You have overdue tasks... please complete them :(")
                            moodHandler?.setPetMoodDesc("I'm stressed. You have overdue tasks... please complete them :(")
                            console.log("TASK SAD")
                            return
                        }
                    }
                }
              )
              
            pass_task_check = true
            })       
              if(pass_task_check){ // guard because axios call is async
                    if(feed_flag){
                        setMood(NEUTRAL)
                        // contextHandler?.setMoodDesc("I'm feeling content.")
                        moodHandler?.setPetMoodDesc("I'm feeling content.")
                        console.log("TASK NEUTRAL")
                        return
                    }
                    setMood(HAPPY) //TODO we'll check grades here as well
                    // contextHandler?.setMoodDesc("You've gotten so much done! I'm so happy! :D")
                    moodHandler?.setPetMoodDesc("You've gotten so much done! I'm so happy! :D")
                    console.log("TASK HAPPY")
                    return
                }
    
        }
        ,[contextHandler]);

  //TEMP USE EFFECT TO SEE MOOD
  //Mary, plug in your state changes here!!
  useEffect(()=>{
    console.log("MOOD------>",mood)
    const getavatarImage = (pet) => {
        switch (pet.avatar_type) {
            case 'CT':
                console.log(pet.palette);
                switch (pet.palette) {
                    case 0:
                       if(mood==='N'){
                            setAvatarImage(orange_cat);
                       //} else {
                        //    setAvatarImage(`orange_${mood}_gif`)
                           // console.log(`orange_${mood}_gif`)
                       } else if (mood === 'H'){
                            setAvatarImage(orange_H_gif);
                       } else {
                            setAvatarImage(orange_S_gif);
                       }
                    return
                    case 1:
                        if(mood==='N'){
                            setAvatarImage(gray_cat);
                       } else if(mood==='H'){
                            setAvatarImage(gray_H_gif);
                            // setAvatarImage(`gray_${mood}_gif`)
                            // console.log(`gray_${mood}_gif`)
                       } else {
                        setAvatarImage(gray_S_gif);
                       }
                    return
                    case 2:
                        case 1:
                        if(mood==='N'){
                            setAvatarImage(white_cat);
                       } else if(mood==='H'){
                            setAvatarImage(white_H_gif);
                            // setAvatarImage(`gray_${mood}_gif`)
                            // console.log(`gray_${mood}_gif`)
                       } else {
                        setAvatarImage(white_S_gif);
                       }
                    return
                    case 3:
                        case 1:
                        if(mood==='N'){
                            setAvatarImage(tux_cat);
                       } else if(mood==='H'){
                            setAvatarImage(tux_H_gif);
                            // setAvatarImage(`gray_${mood}_gif`)
                            // console.log(`gray_${mood}_gif`)
                       } else {
                        setAvatarImage(tux_S_gif);
                       }
                    return
                }
            

            case 'DG':
                return ''
            case 'CR':
                return ''
            case 'RK':
                return ''
        }
    }
getavatarImage(contextHandler?.avatarInfo);
},[mood])

  const spriteSheetRef = useRef(null);

  /**
  const getExp = (candy) => {
    //console.log('WTF')
    //getLevel()
    //console.log("HELO?", contextHandler.avatarInfo)
    //console.log("CANDY----->",candy)
    const received_xp = CalculateXP(candy.candy_base_type, candy.candy_level);

    const total_xp = received_xp + contextHandler?.avatarInfo.total_xp;

    console.log("TOTAL XP----------->", total_xp);
    const updatedAvatar = {
      ...contextHandler?.avatarInfo,
      total_xp: total_xp,
    };
    console.log("UPDATED AVATAR", updatedAvatar);
    axiosPrivate
      .patch(`/avatar/${contextHandler?.avatarInfo.avatar_id}/`, updatedAvatar)
      .then((response) => {
        console.log("response.data:", response.data);
        contextHandler?.setAvatar(response.data); //change this to add to previous state instead of replacing completely (in case of >1 avatar for 1 user)
        getLevel(contextHandler?.avatarInfo.total_xp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
*/
  useEffect (() => {
    //  [level, remain, next_level] = CalculatePetLevel(exp);
    setLevelInfo(CalculatePetLevel(contextHandler.avatarInfo?.total_xp));
    //console.log("LVL,REMAIN,NEXT",petInfo.LEVEL,petInfo.REMAINDER,petInfo.NEXT_LEVEL)
    //setExp(avatar_handler.avatarInfo.total_xp);
    //setLevel(petInfo.LEVEL);
    //setRemainder(petInfo.REMAINDER);
    //setNextLevel(petInfo.NEXT_LEVEL);

    //setRatio(Math.floor(100*((level_info.NEXT_LEVEL-level_info.REMAINDER)/level_info.NEXT_LEVEL)));
   // animateSpriteSheet();
    //  if(remainder===0){
    //     setExp(0);
    //   }

},[contextHandler])

  return (
    <div className="pet-display-mobile">
        <Card.Header className='pet-name'>{contextHandler?.avatarInfo.pet_name}</Card.Header>
      {/* <div className="pet-display-mobile-wrapper"> */}
      <div
        className="pet-container-mobile" /*style={{width:'${handler.width}px'}}*/
      >
        
        {/* <div className="p-sprite-mobile"> */}
        <div>
        {/* <img src={bgimage} alt="background" className="bg-sprite" /> */}
          <img src = {avatarImage} className="sprite-sheet-mobile"></img>

          {/* className = "p-sprite" */}
          {/* <img src = {avatarImage} className = "p-sprite" style={{width:'100rem'}}></img> */}
          {/* <Spritesheet style={{width:'100rem'}}
            image={avatarImage(contextHandler?.avatarInfo)}
        
            className="sprite-sheet-mobile"
            stopLastFrame={true}
            widthFrame={255}
            heightFrame={350}
            steps={5}
            fps={3}
            loop={false}
            autoplay={false}
            isResponsive={false}
            getInstance={handleGetInstance}
            onClick={(spritesheet) => {
              handleClick(spritesheet);
            }}
            backgroundSize={`cover`}
            backgroundRepeat={`no-repeat`}
            backgroundPosition={`center center`}
          /> */}
        </div>
      </div>
      <div className="mobileBar">
        <span className="pbar-text">LVL:{level_info.LEVEL} </span>
        <ProgressBar
          now={level_info.RATIO}
          variant="success"
          style={{ width: "12rem" }}
        />
        <span className="experience-ratio">
          {level_info.NEXT_LEVEL - level_info.REMAINDER}/{level_info.NEXT_LEVEL}
        </span>
      </div>
      {/* </div> */}
      {/* <Card.Body className='pd-bg'>

                    <Card.Text className='pet-desc-text'>
                        {contextHandler?.avatarInfo.flavour_text}
                    </Card.Text>
                </Card.Body> */}
      {/* <ListGroup className="list-group-flush">
                    <ListGroup.Item className='pd-position'>
                        <div className='pet-label'>MOOD: </div>
                        <div>Yippee!!!</div>
                    </ListGroup.Item>
                    <ListGroup.Item className='pd-position'>
                        <div className='pet-label'>WEIGHT: </div>
                        <div>5 Paper Clips</div>
                    </ListGroup.Item>
                </ListGroup> */}
      {/* </Card> */}
    </div>
  );
};

export default PetDisplay;
