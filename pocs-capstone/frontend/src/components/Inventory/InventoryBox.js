import React from "react";
import { useEffect, useReducer} from "react";
import Candy from "./Candy";
import './Inventory.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useContext } from "react";
import InventoryContext from "../../context/InventoryContext";
import PopulateInv from "./PopulateInv";

// Displays the inventory box and renders Candy components inside box based off inventory
// Need to add css to css file 
function InventoryBox() {

    let axiosPrivate = useAxiosPrivate()
    let baseURL = `/inventory/`
    let handlers = useContext(InventoryContext)

    const fetchData = () => {
        // Get and set inventory
        handlers?.getInventory()
        .then(inv =>{
            handlers.setInv(inv)
            // console.log("Inventory fetched in Inventory Box")
            // console.log(inv)

        })
    }
    
    // Uncomment button to use function to help create candies
    let postFullInventory = () => {

        let fullInventoryData = PopulateInv()

        // Loop through and post full inventory to backend
        for (let i = 0; i < 21; i++) {
            // console.log(fullInventoryData[i])
            let request = axiosPrivate.post(`${baseURL}`, (fullInventoryData[i]))
            setTimeout(() => {
            }, 1000);



        }
       
        // let request = axiosPrivate.put(`${baseURL}${data.inventory_id}/`, (data))
        // let request = axiosPrivate.post(`${baseURL}`, (data))

        // return request.then(response => response.data)
        // return request.then(response => response.data)

    }

    useEffect(fetchData, [])
    
    return (
            <>
                <button onClick={postFullInventory}>Populate Candy</button>

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
                {/* <button onClick={refreshInventory}>Click Me</button> */}

            </>
    )
}

export default InventoryBox;