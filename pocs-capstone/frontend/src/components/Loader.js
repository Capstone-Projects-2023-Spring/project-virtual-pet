import { useState, useEffect} from "react"
import useAuth from '../hooks/useAuth.js'
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import {Link, useNavigate} from 'react-router-dom'

const AVATAR_URL = '/avatar/'

const Loader = () => {
    const axiosPrivate = useAxiosPrivate();
    
    const nav = useNavigate();
    useEffect(() => {  axiosPrivate.get(AVATAR_URL)
        .then((response )=>{
            console.log(response.data);
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