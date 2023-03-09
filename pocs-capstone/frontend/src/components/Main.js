import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
import useAuth from '../hooks/useAuth.js'
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
    
    return(
        <div className="flex-pages">
            <PetDisplay/>
            <PageDisplay/>
        </div>
    )
}
export default Main