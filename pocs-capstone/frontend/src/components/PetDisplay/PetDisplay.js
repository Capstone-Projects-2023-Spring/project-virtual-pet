import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'
import { useDrop } from "react-dnd";
import InventoryContext from '../../context/InventoryContext.js';
import { useContext, useEffect } from 'react';
import SpriteSheetContext from '../../context/SpriteSheetContext.js';

const PetDisplay = ({ avatarInfo, setAvatar }) => {

    let handlers = useContext(InventoryContext)
    let animate = useContext(SpriteSheetContext);
    //function handleDrop(event) {
   //     event.preventDefault();
   //     animateSpriteSheet();
   //   }
    // Accepts images(candy) and calls candyDropped() when a candy is fed
    let [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => {handlers.updateInventory(item.id), animate.animateSpriteSheet()},
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [handlers.inv]) 


    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                
                <div className="Board" ref={drop} >
                    <PetSprite {...{ avatarInfo, setAvatar }} />   
                </div>
                <ProgressB avatarInfo={avatarInfo} />
                    <Card.Body className='pd-bg'>

                        <Card.Text className='pet-desc-text'>
                            This cat loves programming and tuna, and hates dogs. 
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