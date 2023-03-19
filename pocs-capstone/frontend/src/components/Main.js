import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
//import useAuth from '../hooks/useAuth.js'
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useWindowWidth} from '@react-hook/window-size'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import './Main.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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

        // setInventory(inventoryService.getInventory("ccho"))
    }

    useEffect(fetchData,[])
    
    // console.log("Loading fetch data avatar", avatarInfo, "data fetched ")
    // console.log("Loading fetch data inventory ", inventory, "data fetched ")

    const isMobile = (width <= 850)

    const shareData = { avatarInfo, setAvatar, inventory, setInventory }  

    // Inventory Handlers
    // Perform a put to the backend to update inventory
    let putInventory = (data) => {

        let request = axiosPrivate.put(`/inventory/${data.inventory_id}/`, (data))
        return request.then(response => response.data)
    }
    // Performs update on candy quantity when candy is fed(drag and dropped)
    let updateInventory = (id, list) => {
        // Unable to see inventory inside of this function to perform get then put to update candy quantity and set inventory
        // console.log("In update handler")
        getInventory()
        .then (inv => {
            let candyD = inv.find(
                candy => candy.inventory_id === id);
            // console.log(candyD)
            if (candyD.quantity !== 0) {
            candyD.quantity -= 1;
            // console.log(candyD)
            putInventory(candyD)
            setInv(inv)
            
        }})
    }   
    // Performs a get request for the users inventory
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

    // Need to wrap mobile view in Dnd and Inventory Context - Want to talk to Harrsion prior
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
            <DndProvider backend={HTML5Backend}>
                <InventoryContext.Provider value={handlers}>
                    <div>
                        <div className="flex-pages">
                            <PetDisplay {...shareData}/>
                        </div>
                        <div>
                            <PageDisplay {...shareData}/>
                        </div>
                    </div>
                </InventoryContext.Provider>
            </DndProvider>    
        )
    }
    
}
export default Main