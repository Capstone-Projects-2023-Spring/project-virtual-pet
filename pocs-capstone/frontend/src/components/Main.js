import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
//import useAuth from '../hooks/useAuth.js'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import './Main.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import InventoryContext from '../context/InventoryContext';
import PopulateInv from "./Inventory/PopulateInv";
import SpriteSheetContext from '../context/SpriteSheetContext.js';

const AVATAR_URL = '/avatar/'
const Main = ({ userInfo }) => {
    const axiosPrivate = useAxiosPrivate();
    const [avatarInfo, setAvatar] = useState({})
    const width = useWindowWidth()
    const nav = useNavigate()

    const [ready,setReady]=useState(false);

    let [inv, setInv] = useState([]);

    let spriteSheetRef = useRef(null);
    useEffect(() => {
        axiosPrivate.get(AVATAR_URL)
            .then((response) => {
                setAvatar(response.data[0])
                if (!response.data[0])
                    nav("/pet_selection")
                else
                    setReady(true)
            })
            .catch((error) => {
                console.log(error);
                nav("/pet_selection")
            });
    }, [])

    // useEffect, GET call to retrieve inventory item and set the state of inv
    useEffect(() => {
        axiosPrivate.get('/inventory/')
            .then((response) => {
                setInv(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const isMobile = (width <= 850)

    // Inventory Handlers
    // Perform a put to the backend to update inventory
    const putInventory = (item) => {
        let request = axiosPrivate.put(`/inventory/${item.inventory_id}/`, item)
        return request.then(response => response.data)
    }
    // Performs update on candy quantity when candy is fed(drag and dropped)
    const updateInventory = (id) => {
        // console.log("ID OF CANDY", id)

        const candyD = inv.find(candy => candy.inventory_id === id)
        if (candyD.quantity !== 0) {
            // console.log("CANDY", candyD)
            const updateCandy = { ...candyD, quantity: (candyD.quantity !== 0 ? candyD.quantity - 1 : 0) }
            // console.log("ID", updateCandy.inventory_id)
            putInventory(updateCandy).then(r => {
                setInv(inv.map(it => it.inventory_id === id ? updateCandy : it))
            })
        }
    }

    // Performs a get request for the users inventory
    const getInventory = () => {
        let request = axiosPrivate.get('/inventory/')
        return request.then(response => response.data)
    }

    // Performs a POST request to add items
    const createInventoryItem = (candy) => {
        const request = axiosPrivate.post('/inventory/', candy)
        return request.then(response => response.data)
    }

    // Performs a DELETE request to remove items
    const deleteInventoryItem = (candyID) => {
        const request = axiosPrivate.delete(`/inventory/${candyID}/`)
        return request.then(response => response.data)
    }

    const animateSpriteSheet = () => {
       // if (spriteSheetRef.current) {
          spriteSheetRef.current.goToAndPlay(1);
          spriteSheetRef.current.pause();
      //  }
      }

    // Create a bunch of items in the backend and change the state of inv
    const postFullInventory = () => {
        if (inv.length === 0) {
            let fullInventoryData = PopulateInv()
            let populatedItems = []
            fullInventoryData.forEach(importItem => {
                createInventoryItem(importItem).then( r=> {
                    populatedItems.push(r)
                    setInv([...inv, ...populatedItems])
                })
            })
        }
    }

    // Delete all the items in the backend and set the state of inv to []
    const deleteAll = () => {
        if (inv.length) {
            inv.forEach(i => {
                deleteInventoryItem(i.inventory_id)
            })
        }

        setInv([])
    }

    const handlers = {
        inv,
        createInventoryItem,
        setInv,
        updateInventory,
        deleteInventoryItem,
        postFullInventory,
        deleteAll
    }

    const animate = {
        animateSpriteSheet,
    }

    const shareData = { avatarInfo, setAvatar }

    if(!ready){
        return(<div>LOADING...</div>)
    }

    // Need to wrap mobile view in Dnd and Inventory Context - Want to talk to Harrsion prior
    else if (!isMobile) {
        return (

            <DndProvider backend={HTML5Backend}>
                <InventoryContext.Provider value={handlers}>
                <SpriteSheetContext.Provider value = {animate}>
                    <div className="flex-pages">
                        <PetDisplay {...shareData} />
                        <PageDisplay {...shareData} />
                    </div>
                    </SpriteSheetContext.Provider>
                </InventoryContext.Provider>
            </DndProvider>


        )
    } else {
        return (
            <DndProvider backend={HTML5Backend}>
                <InventoryContext.Provider value={handlers}>
                <SpriteSheetContext.Provider value = {animate}>
                    <div>
                        <div className="flex-pages">
                            <PetDisplay {...shareData} />
                        </div>
                        <div>
                            <PageDisplay {...shareData}/>
                        </div>
                    </div>
                    </SpriteSheetContext.Provider>
                </InventoryContext.Provider>
            </DndProvider>
        )
    }

}
export default Main