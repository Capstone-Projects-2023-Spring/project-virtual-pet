import PetSprite from './PetSprite.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'
// import orangesheet from '../../../src/images/orange_happy_sheet.png'
// import graysheet from '../../../src/images/gray_happy_sheet.png'
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
import { useDrop } from "react-dnd";
import { useContext, useEffect, useRef, useState } from 'react';
import Spritesheet from 'react-responsive-spritesheet'
import bgimage from '../../images/bg.gif'
import ProgressBar from 'react-bootstrap/ProgressBar';
import CalculateXP from '../../algos/assignXP';
import CalculatePetLevel from '../../algos/calculatePetLevel';
//import AvatarContext from "../../context/AvatarContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import GlobalContext from '../../context/GlobalContext.js';
import context from 'react-bootstrap/esm/AccordionContext.js';
// (next level - remainder) / (next level) //

const SAD = 'S'
const NEUTRAL = 'N'
const HAPPY = 'H'

const TASK_URL = "/tasks/"
const USER_URL = "/user-data/"
const TODAY = new Date()

const WEIGHTS = [
    '15 paperclips',
    '3 nickels',
    '5 pieces of bubblegum',
    '4 mullberries',
    '2/3 of a medium radish',
    '461 sequins',
    '25 miniature toadstools',
    '5 acorns',
    '1 small egg',
    '231.5 grains of rice',
    '6 teaspoonfuls of cinnamon',
    '272 apple seeds',
    '1/17 of a grapefruit',
    '8 cups of rose petals',
    '2 tiny gray pebbles',
    '12 jellybeans',
    '1 strawberry',
    '3 sheets of US letter sized printer paper',
    '300 almond slivers',
    '23/4 of a slice of multigrain bread',
    '1 big handful of cotton balls',
    '4 clementine slices',
    '150 wooden toothpicks',
    '1 large thimble',
    '3 wooden pencils'

];

