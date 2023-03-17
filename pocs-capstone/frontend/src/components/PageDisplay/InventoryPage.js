import React from "react";
import InventoryBox from "../Inventory/InventoryBox";

// Render InventoryBox component passing inventory as props
function InventoryPage ( {inventory}) {

    // console.log(`In InventoryPage`)
    // console.log(inventory);

    return(
        <>
            < InventoryBox inventory={inventory} />

        </>
    )
}

export default InventoryPage;