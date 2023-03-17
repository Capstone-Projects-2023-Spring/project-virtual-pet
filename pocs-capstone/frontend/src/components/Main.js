import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
//import useAuth from '../hooks/useAuth.js'
import { useNavigate} from 'react-router-dom';

import { useState, useEffect } from 'react'

import { useWindowWidth} from '@react-hook/window-size'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import './Main.css'

// Wrap here but not 100% sure
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialInventoryState = [
    {
        id: 1,
        size: "small",
        quantity: 2,
        candy_base_type: "S",
        candy_level: 3,
        
    },
    {   
        id: 2,
        size: "medium",
        quantity: 2,
        candy_base_type: "M",
        candy_level: 2,

    },
    {
        id: 3,
        size: "large:",
        quantity: 2,
        candy_base_type: "L",
        candy_level: 5,

    },
    {
        id: 4,
        size: "cake:",
        quantity: 2,
        candy_base_type: "C",
        candy_level: 5,

    },
]


const AVATAR_URL = '/avatar/'
const Main = ({userInfo}) => {
    const axiosPrivate = useAxiosPrivate();
    const [avatarInfo, setAvatar] = useState({})
    const [inventory, setInventory] = useState(initialInventoryState)
    const width = useWindowWidth()
    const nav = useNavigate()

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

    // Get inventory here maybe?
    
    const shareData = { avatarInfo, setAvatar, inventory, setInventory }  

    if(!isMobile) {
        return(
            
            <DndProvider backend={HTML5Backend}>
                <div className="flex-pages">
                    <PetDisplay {...shareData}/>
                    <PageDisplay {...shareData}/>
                </div>
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