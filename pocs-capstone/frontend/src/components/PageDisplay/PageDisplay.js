import "./PageDisplay.css"
import TaskPage from "./TaskPage";
import CalendarPage from "./CalendarPage"
import TaskListContext from '../../context/TaskListContext'
import InventoryBox from "../Inventory/InventoryBox";
// import tasks from '../../services/tasks'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useState, useEffect, useContext } from 'react'
import { getIn, setIn } from "formik";


const PageDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {

    const axiosPrivate = useAxiosPrivate()
    const baseURL = `/tasks/`

    const [taskList, setTaskList] = useState([])    

    const fetchData = () => {
        axiosPrivate.get(baseURL)
            .then(r => {
                setTaskList(r.data)
            })
    }

    useEffect(fetchData, [])

    const updateTask = (id, newTask) => {
        console.log(newTask, newTask == null)
        const taskItem = taskList.find(t => t.task_id === id)
        const taskItemChanged = newTask == null ?
            { ...taskItem, completed: !taskItem.completed } :
            { ...taskItem, title: newTask.title, due_date: newTask.due_date, task_type: newTask.size, description: newTask.description }

        axiosPrivate.put(`${baseURL}${id}/`, taskItemChanged)
            .then(r => {
                setTaskList(taskList.map(t => t.task_id === id ? r.data : t))
            })
    }

    const addTask = (formValues) => {
        const newTask = {
            title: formValues.title,
            due_date: formValues.due_date,
            created_date: new Date().toISOString(),
            completed_date: "2023-03-08",
            completed: false,
            active: true,
            task_type: formValues.size,
            task_level: 1,
            recurring: false,
            recurring_time_delta: 0,
            description: formValues.description,
            course_id: 0,
            assignment_id: 0
        }

        axiosPrivate.post(baseURL, newTask)
            .then(r => {
                setTaskList(taskList.concat(r.data))
            })
    }

    const deleteTask = (id) => {
        axiosPrivate.delete(`${baseURL}${id}/`)
            .then(r => {
                setTaskList(taskList.filter(t => t.task_id !== id))
            })
    }

    const handlers = {
        taskList,
        setAvatar,
        setInventory,
        addTask,
        deleteTask,
        updateTask
    }
    
    return (
        <TaskListContext.Provider value={handlers}>
            <div className="page-display">
                <Tabs
                    defaultActiveKey="tasks"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="tasks" title="Tasks">
                        <TaskPage />

                    </Tab>
                    <Tab eventKey="calendar" title="Calendar">
                        <CalendarPage />
                    </Tab>
                    <Tab eventKey="inventory" title="Inventory">
                            < InventoryBox />
                    </Tab>
                    <Tab eventKey="progress" title="Progress">
                        {/* <Sonnet /> */}
                    </Tab>
                </Tabs>
            </div>
        </TaskListContext.Provider>
    )
}

export default PageDisplay