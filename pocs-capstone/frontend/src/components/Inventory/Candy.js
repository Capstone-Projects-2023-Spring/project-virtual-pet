import React from "react";
import { useDrag } from "react-dnd";
import './Inventory.css'

// Renders Candy component based off props passed from InventoryBox's inventory state
// Candy is only rendered if quantity > 0
function Candy ({id, quantity, candy_base_type, candy_level}) {
    let [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        // Optional collect function used for accessing isDragging boolean
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        
    }));

    let candyImage = () => {
        switch (candy_base_type) {
            case 'S':
                // Need to check candy level
                // switch (candy.candy_level) {
                    // case 0:
                        return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
                    // case 1:      
                // }

            case 'M':
                return require('../../images/candy/orangecandy_scaled_16x_pngcrushed.png')
            case 'L':
                return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
            case 'C':
                return require('../../images/candy/orangecandy_scaled_16x_pngcrushed.png')
            // return pink candy
            default:
                return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
        }
    }
    // Render if there are candy
    if (quantity !== 0)
    {
        return (
            <>
                {/* <div
                style={{border: "2px solid black", width: 120, height: 120}}> */}

                
                {/* Need to work on the styling of the candy  */}
                
                <img className="candy-photo" 
                ref={drag}                
                src={candyImage(candy_base_type)}
                alt="Candy"
                style={{ border: isDragging ? "5px solid pink" : "0px solid black", width: 110, height: 110 }}/>
                <p className="Candy-Quantity">
                    {quantity}
                    {candy_base_type }
                    {candy_level}
                </p>
                {/* </div> */}
            </>
            
        )
    }
}

export default Candy;