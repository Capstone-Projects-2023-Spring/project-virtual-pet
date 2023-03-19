import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'
import { useDrop } from "react-dnd";
import InventoryContext from '../../context/InventoryContext.js';
import { useContext, useEffect } from 'react';

const PetDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {

    let handlers = useContext(InventoryContext)

    // Accepts images(candy) and calls candyDropped() when a candy is fed
    let [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => handlers?.updateInventory(item.id, handlers?.inv),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })) 
    
    useEffect(() => {
       
    })

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                
                <div className="Board" ref={drop} >
                    <PetSprite {...{ avatarInfo, setAvatar, inventory, setInventory }} />   
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