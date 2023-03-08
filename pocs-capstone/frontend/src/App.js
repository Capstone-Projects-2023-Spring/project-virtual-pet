import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

import { useState, useEffect } from 'react'

import user from './services/user.js'

import './App.css'

const App = () => {

  const [userInfo, setUserInfo] = useState({})

  const fetchData = () => {
    // user
    //   .getUserInfo("ccho")
    //   .then(r => {
    //     setUserInfo(r)
    //   })
    setUserInfo(user.getUserInfo("ccho"))
  }

  useEffect(fetchData, [])
  console.log("Loading fetch data ", userInfo, "data fetched ")


  return (
    <div className="fill-page">
      <Header title="My Study Buddy"/>
      <Main userInfo={userInfo}/>
      <Footer userInfo={userInfo}/>

    </div>
  )
}
export default App
