import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'

import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PetDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {

    const [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => changeImage(item.id),
    
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))   

    const changeImage = (id) => {
        console.log("in change images");

        let newList = [...inventory];
        let candyD = newList.find(
            candy => candy.id === id);

            
        // Xp would vary based on calculation of type and level
        // if (candyD.quantity > 0)
            // switch(candyD.candy_base_type)
            // {
            //     case 'S':
            //         setXp(currxp => currxp + 200);
            //         break;

            //     case 'M': 
            //         setXp(currxp => currxp + 600);
            //         break;

            //     case 'L':
            //         setXp(currxp => currxp + 850);
            //         break;

            //     case 'C':
            //         setXp(currxp => currxp + 1000);
            //         break

            // }
                
        if (candyD.quantity !== 0)
            candyD.quantity -= 1;

        setInventory(newList);

    };

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                
                {/* Feels right maybe wrap PetSprite in bucket? */}
                <div className="Board" ref={drop} >
                    <PetSprite {...{ avatarInfo, setAvatar, inventory, setInventory }} />   
                </div>
                {/* <DndProvider backend={HTML5Backend}>
                    <div
                    ref={drop}
                    // role={'Dustbin'}
                    // syl
                    style={{  border: "5px solid black", height: 500, width: 500, backgroundColor: isOver ? 'red' : 'white' }}
                    >
                        <PetSprite {...{ avatarInfo, setAvatar, inventory, setInventory }} />   

                        {canDrop ? 'Release to drop' : 'Drag a box here'}
                    </div>
                                        
                </DndProvider> */}
                
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