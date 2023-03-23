import {useRef,useState,useEffect} from 'react';
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate'


const AVATAR_URL = '/avatar/';

const AccountPage = () => {
    //const {auth} = useAuth();
    const axiosPrivate = useAxiosPrivate();
    //const userRef = useRef();
    //const errRef = useRef();

    const [petName, setPetName] = useState('');
    const [newPetName, setNewPetName] = useState('');
  
    
    
    
    

      

      const updatePetName = () => {
        if (newPetName !== "") {
          
          axiosPrivate
            .get(AVATAR_URL)
            .then((response) => {
              const avatar_id = response.data[0].avatar_id;
              console.log("AVATAR ID---->", response.data[0].avatar_id);
      
              const url = AVATAR_URL + avatar_id + "/";
              console.log("-----> ", url);
              const data = {'pet_name': newPetName };
              console.log("data:", data);
              axiosPrivate.patch(url, data).then((response) => {
                console.log("response.data:", response.data);
                setPetName(newPetName);
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

      const handleNewPetNameSubmit = (e) => {
        e.preventDefault();
        console.log("New pet name submitted:", newPetName);
        updatePetName();
        //setNewPetName(e.target.value);
      };

      // useEffect to retrieve current pet name state
      useEffect(() => {
        axiosPrivate
            .get(AVATAR_URL)
            .then((response) => {
                setPetName(response.data[0].pet_name);
                console.log("Old pet name:", response.data[0].pet_name);
            })
            .catch((err) => {
                console.log(err);
            });

      }, []);
    /*const handleNewPetNameSubmit = (e) => {
        e.preventDefault();
        console.log("New pet name submitted:", newPetName);


        //retrieve old pet name
        axiosPrivate.get(AVATAR_URL)
            .then((response) => {
                console.log(response.data[0].pet_name)
            }).catch((err)=>{console.log(err)})
        
        
        
        if (newPetName !== "") {
            setNewPetName(newPetName);
            axiosPrivate.get(AVATAR_URL)
                .then((response) => {
                const avatar_id = response.data[0].avatar_id;
                console.log("AVATAR ID---->",response.data[0].avatar_id) 

                const url = AVATAR_URL+avatar_id+"/";
                console.log("-----> ",url);
                const data = {"pet_name":newPetName}
                console.log(data);
                axiosPrivate.patch(url, data)
                    .then((response )=>{
                        console.log(response.data);
                    })
            }).catch((err)=>{console.log(err)})
        }

    };*/

    /*const handleNewBioSubmit = (e) => {
        e.preventDefault();
        // logic for submitting new changes to server
        // using state variable newBio

        console.log("New bio submitted:", newBio);
    };

    const handleNewPasswordSubmit = (e) => {
        e.preventDefault();
        // logic for submitting new changes to server
        // using state variable newBio

        console.log("New password submitted:", newPassword);
    };*/

    return (
        <div>
        <h2>Change Account Profile Information</h2>
        <h5>Username: _____</h5>
        <h5>Email: ______</h5>
        <h5>Pet Name: {petName}</h5>
        <form>

            <div>
                <label htmlFor="new-petname">New Pet Name:</label>
                <input
                    type="text"
                    id="new-petname"
                    value={newPetName}
                    onChange={(e) => setNewPetName(e.target.value)}
                />
                <button onClick={handleNewPetNameSubmit}>Submit</button>
            </div>

            <div>
                <label htmlFor="new-bio">New Bio:</label>
                <input
                    type="text"
                    id="new-bio"
                    //value={newBio}
                    //onChange={(e) => setNewBio(e.target.value)}
                />
                <button onClick/*</div>={handleNewBioSubmit}*/>Submit</button>
            </div>

            <div>
                <label htmlFor="new-pass">New Password:</label>
                <input
                    type="text"
                    id="new-pass"
                    //value={newPassword}
                    //onChange={(e) => setNewBio(e.target.value)}
                />
                <button onClick/*</div>={handleNewPasswordSubmit}*/>Submit</button>
            </div>

        </form>
        </div>
    );
    };

export default AccountPage;
