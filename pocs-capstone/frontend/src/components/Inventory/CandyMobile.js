import React from "react";
import { useContext, useState } from "react";
import { useDrag } from "react-dnd";
import './Inventory.css'
import { Badge, OverlayTrigger, Tooltip, Card } from 'react-bootstrap';
import GlobalContext from "../../context/GlobalContext";
import ClickNHold from "./ClickNHold";
import ConfettiExplosion from 'react-confetti-explosion';

// Renders Candy component based off props passed from InventoryBox's inventory state
function Candy({ id, quantity, candy_base_type, candy_level }) {

    const handlers = useContext(GlobalContext);
    const [isExploding, setIsExploding] = useState(false);

    // let [{ isDragging }, drag] = useDrag(() => ({
    //     type: "image",
    //     item: { id: id },
    //     // Optional collect function used for accessing isDragging boolean
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),

    // }));

    // const isMobile = width <= 850;


    const start =(e) => {
		console.log('START'); 
	} 
    
	const end = (e, enough) => {
		console.log('END');
        // console.log(enough ? 'Click released after enough time': 'Click released too soon');            
	    // setTimeout(() => setIsExploding(false), 1000); 
    } 

    // Feed pet
	const clickNHold = (e) =>{
		console.log('CLICK AND HOLD');
        handlers?.updateInventory(id);
        handlers?.getExp(candy_base_type, candy_level);

        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 1000);  
	} 

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
            {/* No overlay on Mobile just to test*/}
            {/* OverlayTrigger - when a user hovers over the candy item a little Tooltip component w/ the candy's details will pop up */}
            {/* < OverlayTrigger placement='bottom' overlay={
                < Tooltip className="tooltip-item" >
                    <span>Candy Base Type: <strong>{candy_base_type}</strong> </span>
                    <span>Candy Level: <strong>{candy_level}</strong></span>
                </Tooltip >
            } >  */}
            
           
            <div className="grid-wrapper-mobile">
                    {isExploding && <ConfettiExplosion />}
                    {/* Render ClickNHold wrapped candy if quantity is greater than 0 */}
                    {quantity !== 0 ? 
                    
                    <ClickNHold
                        time={2} // Time to keep pressing. Default is 2
                        // onStart={start} // Start callback
                        onClickNHold={clickNHold} //Timeout callback
                        
                                > 
                        <div className="grid-item-mobile" >
                            <Badge pill bg="secondary" className="candy-q-mobile">
                            {quantity}
                            </Badge>
                        
                            <div className="candy-wrapper-mobile">  
                                    <img className="candy-photo-mobile"
                                        src={candyImage(candy_base_type)}
                                        alt="Candy"
                                         />   
                                        
                            </div>

                        </div> 
                    </ClickNHold> 
                    : 
                        <div className="grid-item-mobile" >
                            <Badge pill bg="secondary" className="candy-q-mobile">
                            {quantity}
                            </Badge>
                            <div className="candy-wrapper-mobile">
                                <img className="candy-photo-mobile"
                                    src={candyImage(candy_base_type)}
                                    alt="Candy"
                                
                                    style={{ filter: quantity===0 ?  "grayscale(100%)" : '' }} />
                            </div> 
                        </div>
                    }
            </div>

            {/* </OverlayTrigger > */}

        </>

    )
    // }
}


// {isDragging ? <p>hello</p> : <p>goodbye</p>}



export default Candy;