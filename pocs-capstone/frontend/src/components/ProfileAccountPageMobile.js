import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PetProfileMobile from "./PetProfileMobile.js";
import CanvasIntegrationPageMobile from "./CanvasIntegrationMobile.js";
import Logout from "./LoginLogout/Logout.js"


const ProfileAccountPageMobile = () => {

    const nav = useNavigate();
    const handleS = (event) => {
        const buttonId = event.target.id;
        nav(`/${buttonId}`)
}
    const [p, setP] = useState(false);

    const [showCanvas, setShowCreateTask] = useState(false);
    const [showPetProf, setShowPetProfile] = useState(false);
    const handleCloseCanvasPage = () => setShowCreateTask(false);
    const handleShowCanvasPage = () => setShowCreateTask(true);
    const handleShowPet = () => setShowPetProfile(true);
    const handleClosePet = () => setShowPetProfile(false);


    return (
        <div className="link-container-mobile">
            <center><Button className="pet-profile-button-mobile" type="submit" id="petprofile" onClick={handleShowPet}>Pet Profile</Button></center>
            <center><Button className="canvas-button-mobile" type="sumbit" id="canvas_integration" onClick={handleShowCanvasPage}>Canvas Integration</Button></center>
            <center><Button type="submit" id="logout" href="/logout" >Logout</Button></center>

            {/* {p ===  && <PetProfPage/> } */}
            <PetProfileMobile {...{ showPetProf, handleClosePet }} />
            <CanvasIntegrationPageMobile {...{ showCanvas, handleCloseCanvasPage }} />

        </div>
    )
    
}
export default ProfileAccountPageMobile;