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
import InventoryContext from "../../context/InventoryContext";


const PageDisplay = ({ avatarInfo, setAvatar, inventory, setInventory }) => {

    const axiosPrivate = useAxiosPrivate()
    const baseURL = `/tasks/`

    const getTasksB = () => {
        const request = axiosPrivate.get(baseURL)
        return request.then(response => response.data)
    }

    const createTaskB = (newTask) => {
        const request = axiosPrivate.post(baseURL, newTask)
        return request.then(response => response.data)
    }

    const updateTaskB = (taskID, updatedTask) => {
        const request = axiosPrivate.put(`${baseURL}${taskID}/`, updatedTask)
        return request.then(response => response.data)

    }

    const deleteTaskB = (taskID) => {
        const request = axiosPrivate.delete(`${baseURL}${taskID}/`)
        return request.then(response => response.data)
    }


    const [taskList, setTaskList] = useState([])

    // For inventory
    // let getInventory = () => {
    //     let request = axiosPrivate.get('/inventory/')
    //     return request.then(response => response.data)
    // }
    

    const fetchData = () => {
        getTasksB()
            .then(r => {
                setTaskList(r)
            })
        
    }

    useEffect(fetchData, [])

    const updateTask = (id, newTask) => {
        console.log(newTask, newTask == null)
        const taskItem = taskList.find(t => t.task_id === id)
        const taskItemChanged = newTask == null ?
            { ...taskItem, completed: !taskItem.completed } :
            { ...taskItem, title: newTask.title, due_date: newTask.due_date, task_type: newTask.size, description: newTask.description }


        updateTaskB(id, taskItemChanged)
            .then(r => {
                console.log(r)
                setTaskList(taskList.map(t => t.task_id === id ? taskItemChanged : t))
            })

        console.log(taskList.find(t => t.id === id))


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


        createTaskB(newTask)
            .then(r => {
                setTaskList(taskList.concat(r))
            })
    }

    const deleteTask = (id) => {

        deleteTaskB(id)
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
    
    // let {inv, setInv} = useContext(InventoryContext)

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
                        {/* <InventoryContext.Provider> */}
                            < InventoryBox />
                        {/* </InventoryContext.Provider> */}
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