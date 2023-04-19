import PetDisplayMobile from "./PetDisplay/PetDisplayMobile"
import { useState, useContext, useRef, useEffect } from "react";
import "./MainMobile.css";

import GlobalContext from "../context/GlobalContext.js";
import InventoryBoxMobile from "./Inventory/InventoryBoxMobile.js";
import CalendarPageMobile from "./CalendarMobile/CalendarPageMobile.js";
import TaskPageMobile from "./PageDisplay/TaskMobile/TaskPageMobile.js";
import AccountProfilePageMobile from "./AccountProfileTabMobile/AccountProfilePageMobile";
import canvas_bug from "../images/canvas_bug.png";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UserContext from "../context/UserContext";
import { Tabs, Tab } from '@material-ui/core';
import InventoryIcon from '@mui/icons-material/Inventory';
import {List, PersonPin, CalendarToday, } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody } from "react-bootstrap";

const COURSES_URL = "/canvas/";
const USER_URL = "/user-data/";

const MainMobile = () => {

  const handlers = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(0);
  const axiosPrivate = useAxiosPrivate();
  const nav = useNavigate();
  const {userInfo,setUserInfo} = useContext(UserContext)
  const userh = useContext(UserContext);
  const [nameError, setNameError] = useState("");
  const [tokenReady, setTokenReady] = useState(false);
  const [retrievingAssignments, setRetrievingAssignments] = useState(false);
  const [canvasError, setCanvasError] = useState(false);
  

  const resetSubmitTokenState = (text) => {
    setRetrievingAssignments(false);
    setNameError(text);
    setTokenReady(false);
  };


  function getCourses() {
    setRetrievingAssignments(true);
    setNameError("");
    axiosPrivate
      .get(COURSES_URL)
      .then((response) => {
        //we were successful
        //return state and navigate to main
        // setNameError("success")
        resetSubmitTokenState("");
        nav(0)       
      })
      .catch((err) => {
        console.log(err);
        // Error with canvas token
        canvasER();
        
        resetSubmitTokenState("Error!");
        setCanvasError(true);
        
        // setNameError("error");
      });
  } 
  
  // Update canvas_token in backend then frontend
  // Will cause canvas button to not render
  const canvasER = () => {
    
    const url = USER_URL + userInfo.id + "/";
    const tok = {
      canvas_token: "BADTOKEN"
    }

    axiosPrivate.patch(url,tok )
    .then((response) => {
      console.log(response.data);
      setUserInfo(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }


    return (
        <div className="container-m" width={handlers?.width}>
            <div className="top-container-mobile">
            <PetDisplayMobile value={handlers}/>
            </div>

            <div className="bottom-container-mobile">
            <Modal className="createtask-modal-mobile" backdrop="static" show={canvasError} onHide={setCanvasError} >
            <Modal.Header closeButton>        
            </Modal.Header>
            <ModalBody style={{fontSize:"20px"}}><center>There is problem with your canvas token!<br></br>Please resubmit your token!<br></br>
            The canvas button in your tabs will now disappear</center></ModalBody>
            </Modal>
            
            {activeTab === 0 && <TaskPageMobile/>}
            {activeTab === 1 && <CalendarPageMobile/> }
            {activeTab === 2 && <InventoryBoxMobile/>}
            {activeTab === 3 && <AccountProfilePageMobile/>}
        
            </div>

            <div className="tab-container">
          <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)}>
            <Tab icon={<List />} />
            <Tab icon={<CalendarToday />} />
            <Tab icon={<InventoryIcon />} />
            <Tab icon={<PersonPin />} />


            { userInfo.canvas_token !== "" && userInfo.canvas_token !== "BADTOKEN" ?  (

                <div >
                  <button className="container-canvas-logo" onClick={getCourses}>
                    <img
                      className={

                        retrievingAssignments ? "canvas-loading" : "logo-canvas"
                      }
                      alt="CanvasBug"
                      src={canvas_bug}
                      //style={{gridRow:'2'}}
                    ></img>
                  </button>
                  {/* <span style={{ color: "white" }}>{nameError}</span> */}
                </div>
              ) : (
                <div></div>
              )} 

          </Tabs>
        </div>            
      </div>
    );
};

export default MainMobile;