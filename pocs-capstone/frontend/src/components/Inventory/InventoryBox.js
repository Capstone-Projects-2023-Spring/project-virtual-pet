import React from "react";
import { useEffect, useState } from "react";
import Candy from "./Candy";
import './Inventory.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useContext } from "react";
import InventoryContext from "../../context/InventoryContext";
import PopulateInv from "./PopulateInv";
import { Card, Stack, Button } from 'react-bootstrap';


// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css to css file 
function InventoryBox() {

    let handlers = useContext(InventoryContext)

    return (
        <>
            <div className="mini-page">
                <Card className='tasklist-position'>
                    <Card.Header>
                        <Stack direction="horizontal" gap={3}>
                            <div className='to-do-header'>
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
                    <div className="inventory-wrapper">
                        {
                            handlers?.inv.map((candy, id) => {
                                return <Candy key={id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level} />
                            })
                        }
                    </div>
                </Card>
            </div>


        </>
    )
}



export default InventoryBox;