const PetDisplay = () => {

  
    //TODO - shouldn't call calc-pet-lev 3 times
    const axiosPrivate = useAxiosPrivate();
    const [mood,setMood]=useState(NEUTRAL); //H = happy, S = Sad, N = Neutral
    const [avatarImage, setAvatarImage] = useState(null);

    const contextHandler = useContext(GlobalContext);
    const [spritesheetInstance, setSpritesheetInstance] = useState(null);

    const [level, setLevel] = useState(CalculatePetLevel(contextHandler?.avatarInfo.total_xp).LEVEL);

    const [level_info, setLevelInfo] = useState(CalculatePetLevel(contextHandler?.avatarInfo.total_xp))

   const [progressNow, setProgressNow] = useState(0)

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
    }

    function dateDelta(date1,date2){
       return Math.floor((date1-date2)/(1000*60*60*24))
    }

    // const updateProgressNowHandler = () => {
        
    //     if (progressNow > 100){
    //      setProgressNow(100)
    //      clearInterval(updateProgressNowHandler)

    //     }
    //     setProgressNow(s => s+1)
    // }


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
                console.log("BIRTHDAY HAPPY:",birthday_delta)
                return
            }
            })
            
            const last_interaction = contextHandler.avatarInfo.last_interaction
            const last_feed = new Date(contextHandler.avatarInfo.last_feed)
            
            const feed_delta = dateDelta(TODAY,last_feed) //elapsed time since last feed
            // console.log("FEED DELTA",feed_delta,TODAY,last_feed)
            if (feed_delta<=3 && feed_delta>1){
                setMood(NEUTRAL)
                // console.log("FEED NEUTRAL",feed_delta)
            }
            else if (feed_delta<=1){
                setMood(HAPPY)
                // console.log("FEED HAPPY",feed_delta)
             }
            else {
                setMood(SAD)
                // console.log("FEED SAD",feed_delta)
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
                        // console.log("TASK NEUTRAL")
                        return
                    }
                    setMood(HAPPY) //TODO we'll check grades here as well
                    // console.log("TASK HAPPY")
                    return
                }
    
        }
        ,[contextHandler]);

    //TEMP USE EFFECT TO SEE MOOD
    //Mary, plug in your state changes here!!
    useEffect(()=>{
        // console.log("MOOD------>",mood)
        const getavatarImage = (pet) => {
            switch (pet.avatar_type) {
                case 'CT':
                    // console.log(pet.palette);
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
                        // case 2:
                        //     if(mood==='N'){
                        //         setAvatarImage(orange_cat);
                        //    //} else {
                        //     //    setAvatarImage(`orange_${mood}_gif`)
                        //        // console.log(`orange_${mood}_gif`)
                        //    } else if (mood === 'H'){
                        //         setAvatarImage(orange_H_gif);
                        //    } else {
                        //         setAvatarImage(orange_S_gif);
                        //    }
                        
                           // switch(mood){
                        //         case 'N':
                        //             setAvatarImage(gray_cat);
                        //         case 'H':
                        //             setAvatarImage(gray_H_gif);
                        //         case 'S':
                        //             setAvatarImage(gray_S_gif);
                        //   //  }
                            
                            // CHANGE TO IMAGE OF OTHER CAT (black palette)
                            // return require('../../images/graycat.png')
                           // return graysheet;
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


    const retAvatarImage = () => {
        return avatarImage;
    }


    useEffect (() => {
        //  [level, remain, next_level] = CalculatePetLevel(exp);
        setLevelInfo(CalculatePetLevel(contextHandler.avatarInfo?.total_xp));


    },[contextHandler])


    // Easter egg: randomly change pet's weight every minute (change the 60 to something else to change tinme interval)
    const [currentWeight, setCurrentWeight] = useState(WEIGHTS[0]); // initialize with first weight in the array
    useEffect(() => {
        const interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * WEIGHTS.length);
          setCurrentWeight(WEIGHTS[randomIndex]);
        }, 5 * 60 * 1000); // change weight every 5 minutes
        return () => clearInterval(interval);
      }, []); 

    useEffect( ()=> {
        
        const prevLevel = contextHandler?.prev_level_info

        if(prevLevel.LEVEL < level_info.LEVEL && contextHandler.leveledUp){
            // this calls twice? 
            console.log("PREVIOUS LEVEL", contextHandler?.prev_level_info, "CURRENT LEVEL", level_info)

            const updateProgressNowHandler = setInterval(() => {

                console.log("PROGRESS NOW: ", progressNow, "LEVLINFO", level_info)

                if (progressNow > 70){
                    console.log("PROGRESS NOW GREATER THAN LEVEL_INFO RATIO", progressNow, level_info.RATIO)
                    // setProgressNow(level_info.RATIO)
                    setProgressNow(70)
                    contextHandler?.setLeveledUp(false)
                    clearInterval(updateProgressNowHandler)
                    
                    
                    
                }
                setProgressNow(s => s+1)
            }, 50)

        }
       
        // if (contextHandler?.leveledUp ) {
        //     console.log("leveledup?", contextHandler?.leveledUp, "PROGRESSNOW", progressNow, "LEVELINFO", level_info)
        //     const updateProgressNowHandler = setInterval(() => {
        //         if (progressNow > level_info.RATIO ){
        //         console.log("PROGRESS NOW GREATER THAN LEVEL_INFO RATIO", progressNow, level_info.RATIO)
        //          setProgressNow(level_info.RATIO)
        //          clearInterval(updateProgressNowHandler)
        //         //  setProgressNow(0)
        //          contextHandler?.setLeveledUp(false)
        //          setProgressNow(0)
                 
        //         }
        //         setProgressNow(s => s+1)
        //        }, 50)
              
        // }
    }, [contextHandler])

    

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{contextHandler?.avatarInfo.pet_name}</Card.Header>

                <div className="Board" >

                    <div className='p-sprite-display'>
                        <img src={bgimage} alt="background" className="bg-sprite" />
                        <img src = {avatarImage} className = "p-sprite"></img>
                    </div>
                </div>
                <div className="pbar-exp">
                
                <div className='pbar-text'>LVL:{level_info.LEVEL} </div>
                {/* <ProgressBar now={(level_info.RATIO)} variant='success' style={{ width: '18rem' }} /> */}
                <ProgressBar now={!contextHandler?.leveledUp ? level_info.RATIO : progressNow} variant='success' style={{ width: '18rem' }} />
                
                <div className='experience-ratio'>{level_info.NEXT_LEVEL-level_info.REMAINDER}/{level_info.NEXT_LEVEL}</div>
            </div>
                <Card.Body className='pd-bg'>

                    <Card.Text className='pet-desc-text'>
                        {contextHandler?.avatarInfo.flavour_text}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='pd-position'>
                        <div className='pet-label'>MOOD: </div>
                        <div>Yippee!!!</div>
                    </ListGroup.Item>
                    <ListGroup.Item className='pd-position'>
                        <div className='pet-label'>WEIGHT: </div>
                        <div>{currentWeight}</div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default PetDisplay
