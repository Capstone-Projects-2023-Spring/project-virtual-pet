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
    // const [ inv, setInv] = useContext(InventoryContext);
    // setInventory(inv);

    let handlers = useContext(InventoryContext)

    // Accepts images(candy) and calls candyDropped() when a candy is fed
    let [{isOver}, drop] = useDrop(() => ({
        // What objects to accept
        accept: "image",
        // drop: (item) => CandyDropped(item.id),
        drop: (item) => handlers?.updateInventory(item.id, handlers?.inv),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })) 
    
    useEffect(() => {
        console.log("Use effect in PetDisply    ")
        console.log(handlers.inv);
    })
    // Updates inventory and also can calculate and set XP from candy here
    // console.log("Before Candy")
    // console.log(inv)
    let CandyDropped = (id) => {

        console.log(id);
        
        

        // let newInventoryList = [...inv];
        // console.log("In Candy Dropped")
        // let candyD = newInventoryList.find(
        //         candy => candy.inventory_id === id);

        // if (candyD.quantity !== 0) {
        //     candyD.quantity -= 1;
        //     console.log("In quantity")
        // }

        // console.log(inv)
        // let newInventoryList = [inv];
        // console.log("New Inv")
        // console.log(newInventoryList)
        // let candyD = newInventoryList.find(
        //     candy => candy.inventory_id === id);
        // console.log("In Candy dropped")
        // console.log(candyD)

        // let newInfo = avatarInfo;
            
        // Xp would vary based on calculation of type and level
        // if (candyD.quantity > 0)
        //     switch(candyD.candy_base_type)
        //     {
        //         case 'S':
                    
        //             break;

        //         // case 'M': 
        //         //     setXp(currxp => currxp + 600);
        //         //     break;

        //         // case 'L':
        //         //     setXp(currxp => currxp + 850);
        //         //     break;

        //         // case 'C':
        //         //     setXp(currxp => currxp + 1000);
        //         //     break;

        //     }
                
        
        
        // setInv(newInventoryList)

        // setInventory(newInventoryList);
        // useContext(inventory);

    };

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