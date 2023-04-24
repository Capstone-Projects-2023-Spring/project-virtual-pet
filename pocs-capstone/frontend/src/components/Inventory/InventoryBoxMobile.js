import React from "react";
import Candy from "./Candy";
import './Inventory.css'
import { useContext } from "react";
import CandyMobile from "./CandyMobile";
import { Card, Stack, Button, ListGroup } from 'react-bootstrap';
import GlobalContext from "../../context/GlobalContext";

// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css to css file 
function InventoryBox() {

    const contextHandler = useContext(GlobalContext);

    // sort inventory into their types
    // let small = contextHandler?.inventory.filter(i => i.candy_base_type === 'S').sort((a, b) => a.candy_level - b.candy_level)
    // let medium = contextHandler?.inventory.filter(i => i.candy_base_type === 'M').sort((a, b) => a.candy_level - b.candy_level)
    // let large = contextHandler?.inventory.filter(i => i.candy_base_type === 'L').sort((a, b) => a.candy_level - b.candy_level)
    // let cake = contextHandler?.inventory.filter(i => i.candy_base_type === 'C').sort((a, b) => a.candy_level - b.candy_level)
    // let candies = {
    //     "Small": small,
    //     "Medium": medium,
    //     "Large": large,
    //     "Cake": cake
    // }
    
    // Sort inventory by level
    let levelOne = contextHandler?.inventory.filter(i => i.candy_level === 1).sort((a, b) => a.candy_level - b.candy_level)
    let levelTwo = contextHandler?.inventory.filter(i => i.candy_level === 2).sort((a, b) => a.candy_level - b.candy_level)
    let levelThree = contextHandler?.inventory.filter(i => i.candy_level === 3).sort((a, b) => a.candy_level - b.candy_level)
    let levelFour = contextHandler?.inventory.filter(i => i.candy_level === 4).sort((a, b) => a.candy_level - b.candy_level)
    let levelFive = contextHandler?.inventory.filter(i => i.candy_level === 5).sort((a,b) => a.candy_level - b.candy_level)
    
    let candies = {
        "levelOne": levelOne,
        "levelTwo": levelTwo,
        "levelThree": levelThree,
        "levelFour": levelFour,
        "levelFive": levelFive
    }

    return(
        <>
        {Object.keys(candies).map((key, index) => {
                return (
                    <div key={index}>
                        {candies[key].length !== 0 ?
                                <div className="inventory-wrapper-sizes-mobile">
                                    {candies[key].map((candy, id) => {
                                        // https://github.com/react-dnd/react-dnd/issues/748#issuecomment-348710655
                                        // DONT use index from mapping for react-dnd item key!!!
                                        return <CandyMobile key={candy.inventory_id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level} />
                                    })}
                                </div>
                                
                            :
                            <></>
                        }
                    </div>
                )
            })}

        </>

    )
}

    // return (
    //     <>
            {/* <div className="mini-page">
                <Card className='tasklist-position'>
                    <Card.Header>
                        
                    </Card.Header> */}


                    // {contextHandler.inventory.length !== 0 &&

                        // If no items render 'No Inventory' notice
                        /* <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                No Inventory!
                            </ListGroup.Item>
                        {/* </ListGroup> */
                        
                        

                        
                        {/* <div>
                        {Object.keys(candies).map((key, index) => {
                                return (
                                    <div key={index}>
                                        {candies[key].length !== 0 ?
                                                <div className="inventory-wrapper-sizes-mobile">
                                                    {candies[key].map((candy, id) => {
                                                        // https://github.com/react-dnd/react-dnd/issues/748#issuecomment-348710655
                                                        // DONT use index from mapping for react-dnd item key!!!
                                                        return <CandyMobile key={candy.inventory_id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level} />
                                                    })}
                                                </div>
                                                
                                            :
                                            <></>
                                        }
                                    </div>
                                )
                            })}

                        </div> */}

                        // All the candies rendered below - logic included to not show if candy lists are empty 
                        /* <div className="inventory-wrapper-mobile">
                            {Object.keys(candies).map((key, index) => {
                                return (
                                    <div key={index}>
                                        {candies[key].length !== 0 ?
                                            <div className="space-candy-types-mobile">
                                                <div className="text-wrapper">{key}</div>
                                                <div className="inventory-wrapper-sizes-mobile">
                                                    {candies[key].map((candy, id) => {
                                                        // https://github.com/react-dnd/react-dnd/issues/748#issuecomment-348710655
                                                        // DONT use index from mapping for react-dnd item key!!!
                                                        return <CandyMobile key={candy.inventory_id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level} />
                                                    })}
                                                </div>
                                                <hr />
                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>
                                )
                            })}
                        </div> */
                        

                    // }
                {/* </Card> */}
            {/* </div > */}


        {/* </>
    )
} */}



export default InventoryBox;