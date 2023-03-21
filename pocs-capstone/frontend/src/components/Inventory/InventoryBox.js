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

    let axiosPrivate = useAxiosPrivate()
    let baseURL = `/inventory/`
    let handlers = useContext(InventoryContext)

    let postFullInventory = () => {

            console.log("INVENTORY:", handlers?.inv)
            let fullInventoryData = PopulateInv()

            // Loop through and post full inventory to backend
            for (let i = 0; i < fullInventoryData.length; i++) {
                axiosPrivate.post(`${baseURL}`, (fullInventoryData[i])).then(r => {
                    console.log("ADDED CANDY", r.data)
                    handlers?.setInv(handlers?.inv.concat(r.data))
                })
            }

    }

    return (
        <>
            <button onClick={postFullInventory}>I Want Candy!!!</button>

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
                    {handlers?.inv.map((candy, id) => {
                        console.log("CANDY", candy, id)
                        return <Candy key={id} id={candy.inventory_id} quantity={candy.quantity} candy_base_type={candy.candy_base_type} candy_level={candy.candy_level}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default InventoryBox;