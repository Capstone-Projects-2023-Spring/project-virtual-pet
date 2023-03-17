import React from "react";
import { useState } from "react";
import Candy from "./Candy";
import './Inventory.css'

function InventoryBox({inventory}) {

    // let [count, setCount] = useState(0);
    // const wrapper = {
    //     padding: 20,
    //     border: "5px solid black",
    //     height: 200, width: 1040,
    // };


    // console.log(`Inventory: ${candyList}`);
    console.log("In inventoryBox")
    console.log(inventory)
    

return (
        <>
            <h1>Goodie Bag</h1>
            <div style={{
                padding: 20,
                border: "5px solid black",
                height: 200, width: 1040,
            }} >

                <div className="Candy"> 
                {inventory.map((candy, id) => {
                    <li>key={id}</li>
                            return < Candy id={candy.id} quantity={candy.quantity}  
                                    candy_base_type={candy.candy_base_type} 
                                    candy_level={candy.candy_level}
                                    />            
                })} 
                
                </div>
            </div>
        </>
    )

}

export default InventoryBox;