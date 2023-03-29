import React from "react";
import { useDrag } from "react-dnd";
import './Inventory.css'
import { Badge, OverlayTrigger, Tooltip, Card } from 'react-bootstrap';
// Renders Candy component based off props passed from InventoryBox's inventory state
function Candy({ id, quantity, candy_base_type, candy_level }) {

    let [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        // Optional collect function used for accessing isDragging boolean
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }));

    // Determine candy image to render
    let candyImage = () => {
        switch (candy_base_type) {
            case 'S':
                switch (candy_level) {
                    case 1:
                        return require('../../images/candies/candies_resized/small_1_scaled_4x_pngcrushed.png')
                    case 2:
                        return require('../../images/candies/candies_resized/small_2_scaled_4x_pngcrushed.png')
                    case 3:
                        return require('../../images/candies/candies_resized/small_3_scaled_4x_pngcrushed.png')
                    case 4:
                        return require('../../images/candies/candies_resized/small_4_scaled_4x_pngcrushed.png')
                    case 5:
                        return require('../../images/candies/candies_resized/small_5_scaled_4x_pngcrushed.png')
                    // Default to level one
                    default:
                        return require(`../../images/candies/candies_resized/small_1_scaled_4x_pngcrushed.png`)
                }
            case 'M':
                switch (candy_level) {
                    case 1:
                        return require('../../images/candies/candies_resized/med_1_scaled_5x_pngcrushed.png')
                    case 2:
                        return require('../../images/candies/candies_resized/med_2_scaled_5x_pngcrushed.png')
                    case 3:
                        return require('../../images/candies/candies_resized/med_3_scaled_5x_pngcrushed.png')
                    case 4:
                        return require('../../images/candies/candies_resized/med_4_scaled_5x_pngcrushed.png')
                    case 5:
                        return require('../../images/candies/candies_resized/med_5_scaled_5x_pngcrushed.png')
                    // Default to level one
                    default:
                        return require(`../../images/candies/candies_resized/med_1_scaled_5x_pngcrushed.png`)
                }
            case 'L':
                switch (candy_level) {
                    case 1:
                        return require(`../../images/candies/candies_resized/large_1_scaled_4x_pngcrushed.png`)
                    case 2:
                        return require(`../../images/candies/candies_resized/large_2_scaled_4x_pngcrushed.png`)
                    case 3:
                        return require(`../../images/candies/candies_resized/large_3_scaled_4x_pngcrushed.png`)
                    case 4:
                        return require(`../../images/candies/candies_resized/large_4_scaled_4x_pngcrushed.png`)
                    case 5:
                        return require(`../../images/candies/candies_resized/large_5_scaled_4x_pngcrushed.png`)
                    // Default to level one
                    default:
                        return require(`../../images/candies/candies_resized/large_1_scaled_4x_pngcrushed.png`)
                }
            case 'C':
                switch (candy_level) {
                    case 1:
                        return require(`../../images/candies/candies_resized/cake_1_scaled_5x_pngcrushed.png`)
                    case 2:
                        return require(`../../images/candies/candies_resized/cake_2_scaled_5x_pngcrushed.png`)
                    case 3:
                        return require(`../../images/candies/candies_resized/cake_3_scaled_5x_pngcrushed.png`)
                    case 4:
                        return require(`../../images/candies/candies_resized/cake_4_scaled_5x_pngcrushed.png`)
                    case 5:
                        return require(`../../images/candies/candies_resized/cake_5_scaled_5x_pngcrushed.png`)
                    // Default to level one
                    default:
                        return require(`../../images/candies/candies_resized/cake_1_scaled_5x_pngcrushed.png`)
                }
            // Default Candy
            default:
                return require('../../images/candies/candies_resized/cake_1_scaled_5x_pngcrushed.png')
        }
    }

    return (
        <>

            {/* OverlayTrigger - when a user hovers over the candy item a little Tooltip component w/ the candy's details will pop up */}
            < OverlayTrigger placement='bottom' overlay={
                < Tooltip className="tooltip-item" >
                    <span>Candy Base Type: <strong>{candy_base_type}</strong> </span>
                    <span>Candy Level: <strong>{candy_level}</strong></span>
                </Tooltip >
            }
            >
                <div className="grid-wrapper">
                    <Badge pill bg="secondary" className="candy-q">
                        {quantity}
                    </Badge>
                    <div className="grid-item" >
                        <div className="candy-wrapper" ref={drag}>
                            <img className="candy-photo"
                                src={candyImage(candy_base_type)}
                                alt="Candy"
                                style={{ filter: quantity===0 ?  "grayscale(100%)" : '' }} />
                        </div>

                    </div>
                </div>

            </OverlayTrigger >

        </>

    )
    // }
}


// {isDragging ? <p>hello</p> : <p>goodbye</p>}



export default Candy;