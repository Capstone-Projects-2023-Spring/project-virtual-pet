import "./PageDisplay.css"
import TaskPage from "./Task/TaskPage";
import TaskPageMobile from "./TaskMobile/TaskPageMobile"
import CalendarPageDesktop from "../CalendarDeskop/CalendarPageDeskop";
import PetProfPage from "./PetProfPage";
import TaskListContext from '../../context/TaskListContext'
import InventoryBox from "../Inventory/InventoryBox";
import InventoryBoxMobile from "../Inventory/InventoryBoxMobile";
import GlobalContext from "../../context/GlobalContext";
import "../CalendarDeskop/CalendarPageDeskop"
import UserContext from "../../context/UserContext";
import { Tab, Tabs } from 'react-bootstrap';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useState, useEffect, useContext } from 'react'
import { useWindowWidth } from "@react-hook/window-size";


const PageDisplay = () => {

    const axiosPrivate = useAxiosPrivate()
    const contextHandlers = useContext(GlobalContext)
    const userContext = useContext(UserContext)
    const width = useWindowWidth();
    const isMobile = width <= 1130;


    return (

            <div className="page-display">
                <Tabs
                    defaultActiveKey="tasks"
                    id="justify-tab-example"
                    className="mb-3 pg-tabs"
                    justify
                >
                    <Tab eventKey="tasks" title="Tasks">

                            {
                                !isMobile ?
                                    <TaskPage /> :
                                    <TaskPageMobile />
                            }

                    </Tab>
                    <Tab eventKey="calendar" title="Calendar">
                        <div style={{width: "1000px", margin:"50px"}}>
                        <CalendarPageDesktop />
                        </div>
                    </Tab>
                    <Tab eventKey="inventory" title="Inventory">
                        <InventoryBox />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        < PetProfPage />
                    </Tab>
                </Tabs>
            </div>

    )
}

export default PageDisplay