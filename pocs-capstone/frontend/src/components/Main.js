import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
import useAuth from '../hooks/useAuth.js'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useState } from 'react'

import './Main.css'
import inventoryService from '../services/inventory'
import avatarService from '../services/avatarInfo'

const Main = ({userInfo}) => {
    const [avatarInfo, setAvatar] = useState({})
    const [inventory, setInventory] = useState([])

    const fetchData = () => {
        // inventoryService  
        //     .getInventory()
        //     .then(r => {setInventory(r)})
        // avatarService
        //     .getAvatarInfo()
        //     .then(r => {setAvatarInfo(r)})
        setAvatar(avatarService.getAvatar("ccho"))
        // setInventory(inventoryService.getInventory("ccho"))
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