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


const initialState = [
    {
        id: 1,
        size: "small",
        quantity: 3,
        candy_base_type: "S",
        candy_level: 3,
        
    },
    {   
        id: 2,
        size: "medium",
        quantity: 5,
        candy_base_type: "M",
        candy_level: 2,

    },
    {
        id: 3,
        size: "large:",
        quantity: 6,
        candy_base_type: "L",
        candy_level: 5,

    },
    {
        id: 4,
        size: "cake:",
        quantity: 6,
        candy_base_type: "C",
        candy_level: 5,

    },
]
function InventoryPage () {

    const [candyList, setCandyList] = useState(initialState);

    return(
        <>
            <DndProvider backend={HTML5Backend} >
                <div>
                    < InventoryBox candyList={candyList} />
                </div>
            </DndProvider >
        </>
    )
}

export default InventoryPage;