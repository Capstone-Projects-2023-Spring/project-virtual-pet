import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PetProfileMobile from "./PetProfileMobile.js";
import CanvasIntegrationPageMobile from "./CanvasIntegrationMobile.js";


const ProfileAccountPageMobile = () => {

    const nav = useNavigate();
    const handleS = (event) => {
        const buttonId = event.target.id;
        nav(`/${buttonId}`)
}
    const [p, setP] = useState(false);

    const [showCreateTask, setShowCreateTask] = useState(false);
    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);


    return (
        <div className="link-container-mobile">
            <center><Button className="pet-profile-button-mobile" type="submit" id="petprofile" onClick={handleShow}>Pet Profile</Button></center>
            <center><Button className="canvas-button-mobile" type="sumbit" id="canvas_integration" onClick={handleShow}>Canvas Integration</Button></center>
            {/* {p ===  && <PetProfPage/> } */}
            <PetProfileMobile {...{ showCreateTask, handleClose }} />
            <CanvasIntegrationPageMobile {...{ showCreateTask, handleClose }} />

        </div>
    )
    
}
export default ProfileAccountPageMobile;