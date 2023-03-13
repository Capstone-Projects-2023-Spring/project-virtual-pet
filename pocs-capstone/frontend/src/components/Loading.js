
import PetDisplay from './PetDisplay/PetDisplay.js';
import PageDisplay from './PageDisplay/PageDisplay.js';
import Loader from './Loader.js';
import useAuth from '../hooks/useAuth.js';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useState, useEffect } from 'react';




const Loading = ({userInfo}) => {
    const nav = useNavigate();
    const [loaded, setLoaded] = useState(false);

    //   the useEffect will run on the first rendering of the App component
    //   after two seconds (about how long it takes for the data to load)
    //   the loaded state will become true
      useEffect(() => {
        const lol = 0;
        setTimeout(
            
            function() {  nav('/')
    
            }, 5000);
        console.log("haaaaaiiiiii")
        
        
    
      });
    

 

    return(
        <div className="flex-pages">
            <p>
                loading... uwu 
            </p>
        </div>
    )

};


export default Loading;
