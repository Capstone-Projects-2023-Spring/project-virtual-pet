import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'


import './App.css'

const App = () => {
  const userInfo = {}


  return (

    <div>

      
    <Header title="My Study Buddy"/>

      <Main userInfo={userInfo}/>
      <Footer userInfo={userInfo}/>
    </div>

    
  )
}
export default App
