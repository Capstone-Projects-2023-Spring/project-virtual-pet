import PetDisplay from './PetDisplay/PetDisplay.js'
import PageDisplay from './PageDisplay/PageDisplay.js'
//import useAuth from '../hooks/useAuth.js'
import { useNavigate} from 'react-router-dom';

import { useState, useEffect } from 'react'

import { useWindowWidth} from '@react-hook/window-size'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import './Main.css'


const AVATAR_URL = '/avatar/'
const Main = ({userInfo}) => {
    const axiosPrivate = useAxiosPrivate();
    const [avatarInfo, setAvatar] = useState({})
    const [inventory, setInventory] = useState([])
    const width = useWindowWidth()
    const nav = useNavigate()
 
    const [ready,setReady]=useState(false)
    
    const fetchData = () => {
        axiosPrivate.get(AVATAR_URL)
        .then((response )=>{
            console.log("----->",response)
            if(response.data[0]){
                setAvatar(response?.data[0])
                setReady(true)
            }
            else{
                nav("/pet_selection")
            }
        })
        .catch((error) => {
            
            console.log("REDIRECT FROM MAIN------->",error,ready);
            
            nav("/pet_selection")
            //nav("/login")
        });

        // setInventory(inventoryService.getInventory("ccho"))
    }

    
    useEffect(fetchData,[])
    
    // console.log("Loading fetch data avatar", avatarInfo, "data fetched ")
    // console.log("Loading fetch data inventory ", inventory, "data fetched ")

    const isMobile = (width <= 850)
    
 
    // guard against no avatar information

            
    const shareData = { avatarInfo, setAvatar, inventory, setInventory }

    if(!isMobile && ready) {
        console.log("NOT MOBILE")
        return(
            <div className="flex-pages">
                <PetDisplay {...shareData}/>
                <PageDisplay {...shareData}/>
            </div>
        )
    } else if (ready){
        console.log("MOBILE")

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
    else {        
        console.log("LOADING")

        return (
            <div>LOADING...</div>
        )
    }
    
}
export default Main