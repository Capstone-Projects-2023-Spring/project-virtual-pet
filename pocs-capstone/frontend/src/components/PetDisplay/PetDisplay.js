import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'

import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PetDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'BOX',
        // Props to collect
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        })
      }))

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                
                <DndProvider backend={HTML5Backend}>
                    
                    <PetSprite {...{ avatarInfo, setAvatar, inventory, setInventory }} />   
                    {/* {canDrop ? 'Release to drop' : 'Drag a box here'} */}
                    
                </DndProvider>
                
                {/* <PetSprite {...{ avatarInfo, setAvatar, inventory, setInventory }} /> */}
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