import PetDisplay from "./PetDisplay/PetDisplay.js";
import PageDisplay from "./PageDisplay/PageDisplay.js";
import PetDisplayMobile from "./PetDisplay/PetDisplayMobile"
//import useAuth from '../hooks/useAuth.js'
import { useNavigate } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";
import "./MainMobile.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PopulateInv from "./Inventory/PopulateInv.js";
import LockedInv from "./Inventory/LockedInv.js";
import AvatarContext from "../context/AvatarContext.js";
import GlobalContext from "../context/GlobalContext.js";
import CalculateXP from "../algos/assignXP.js";
import CalculatePetLevel from "../algos/calculatePetLevel.js";
import { setIn } from "formik";
import TaskPage from "./PageDisplay/TaskPage.js";
import InventoryBoxMobile from "./Inventory/InventoryBoxMobile.js";
import PetProfPage from "./PageDisplay/PetProfPage.js";



const MainMobile = () => {
  const handlers = useContext(GlobalContext);
  const tabs = ['T', 'C', 'I', 'P'];
  const [activeTab, setActiveTab] = useState(0);


    return (
      <GlobalContext.Provider value={handlers}>
        <div className="container-m" width={handlers?.width}>
            {/* <PetDisplayMobile value={handlers}/> */}
            <div className="top-container-mobile">
            <PetDisplayMobile/>
            </div>


            <div className="bottom-container-mobile">
            
            
            {activeTab === 0 && <div>hi</div>}
            {activeTab === 1 && <div>asdfa</div>}
            {activeTab === 2 && <InventoryBoxMobile/>}
            {activeTab === 3 && <PetProfPage/>}
            
            </div>

          <div className="tab-container">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)} >
                {tab}
              </div>
            ))}
        </div>
      </div>
      </GlobalContext.Provider>
    );
};
export default MainMobile;
