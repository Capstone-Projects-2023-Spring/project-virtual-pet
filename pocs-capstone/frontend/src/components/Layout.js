import Header from './Header.js'
//import Main from './components/Main.js'
import Footer from './Footer.js'
import { Outlet } from "react-router-dom"
const Layout = () => {

    return (
        <main className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </main>

    )

}

export default Layout