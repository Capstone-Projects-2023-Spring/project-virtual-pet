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
    const [newTitle, setNewTitle] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newSize, setNewSize] = useState('S')
    const [newDate, setNewDate] = useState('')

    const fetchData = () => {
        tasks
            .getTasks()
            .then(r => { setTaskList(r) })
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
            })

    }

    const addTask = (e) => {
        e.preventDefault()

        const newTask = {
            title: newTitle,
            due_date: newDate,
            created_date: new Date().toISOString(),
            completed_date: "2023-03-08",
            completed: false,
            active: true,
            task_type: newSize,
            task_level: 1,
            recurring: false,
            recurring_time_delta: 0,
            description: newDesc,
            course_id: 0,
            assignment_id: 0
        }

        tasks
            .createTask(newTask)
            .then(r => {
                setTaskList(taskList.concat(r))
                setNewTitle('')
                setNewDesc('')
                setNewSize('S')
                setNewDate('')
            })
    }


    const deleteTask = (id) => {
        const taskItem = taskList.find(t => t.task_id === id)
        const taskItemChanged = { ...taskItem, completed: !taskItem.completed }
        tasks
            .deleteTask(id)
            .then(r => {
                setTaskList(taskList.filter(t => t.task_id !== id))
            })
    }

    const handleTitleChange = (e) => { setNewTitle(e.target.value) }

    const handleDescChange = (e) => { setNewDesc(e.target.value) }

    const handleSizeChange = (e) => { setNewSize(e.target.value) }

    const handleDateChange = (e) => { setNewDate(e.target.value) }

    const handlers = {
        taskList,
        newTitle,
        newDesc,
        newSize,
        newDate,
        setAvatarInfo,
        setInventory,
        setTaskList,
        handleCompleteCheck,
        handleTitleChange,
        handleDescChange,
        handleSizeChange,
        handleDateChange,
        addTask,
        deleteTask
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

                    <TaskPage {...handlers} />


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