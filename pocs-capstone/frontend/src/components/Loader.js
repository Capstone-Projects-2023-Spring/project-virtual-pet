import {  useEffect} from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate} from 'react-router-dom'

const AVATAR_URL = '/avatar/'

const Loader = () => {
    const axiosPrivate = useAxiosPrivate();
    
    const nav = useNavigate();
    useEffect(() => {  axiosPrivate.get(AVATAR_URL)
        .then((response )=>{
            console.log(response.data);
            if(response.status==403)
                nav("/login")
            if(response.data.length===0)
                nav("/pet_selection")
            else(nav("/"))
        })
        .catch((error) => {
            console.log(error);
        });
        //nav("/")
    })
    
}

export default Loader  