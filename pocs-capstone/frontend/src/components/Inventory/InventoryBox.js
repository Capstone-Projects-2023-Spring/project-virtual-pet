import React from "react";
import { useState } from "react";
import Candy from "./Candy";
import './Inventory.css'

// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css all to css file
function InventoryBox({inventory}) {

    // let [count, setCount] = useState(0);
    
return (
        <>
            <h1 style={{
                textAlign: "center",
                marginTop: 100,
                marginBottom: -175
            }}>Goody Bag</h1>
            <div style={{
                padding: 10,
                border: "5px solid black",
                height: 200, width: 950,
                margin: 200,  
                backgroundColor: "pink",      
                }} >

                    <div className="Candy"> 
                    {inventory.map((candy, id) => {
                            return < Candy key={id} 
                                    id={candy.id}
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