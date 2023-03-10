import "./PageDisplay.css"

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState, useEffect } from 'react'
import TaskPage from "./TaskPage";
import CalendarPage from "./CalendarPage"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import tasks from '../../services/tasks'


const PageDisplay = ({ avatarInfo, setAvatarInfo, inventory, setInventory }) => {
    const [taskList, setTaskList] = useState([])

    const fetchData = () => {
        tasks
            .getTasks()
            .then(r => {setTaskList(r)})
        // setTaskList(tasks.getTasks())
    }

    useEffect(fetchData, [])
    // console.log("Loading fetch data tasks", taskList, "data fetched ")


    const handleCompleteCheck = (id) => {
        const taskItem = taskList.find(t => t.task_id === id)
        const taskItemChanged = { ...taskItem, completed: !taskItem.completed }
        tasks
            .updateTask(id, taskItemChanged)
            .then(r => {
                setTaskList(taskList.map(t => t.task_id === id ? taskItemChanged : t))
                console.log('NEW LIST', taskList)
            })
            // .catch(error => {
            //     setErrorMessage(
            //         `Task '${t.title}' was already removed`
            //     )
            //     setTimeout(() => {
            //         setErrorMessage(null)
            //     }, 5000)
            //     // alert(`the note '${note.content}' was already deleted from server`)

            //     setTaskList(taskList.filter(t => t.task_id !== id))
            // })

    }

    



    return (
        <div className="page-display">
            <Tabs
                defaultActiveKey="tasks"
                id="justify-tab-example"
                className="mb-3"
                justify
            >


                <Tab eventKey="tasks" title="Tasks">

                    <TaskPage {...{ taskList, setAvatarInfo, setInventory, setTaskList, handleCompleteCheck }} />


                </Tab>
                <Tab eventKey="calendar" title="Calendar">
                    <CalendarPage />
                </Tab>
                <Tab eventKey="inventory" title="Inventory">
                    {/* <Sonnet /> */}
                </Tab>
                <Tab eventKey="progress" title="Progress">
                    {/* <Sonnet /> */}
                </Tab>
            </Tabs>
        </div>
    )
}

export default PageDisplay