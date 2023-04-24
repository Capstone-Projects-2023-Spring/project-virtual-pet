import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PetProfileMobile from "./PetProfileMobile.js";
import CanvasIntegrationPageMobile from "./CanvasIntegrationPageMobile";
import AccountPageMobile from "./AccountPageMobile.js";
import "./AccountProfilePageMobile.css";

const AccountProfilePageMobile = () => {
    
    const [showAccountProfile, setShowAccountProfile] = useState(false);
    const [showCanvasPage, setShowCanvasPage] = useState(false);
    const [showPetProf, setShowPetProfile] = useState(false);

    const handleShowAccountProfile = () => setShowAccountProfile(true);
    const handleCloseAccountProfile = () => setShowAccountProfile(false);
    const handleShowCanvasPage = () => setShowCanvasPage(true);
    const handleCloseCanvasPage = () => setShowCanvasPage(false);
    const handleShowPet = () => setShowPetProfile(true);
    const handleClosePet = () => setShowPetProfile(false);


    return (
        <div className="account-profile-container-mobile">
            <center><Button className="profile-account-button-mobile" type="submit" id="profile_account" onClick={handleShowAccountProfile}>Account</Button></center>
            <center><Button className="pet-profile-button-mobile" type="submit" id="petprofile" onClick={handleShowPet}>Pet Profile</Button></center>
            <center><Button className="canvas-button-mobile" type="sumbit" id="canvas_integration" onClick={handleShowCanvasPage}>Canvas Integration</Button></center>
            <center><Button className="logout-button-mobile" type="submit" id="logout" href="/logout" >Logout</Button></center>

            <AccountPageMobile {...{showAccountProfile, handleCloseAccountProfile}} />
            <PetProfileMobile {...{ showPetProf, handleClosePet }} />
            <CanvasIntegrationPageMobile {...{ showCanvasPage, handleCloseCanvasPage }} />

        </div>
    )
}
export default AccountProfilePageMobile;