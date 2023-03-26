import React from "react";
import { useDrag } from "react-dnd";
import './Inventory.css'
import { Badge, OverlayTrigger, Tooltip, Card } from 'react-bootstrap';
// Renders Candy component based off props passed from InventoryBox's inventory state
// Candy is only rendered if quantity > 0
function Candy({ id, quantity, candy_base_type, candy_level }) {

    let [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
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
                // return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
                // case 1:      
                // }
                return require('../../images/candy/loligreen.png')

            case 'M':
                return require('../../images/candy/orangecandy_scaled_16x_pngcrushed.png')
            case 'L':
                return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
            case 'C':
                return require('../../images/candy/loliblue.png')
            // return pink candy
            default:
                return require('../../images/candy/pinkcandy_scaled_16x_pngcrushed.png')
        }
    }

    return (
        <div >

            {/* OverlayTrigger - when a user hovers over the candy item a little Tooltip component w/ the candy's details will pop up */}
            < OverlayTrigger placement='bottom' overlay={
                < Tooltip className="tooltip-item" >
                    <span>Candy Base type: <strong>{candy_base_type}</strong> </span>
                    <span>Candy Level: <strong>{candy_level}</strong></span>
                </Tooltip >
            }
            >
                {/* {isDragging ? <p>hello</p> : <p>goodbye</p>} */}
                <div className="grid-item" ref={drag}>

                    {/*  */}
                    <Badge pill bg="secondary" className="candy-q">
                        {quantity}
                    </Badge>

                    <img className="candy-photo"
                        src={candyImage(candy_base_type)}
                        alt="Candy" />
                </div>
            </OverlayTrigger >

        </div >

    )
    // }
}

export default Candy;