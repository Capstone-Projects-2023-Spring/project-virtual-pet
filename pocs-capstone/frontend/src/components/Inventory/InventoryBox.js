import React from "react";
import { useEffect, useState } from "react";
import Candy from "./Candy";
import './Inventory.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useContext } from "react";
import InventoryContext from "../../context/InventoryContext";
import PopulateInv from "./PopulateInv";
import { Card, Stack, Button, ListGroup, Badge } from 'react-bootstrap';


// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css to css file 
function InventoryBox() {

    let handlers = useContext(InventoryContext)

    // sort inventory into their types
    const small = handlers?.inv.filter(i => i.candy_base_type === 'S').sort((a, b) => a.candy_level - b.candy_level)
    const medium = handlers?.inv.filter(i => i.candy_base_type === 'M').sort((a, b) => a.candy_level - b.candy_level)
    const large = handlers?.inv.filter(i => i.candy_base_type === 'L').sort((a, b) => a.candy_level - b.candy_level)
    const cake = handlers?.inv.filter(i => i.candy_base_type === 'C').sort((a, b) => a.candy_level - b.candy_level)

    const candies = {
        "Small": small,
        "Medium": medium,
        "Large": large,
        "Cake": cake
    }


    return (
        <>
            <div className="mini-page">
                <Card className='tasklist-position'>
                    <Card.Header>
                        <Stack direction="horizontal" gap={3}>
                            <div className='inventory-header'>
                                ITEMS
                            </div>
                            <div className="ms-auto">
                                <Button variant="primary" onClick={handlers?.postFullInventory}>+ Populate Inv.</Button>
                            </div>
                            <div>
                                <Button variant="danger" onClick={handlers?.deleteAll}>- Delete All</Button>
                            </div>
                        </Stack>
                    </Card.Header>


                    {handlers.inv.length === 0 ?

                        // If no items render 'No Inventory' notice
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                No Inventory!
                            </ListGroup.Item>
                        </ListGroup>

                        :

                        // All the candies rendered below - logic included to not show if candy lists are empty 
                        <div className="inventory-wrapper">
                            {Object.keys(candies).map((key, index) => {
                                return (
                                    <div key={index}>
                                        {candies[key].length !== 0 ?
                                            <div className="space-candy-types">
                                                <div className="text-wrapper">{key}</div>
                                                <div className="inventory-wrapper-sizes">
                                                    {candies[key].map((candy, id) => {
                                                        return <Candy key={id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level} />
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
                        </div>

                    }
                </Card>
            </div >


        </>
    )
}



export default InventoryBox;