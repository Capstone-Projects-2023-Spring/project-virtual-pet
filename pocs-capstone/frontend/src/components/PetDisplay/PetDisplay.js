import PetSprite from './PetSprite.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'
import orangesheet from '../../../src/images/orange_happy_sheet.png'
import graysheet from '../../../src/images/gray_happy_sheet.png'
import { useDrop } from "react-dnd";
//import InventoryContext from '../../context/InventoryContext.js';
import { useContext, useEffect, useRef, useState } from 'react';
import Spritesheet from 'react-responsive-spritesheet'
import bgimage from '../../images/bg.gif'
import ProgressBar from 'react-bootstrap/ProgressBar';
import CalculateXP from '../../algos/assignXP';
import CalculatePetLevel from '../../algos/calculatePetLevel';
//import AvatarContext from "../../context/AvatarContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import GlobalContext from '../../context/GlobalContext.js';
// (next level - remainder) / (next level) //

const SAD = 'S'
const NEUTRAL = 'N'
const HAPPY = 'H'

const TASK_URL = "/tasks/"
const USER_URL = "/user-data/"
const TODAY = new Date()
const PetDisplay = ({ avatarInfo, setAvatar }) => {
    //TODO - shouldn't call calc-pet-lev 3 times
    const axiosPrivate = useAxiosPrivate();
    const [mood,setMood]=useState(NEUTRAL); //H = happy, S = Sad, N = Neutral
    //const avatar_handler = useContext(AvatarContext);
    const contextHandler = useContext(GlobalContext);
    const [spritesheetInstance, setSpritesheetInstance] = useState(null);
    //const [exp, setExp] = useState(avatar_handler.avatarInfo.total_xp);
    //const [level, setLevel] = useState(CalculatePetLevel(avatar_handler.avatarInfo.total_xp).LEVEL);
    //const [remainder, setRemainder] = useState(CalculatePetLevel(avatar_handler.avatarInfo.total_xp).REMAINDER);
    //const [next_level, setNextLevel] = useState(CalculatePetLevel(avatar_handler.avatarInfo.total_xp).REMAINDER);  
    const [level_info, setLevelInfo] = useState(CalculatePetLevel(contextHandler?.avatarInfo.total_xp))
   // const [ratio,setRatio] = useState(level_info.NEXT_LEVEL-level_info.REMAINDER/level_info.NEXT_LEVEL ) //TODO susss

    function animateSpriteSheet() {
        if (spritesheetInstance) {
            spritesheetInstance.goToAndPlay(1);
            spritesheetInstance.pause();
        }
    }

    function handleGetInstance(spritesheet) {
        setSpritesheetInstance(spritesheet);
    }

    const handleClick = (spritesheet) => {
        spritesheet.goToAndPlay(1);
        spritesheet.pause();
    }

    function dateDelta(date1,date2){
       return Math.floor((date1-date2)/(1000*60*60*24))
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
            console.log("BIRTHDAY HAPPY:",birthday_delta)
            return
        }
        })
        
        const last_interaction = avatarInfo.last_interaction
        const last_feed = new Date(avatarInfo.last_feed)
        
        const feed_delta = dateDelta(TODAY,last_feed) //elapsed time since last feed
        console.log("FEED DELTA",feed_delta,TODAY,last_feed)
        if (feed_delta<=1 ){
           setMood(HAPPY)
           console.log("FEED HAPPY",feed_delta)
        }
        if (feed_delta<=3){
            setMood(NEUTRAL)
            console.log("FEED NEUTRAL",feed_delta)
        }
        else{
            setMood(SAD)
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
                    const task_delta = dateDelta(due,TODAY)
                    console.log("TASK DELTA----->",task_delta,item.due_date,TODAY,item.completed)
                    if (task_delta<0){
                        setMood(SAD)
                        console.log("TASK SAD")
                        return
                    }
                    
                }
                pass_task_check = true
            })
            if(pass_task_check){ // guard because axios call is async
                if(feed_flag){
                    setMood(NEUTRAL)
                    console.log("TASK NEUTRAL")
                    return
                }
                setMood(HAPPY) //TODO we'll check grades here as well
                console.log("TASK HAPPY")
                return
            }
        })       

    }
    ,[contextHandler,avatarInfo]);

    //TEMP USE EFFECT TO SEE MOOD
    //Mary, plug in your state changes here!!
    useEffect(()=>{
        console.log("MOOD------>",mood)
    },[mood])


    const spriteSheetRef = useRef(null);
    const avatarImage = (pet) => {
        switch (pet.avatar_type) {
            case 'CT':
                switch (pet.palette) {
                    case 0:
                        //return require('../../images/orangecat.png')
                        return orangesheet;
                    case 1:
                        // CHANGE TO IMAGE OF OTHER CAT (black palette)
                        // return require('../../images/graycat.png')
                        return graysheet;
                }

            case 'DG':
                return ''
            case 'CR':
                return ''
            case 'RK':
                return ''
        }
    }

    const getExp = (candy) => {
        //console.log('WTF')
        //getLevel()
        //console.log("HELO?", contextHandler.avatarInfo)
        //console.log("CANDY----->",candy)
        const received_xp = CalculateXP(candy.candy_base_type, candy.candy_level)
    
        const total_xp = received_xp + contextHandler.avatarInfo.total_xp
        
        console.log("TOTAL XP----------->", total_xp)
        const updatedAvatar = {
            ...contextHandler?.avatarInfo,
            total_xp:total_xp
          };
          console.log("UPDATED AVATAR",updatedAvatar)
          axiosPrivate
            .patch(`/avatar/${contextHandler?.avatarInfo.avatar_id}/`, updatedAvatar)
            .then((response) => {
              console.log("response.data:", response.data);
              contextHandler?.setAvatar(response.data); //change this to add to previous state instead of replacing completely (in case of >1 avatar for 1 user)
              getLevel(contextHandler.avatarInfo.total_xp)
                
            })
            .catch((err) => {
              console.log(err);
            });
  };

    

    const getLevel = (xp) => {
        //  [level, remain, next_level] = CalculatePetLevel(exp);
        setLevelInfo(CalculatePetLevel(xp));
        //console.log("LVL,REMAIN,NEXT",petInfo.LEVEL,petInfo.REMAINDER,petInfo.NEXT_LEVEL)
        //setExp(avatar_handler.avatarInfo.total_xp);
        //setLevel(petInfo.LEVEL);
        //setRemainder(petInfo.REMAINDER);
        //setNextLevel(petInfo.NEXT_LEVEL);

        //setRatio(Math.floor(100*((level_info.NEXT_LEVEL-level_info.REMAINDER)/level_info.NEXT_LEVEL)));
        animateSpriteSheet();
        //  if(remainder===0){
        //     setExp(0);
        //   }

    }

    //let handlers = useContext(InventoryContext)
    // Accepts images(candy) and calls candyDropped() when a candy is fed
    let [{ isOver }, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => {
            let candy = contextHandler.inv.find((candy) => candy.inventory_id === item.id)
            
            console.log("CANDY------>",candy)
            getExp(candy);
            console.log(item)
            //console.log(handlers.inv.find(item.id));
            contextHandler.updateInventory(item.id);
            
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [contextHandler.inv])

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>

                <div className="Board" ref={drop} >

                    <div className='p-sprite-display'>
                        <img src={bgimage} alt="background" className="bg-sprite" />
                        <Spritesheet
                            image={avatarImage(avatarInfo)}
                            refs={spriteSheetRef}
                            className="p-sprite"
                            stopLastFrame={true}
                            widthFrame={255}
                            heightFrame={350}
                            steps={5}
                            fps={3}
                            loop={false}
                            autoplay={false}
                            isResponsive={false}
                            getInstance={handleGetInstance}
                            onClick={spritesheet => { handleClick(spritesheet) }}
                        />
                    </div>
                </div>
                <div className="pbar-exp">
                
                <div className='pbar-text'>LVL:{level_info.LEVEL} </div>
                <ProgressBar now={(level_info.RATIO)} variant='success' style={{ width: '18rem' }} />
                
                <div className='experience-ratio'>{level_info.NEXT_LEVEL-level_info.REMAINDER}/{level_info.NEXT_LEVEL}</div>
            </div>
                <Card.Body className='pd-bg'>

                    <Card.Text className='pet-desc-text'>
                        {avatarInfo.flavour_text}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='pd-position'>
                        <div className='pet-label'>MOOD: </div>
                        <div>Yippee!!!</div>
                    </ListGroup.Item>
                    <ListGroup.Item className='pd-position'>
                        <div className='pet-label'>WEIGHT: </div>
                        <div>5 Paper Clips</div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default PetDisplay


/// <PetSprite {...{ avatarInfo, setAvatar }} />  