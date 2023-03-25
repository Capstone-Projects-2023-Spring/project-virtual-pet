import Header from './Header.js'
//import Main from './components/Main.js'
import Footer from './Footer.js'
import { Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate.js';
import UserContext from "../context/UserContext"

const Layout = () => {
    const axiosPrivate = useAxiosPrivate();
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axiosPrivate.get('/user-data/')
            .then((response) => {
                setUserInfo(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const shareData = { userInfo, setUserInfo }
    console.log("SHARED USER DATA", shareData)

    return (
        <UserContext.Provider value={shareData}>
        <main className="app">
            <Header {...shareData}/>
            <Outlet/>
            <Footer/>
        </main>
        </UserContext.Provider>

    )

}

export default Layout