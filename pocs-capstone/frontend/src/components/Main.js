import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
//import useAuth from '../hooks/useAuth.js'
import { useNavigate} from 'react-router-dom';

import { useState, useEffect, createContext } from 'react'

import { useWindowWidth} from '@react-hook/window-size'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import './Main.css'
// Wrap here but not 100% sure
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useContext } from 'react';
import InventoryBox from './Inventory/InventoryBox.js';
import InventoryContext from '../context/InventoryContext';

const AVATAR_URL = '/avatar/'
const Main = ({userInfo}) => {
    const axiosPrivate = useAxiosPrivate();
    const [avatarInfo, setAvatar] = useState({})
    const [inventory, setInventory] = useState([])
    const width = useWindowWidth()
    const nav = useNavigate()

    let [inv, setInv] = useState([]);


    

    const fetchData = () => {
        axiosPrivate.get(AVATAR_URL)
        .then((response )=>{
            setAvatar(response.data[0])
        })
        .catch((error) => {
            console.log(error);
            nav("/login")
        });
        getInventory()
        .then(inv =>{
            setInv(inv)
            console.log("Inventory fetched")
            console.log(inv)

        })

        // setInventory(inventoryService.getInventory("ccho"))
    }

    useEffect(fetchData,[])
    
    // console.log("Loading fetch data avatar", avatarInfo, "data fetched ")
    // console.log("Loading fetch data inventory ", inventory, "data fetched ")

    const isMobile = (width <= 850)

    // Get inventory here maybe?

    const shareData = { avatarInfo, setAvatar, inventory, setInventory }  

    let putInventory = (data) => {
        // let data = {
        //     inventory_id: 5,
        //     candy_base_type: "L",
        //     candy_level: 4,
        //     quantity: 1,
        // }

        let request = axiosPrivate.put(`/inventory/${data.inventory_id}/`, (data))
        return request.then(response => response.data)
    }

    let updateInventory = (id, list) => {
        // Do axios calls
        // let data = {
        //     inventory_id: id,
        //     quantity: 3
        // }
        // let request = axiosPrivate.put(`/inventory/${id}/`, data)
        // return request.then(response => request.data)
        // let candyD = inv.find(
        //     candy => candy.inventory_id === id);
        // console.log("In handler update")
        // console.log(candyD)
        // if (candyD.quantity !== 0) {
        //     candyD.quantity -= 1;
        //     console.log("In quantity")
        // }
        // let candyD = inv.find(
        //     candy => candy.inventory_id === id);
        console.log("In update handler")
        getInventory()
        .then (inv => {
            let candyD = inv.find(
                candy => candy.inventory_id === id);
            console.log(candyD)
            if (candyD.quantity !== 0) {
            candyD.quantity -= 1;
            console.log(candyD)
            putInventory(candyD)

            getInventory()
                .then(inv => {
                handlers?.setInv(inv)
            

            })
            this.forceUpdate();

            }
        })
        // console.log([...inv])
    }   
    let getInventory = () => {
        let request = axiosPrivate.get('/inventory/')
        return request.then(response => response.data)
    }


   

    let handlers = {
        inv,
        setInv,
        getInventory,
        updateInventory,
    }


    if(!isMobile) {
        return(
            
            <DndProvider backend={HTML5Backend}>
                <InventoryContext.Provider value={handlers}>
                <div className="flex-pages">
                    <PetDisplay {...shareData} />
                    <PageDisplay {...shareData} />
                </div>
                </InventoryContext.Provider>
            </DndProvider>      

            
        )
    } else {
        return(
            <div>
                <div className="flex-pages">
                    <PetDisplay {...shareData}/>
                </div>
                <div>
                    <PageDisplay {...shareData}/>
                </div>
            </div>
        )
    }
    
}
export default Main