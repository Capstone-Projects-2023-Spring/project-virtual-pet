
import React,{useRef,useState,useEffect} from 'react';
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';


import axios from '../../api/axios';
const LOGOUT_URL = '/logout/blacklist';

export default function Logout() {
    const navigate = useNavigate();
    const {setAuth,persist,setPersist} = useAuth();
    
    useEffect(()=>{
        const response = axios.post(LOGOUT_URL,{refresh_token:localStorage.getItem('refresh')});
        
        localStorage.removeItem('refresh')
        localStorage.removeItem('persist')
        setPersist(false)
        setAuth({})

        navigate('/login')

    });
    return <div>Logout</div>;
}