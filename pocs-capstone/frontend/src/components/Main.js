import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
import useAuth from '../hooks/useAuth.js'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import './Main.css'


const AVATAR_URL = '/avatar/'
const Main = ({userInfo}) => {
    const axiosPrivate = useAxiosPrivate();
    const [avatarInfo, setAvatar] = useState({})
    const [inventory, setInventory] = useState([])

    const fetchData = () => {
        axiosPrivate.get(AVATAR_URL)
        .then((response )=>{
            setAvatar(response.data[0])
        })
        .catch((error) => {
            console.log(error);
        });

        // setInventory(inventoryService.getInventory("ccho"))
    }

    
    useEffect(fetchData, [])
    
    // console.log("Loading fetch data avatar", avatarInfo, "data fetched ")
    // console.log("Loading fetch data inventory ", inventory, "data fetched ")
    
    const shareData = { avatarInfo, setAvatar, inventory, setInventory }
    return(
        <div className="flex-pages">
            <PetDisplay {...shareData}/>
            <PageDisplay {...shareData}/>
        </div>
    )
}
export default Main