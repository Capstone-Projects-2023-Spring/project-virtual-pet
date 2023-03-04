import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
import { useState, useEffect } from 'react'

import './Main.css'
import inventoryService from '../services/inventory'
import avatarService from '../services/avatarInfo'

const Main = ({userInfo}) => {
    const [avatarInfo, setAvatarInfo] = useState({})
    const [inventory, setInventory] = useState([])

    const fetchData = () => {
        // inventoryService  
        //     .getInventory()
        //     .then(r => {setInventory(r)})
        // avatarService
        //     .getAvatarInfo()
        //     .then(r => {setAvatarInfo(r)})
        setAvatarInfo(avatarService.getAvatarInfo("ccho"))
        setInventory(inventoryService.getInventory("ccho"))
    }

    useEffect(fetchData, [])
    console.log("Loading fetch data avatar", avatarInfo, "data fetched ")
    console.log("Loading fetch data inventory ", inventory, "data fetched ")
    
    const shareData = { avatarInfo, setAvatarInfo, inventory, setInventory }
    return(
        <div className="flex-pages">
            <PetDisplay {...shareData}/>
            <PageDisplay {...shareData}/>
        </div>
    )
}
export default Main