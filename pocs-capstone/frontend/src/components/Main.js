import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
import { useState } from 'react'

import './Main.css'
import inventoryService from '../services/inventory'
import avatarService from '../services/avatarInfo'

const Main = ({userInfo}) => {
    const [avatarInfo, setAvatarInfo] = useState({})
    const [inventory, setInventory] = useState([])

    const fetchData = () => {
        inventoryService  
            .getInventory()
            .then(r => {setInventory(r)})
        avatarService
            .getAvatarInfo()
            .then(r => {setAvatarInfo(r)})
    }
    // useHooks(fetchData)
    return(
        <div className="flex-pages">
            <PetDisplay/>
            <PageDisplay/>
        </div>
    )
}

export default Main