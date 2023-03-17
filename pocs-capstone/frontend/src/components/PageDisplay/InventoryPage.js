import React from "react";
// import Candy from "./candy";
import { useState } from "react";
import { useDrop } from "react-dnd";
// import Pet from "./pet";
// import cat_happy from "../images/cat_happy.jpg";
// import cat_sad from "../images/cat_sad.jpg";
import { DndProvider } from "react-dnd";
import { HTML5Backend} from 'react-dnd-html5-backend';
import InventoryBox from "../Inventory/InventoryBox";


function InventoryPage ( {inventory}) {

    console.log(`In InventoryPage`)
    console.log(inventory);

    // const [candyList, setCandyList] = useState(inventory);

    // const [{isOver}, drop] = useDrop(() => ({
    //     // What objects to accept
    //     accept: "image",
    //     drop: (item) => changeImage(item.id),
    
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // }))  

    const changeImage = (id) => {
        console.log("in change images");
        // setPetsrc(cat_happy);

        // let newList = [...candyList];
        // let candyD = newList.find(
        //     candy => candy.id === id);

            
        // // Xp would vary based on calculation of type and level
        // if (candyD.quantity > 0)
        //     switch(candyD.candy_base_type)
        //     {
        //         case 'S':
        //             setXp(currxp => currxp + 200);
        //             break;

        //         case 'M': 
        //             setXp(currxp => currxp + 600);
        //             break;

        //         case 'L':
        //             setXp(currxp => currxp + 850);
        //             break;

        //         case 'C':
        //             setXp(currxp => currxp + 1000);
        //             break

        //     }
                
        // if (candyD.quantity !== 0)
        //     candyD.quantity -= 1;

        // setCandyList(newList);

    };


    return(
        <>
            {/* < InventoryBox candyList={candyList} /> */}
            < InventoryBox inventory={inventory} />

        </>
    )
}

export default InventoryPage;