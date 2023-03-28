import React from "react";
import { useEffect, useState } from "react";
import Candy from "./Candy";
import './Inventory.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useContext } from "react";
import InventoryContext from "../../context/InventoryContext";
import PopulateInv from "./PopulateInv";

// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css to css file 
function InventoryBox() {

    let handlers = useContext(InventoryContext)

    return (
        <>
            <button onClick={handlers?.postFullInventory}>I Want Candy!!!</button>
            <button onClick={handlers?.deleteAll}>DELETE ALL</button>

            {/* <h1 style={{
                    textAlign: "center",
                    marginTop: 100,
                    margin: 50,
                    marginBottom: -175
                }}>Goody Bag</h1> */}
            <div style={{
                padding: 10,
                border: "5px solid black",
                height: 600, width: 910,
                margin: 100,
                backgroundColor: "pink",
                
            }} >
                <div className="row">
                    {
                        handlers?.inv.map((candy, id) => {
                            return <Candy key={candy.inventory_id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default InventoryBox;