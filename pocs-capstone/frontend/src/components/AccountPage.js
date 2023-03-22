import {useRef,useState,useEffect} from 'react';
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate'


const LOGIN_URL = '/api/token/';

const AccountPage = () => {
    const axiosPrivate = useAxiosPrivate();
    const userRef = useRef();
    const errRef = useRef();

    const [newPetName, setNewPetName] = useState('');
    const [newBio, setNewBio] = useState('');
  

    const handleNewPetNameSubmit = (e) => {
        e.preventDefault();
        // logic for submitting new changes to server
        // using state variable newPetName

        console.log("New pet name submitted:", newPetName);
    };

    const handleNewBioSubmit = (e) => {
        e.preventDefault();
        // logic for submitting new changes to server
        // using state variable newBio

        console.log("New bio submitted:", newBio);
    };

    return (
        <div>
        <h2>Change Account Profile Information</h2>
        <form>
            <div>
                <label htmlFor="new-bio">New Bio:</label>
                <input
                    type="text"
                    id="new-bio"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                />
                <button onClick={handleNewBioSubmit}>Submit</button>
            </div>

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
        </form>
        </div>
    );
    };

export default AccountPage;
