import "./PageDisplay.css"
import TaskPage from "./TaskPage";
import CalendarPage from "./CalendarPage";
import PetProfPage from "./PetProfPage";
import TaskListContext from '../../context/TaskListContext'
import InventoryBox from "../Inventory/InventoryBox";
// import tasks from '../../services/tasks'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useState, useEffect, useContext } from 'react'
import { getIn, setIn } from "formik";


const PageDisplay = () => {

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
        const taskItem = taskList.find(t => t.task_id === id)

        

        const taskItemChanged = newTask == null ?
            { ...taskItem, completed: !taskItem.completed, completed_date: (taskItem.completed_date===null ? new Date().toISOString().split('T')[0] : null ) } :
            { ...taskItem, title: newTask.title, due_date: newTask.due_date==='' ? null : newTask.due_date, task_type: newTask.size, description: newTask.description, task_level: newTask.level }


        axiosPrivate.put(`${baseURL}${id}/`, taskItemChanged)
            .then(r => {
                setTaskList(taskList.map(t => t.task_id === id ? r.data : t))
            })
    }

    const addTask = (formValues) => {
        const newTask = {
            title: formValues.title,
            due_date: formValues.due_date === "" ? null : formValues.due_date,
            created_date: new Date().toISOString(),
            completed_date: null,
            completed: false,
            active: true,
            task_type: formValues.size,
            task_level: formValues.level,
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

    const deleteAll = (completedTasks) => {
        // delete all completed tasks
        if (completedTasks.length) {
            completedTasks.forEach(t => {
                axiosPrivate.delete(`${baseURL}${t.task_id}/`)
                    .catch(e => {
                        console.log("ERROR TASKS", e)
                    })
            })
        }

        // keep non completed tasks 
        const keepTasks = taskList.filter(task => !task.completed)
        setTaskList(keepTasks)
    }

    const handlers = {
        taskList,
        addTask,
        deleteTask,
        deleteAll,
        updateTask
    }

    return (
        <TaskListContext.Provider value={handlers}>
            <div className="page-display">
                <Tabs
                    defaultActiveKey="tasks"
                    id="justify-tab-example"
                    className="mb-3 pg-tabs"
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
                    <Tab eventKey="profile" title="Profile">
                        < PetProfPage />
                    </Tab>
                </Tabs>
            </div>
        </TaskListContext.Provider>
    )
}

export default PageDisplay