import React from "react";
import { useState } from "react";
import Candy from "./Candy";
import './Inventory.css'

// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css all to css file
function InventoryBox({inventory}) {

    // let [count, setCount] = useState(0);
    console.log("In inventoryBox")
    console.log(inventory)
    

return (
        <>
            <h1>Goodie Bag</h1>
            <div style={{
                padding: 15,
                border: "5px solid black",
                height: 200, width: 1040,
                margin: 80,
                
            }} >

                <div className="Candy"> 
                {inventory.map((candy, id) => {
                    <li>key={id}</li>
                        return < Candy id={candy.id} 
                                quantity={candy.quantity}  
                                candy_base_type={candy.candy_base_type} 
                                candy_level={candy.candy_level} />            
                })} 
                
                </div>
            </div>
        </>
    )
}

export default InventoryBox;