import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'
import orangesheet from '../../../src/images/orange_happy_sheet.png'
import graysheet from '../../../src/images/gray_happy_sheet.png' 
import { useDrop } from "react-dnd";
import InventoryContext from '../../context/InventoryContext.js';
import { useContext, useEffect, useRef, useState } from 'react';
import Spritesheet from 'react-responsive-spritesheet'
import bgimage from '../../images/bg.gif'
import SpriteSheetContext from '../../context/SpriteSheetContext.js';


const PetDisplay = ({ avatarInfo, setAvatar }) => {

const [spritesheetInstance, setSpritesheetInstance] = useState(null);

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

    let handlers = useContext(InventoryContext)
    // Accepts images(candy) and calls candyDropped() when a candy is fed
    let [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => {
            handlers.updateInventory(item.id);
            animateSpriteSheet();
          },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [handlers.inv]) 

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                
                <div className="Board" ref={drop} >
                   
                   <div className='p-sprite-display'>
                    <img src={bgimage} alt="background" className="bg-sprite" />
                    <Spritesheet
                        image={avatarImage(avatarInfo)}
                        refs = {spriteSheetRef}
                        className="p-sprite"
                        stopLastFrame={true}
                        widthFrame={255}
                        heightFrame={350}
                        steps={5}
                        fps={3}
                        loop={false}
                        autoplay={false}
                        isResponsive={false}
                        getInstance = {handleGetInstance}
                        onClick={spritesheet => {handleClick(spritesheet)}}
                    />
                    </div>
                </div>
                <ProgressB avatarInfo={avatarInfo} />
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