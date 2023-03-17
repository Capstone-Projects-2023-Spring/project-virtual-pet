import PetSprite from './PetSprite.js'
import ProgressB from './ProgressB.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetDisplay.css'
import '../Inventory/Inventory.css'
import { useDrop } from "react-dnd";

const PetDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {
    // Accepts images(candy) and calls candyDropped() when a candy is fed
    let [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        drop: (item) => candyDropped(item.id),
    
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))   
    // Updates inventory and also can calculate and set XP from candy here
    let candyDropped = (id) => {

        let newInventoryList = [...inventory];
        let candyD = newInventoryList.find(
            candy => candy.id === id);

        // let newInfo = avatarInfo;
            
        // Xp would vary based on calculation of type and level
        if (candyD.quantity > 0)
            switch(candyD.candy_base_type)
            {
                case 'S':
                    
                    break;

                // case 'M': 
                //     setXp(currxp => currxp + 600);
                //     break;

                // case 'L':
                //     setXp(currxp => currxp + 850);
                //     break;

                // case 'C':
                //     setXp(currxp => currxp + 1000);
                //     break;

            }
                
        if (candyD.quantity !== 0)
            candyD.quantity -= 1;

        setInventory(newInventoryList);

    };

    return (
        <div className='pet-display'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='pet-name'>{avatarInfo.pet_name}</Card.Header>
                
                {/* Feels right wrap PetSprite in bucket */}
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