import React from "react";
import { useDrag } from "react-dnd";

// Renders Candy component based off props passed from InventoryBox's inventory state
// Candy is only rendered if quantity > 0
function Candy ({id, quantity, candy_base_type, candy_level}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        // Optional collect function used for accessing isDragging boolean
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const candyImage = (candy) => {
        switch (candy_base_type) {
            case 'S':
                // Do we need candy level to decide appearance or is that more background stat multiplier?
                // switch (candy.candy_level) {
                    // case 0:
                        return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
                    // case 1:      
                // }

            case 'M':
                return require('../../images/candy/candy2.jpg')
            case 'L':
                return require('../../images/candy/orangecandy_scaled_16x_pngcrushed.png')
            case 'C':
                return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
            // return pink candy
            default:
                return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
        }
    }

    if (quantity !== 0)
    {
        return (
            <>
                {/* Need to work on the styling of the candy  */}
                <img className="candy-photo" 
                ref={drag}                
                src={candyImage(candy_base_type)}
                alt="Candy"
                style={{ border: isDragging ? "5px solid pink" : "0px", width: 150, height: 150 }}/>
                <h1>{quantity}</h1>
                <p>{candy_base_type }
                {candy_level}
                </p>
            </>
            
        )
    }
}

export default Candy;