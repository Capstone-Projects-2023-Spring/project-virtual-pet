import PetDisplayMobile from "./PetDisplay/PetDisplayMobile"
import { useState, useContext, useRef } from "react";
import "./MainMobile.css";
import GlobalContext from "../context/GlobalContext.js";
import InventoryBoxMobile from "./Inventory/InventoryBoxMobile.js";
import PetProfPage from "./PageDisplay/PetProfPage.js";
import CalendarPageMobile from "./CalendarMobile/CalendarPageMobile.js";
import TaskPageMobile from "./PageDisplay/TaskMobile/TaskPageMobile.js";
import ProfileAccountPageMobile from "./ProfileAccountTabMobile/ProfileAccountPageMobile";
import canvas_bug from "../images/canvas_bug.png";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UserContext from "../context/UserContext";
import { Tabs, Tab } from '@material-ui/core';
import InventoryIcon from '@mui/icons-material/Inventory';
import {List, PersonPin, CalendarToday, } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";

const COURSES_URL = "/canvas/";




const MainMobile = () => {
  const handlers = useContext(GlobalContext);



  const [activeTab, setActiveTab] = useState(0);
  const axiosPrivate = useAxiosPrivate();
  const nav = useNavigate();
  const {userInfo,setUserInfo} = useContext(UserContext)
  const [nameError, setNameError] = useState("");
  const [tokenReady, setTokenReady] = useState(false);
  const [retrievingAssignments, setRetrievingAssignments] = useState(false);

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
        resetSubmitTokenState("");
        nav(0)       
      })
      .catch((err) => {
        console.log(err);
        resetSubmitTokenState("Error!");
      });
  } 
    return (
      <GlobalContext.Provider value={handlers}>
        <div className="container-m" width={handlers?.width}>
            <div className="top-container-mobile">
            <PetDisplayMobile value={handlers}/>
            </div>

            <div className="bottom-container-mobile">
            
            {activeTab === 0 && <TaskPageMobile/>}
            {activeTab === 1 && <CalendarPageMobile/> }
            {activeTab === 2 && <InventoryBoxMobile/>}
            {activeTab === 3 && <ProfileAccountPageMobile/>}
        
            </div>

            <div className="tab-container">
          <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)}>
            <Tab icon={<List />} />
            <Tab icon={<CalendarToday />} />
            <Tab icon={<InventoryIcon />} />
            <Tab icon={<PersonPin />} />
            {userInfo.canvas_token !== "" ? (
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
                  <span style={{ color: "white" }}>{nameError}</span>
                </div>
              ) : (
                <div></div>
              )} 

          </Tabs>
        </div>
        
          
            
            
              {/* <button className="container-canvas-logo" onClick={getCourses}>
                <img
                  className={
                    retrievingAssignments ? "canvas-loading" : "logo-canvas"
                  }
                  alt="CanvasBug"
                  src={canvas_bug}
                  //style={{gridRow:'2'}}
                ></img>
              </button> */}
                       
            
      </div>
      </GlobalContext.Provider>
    );
};

export default MainMobile;