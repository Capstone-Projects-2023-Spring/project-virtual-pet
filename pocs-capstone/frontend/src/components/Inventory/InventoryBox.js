import React from "react";
import { useState, useEffect} from "react";
import Candy from "./Candy";
import './Inventory.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useContext } from "react";
import InventoryContext from "../../context/InventoryContext";

// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css all to css file
function InventoryBox() {

    // const [inventory, setInventory] = useContext(InventoryContext);
    // const {inventory , setInventory}= useContext(InventoryContext);


    let axiosPrivate = useAxiosPrivate()
    let baseURL = `/inventory/`
    let handlers = useContext(InventoryContext)
    // console.log("Handler inv")
    // console.log(handlers.inv)
    // let {inv} = useContext(InventoryContext)

    // Get the inventory
    // let getInventory = () => {
    //     let request = axiosPrivate.get(baseURL)
    //     return request.then(response => response.data)
    // }

    // let fetchData = () => {
    //     if(inventory !== null) {
    //         getInventory()
    //         .then(r => {
    //             setInventory(r)
    //             console.log("In fetch get")
    //             console.log(r)
    //         })
    //     }
        
    // }


    const fetchData = () => {
        
        handlers?.getInventory()
        .then(inv =>{
            handlers.setInv(inv)
            console.log("Inventory fetched in Inventory Box")
            console.log(inv)

        })

        // setInventory(inventoryService.getInventory("ccho"))
    }

    let putInventory = () => {
        let data = {
            inventory_id: 10,
            candy_base_type: "C",
            candy_level: 4,
            quantity: 4,
        }

        // let request = axiosPrivate.post(`${baseURL}${data.inventory_id}/`, (data))
        let request = axiosPrivate.post(`${baseURL}`, (data))

        return request.then(response => response.data)
    }

    useEffect(fetchData, [])

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
                height: 600, width: 910,
                margin: 200,  
                backgroundColor: "pink",      
                }} >

                    <div className="row"> 
                    {handlers?.inv.map((candy, id) => {
                            return < Candy key={id} 
                                    id={candy.inventory_id}
                                    quantity={candy.quantity}  
                                    candy_base_type={candy.candy_base_type} 
                                    candy_level={candy.candy_level} />            
                    })} 
                
                    </div>
            </div>
            <button onClick={putInventory}>Click Me</button>
        </>
    )
}

export default InventoryBox;