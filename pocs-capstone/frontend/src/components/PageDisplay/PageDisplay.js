import "./PageDisplay.css"
import TaskPage from "./TaskPage";
import CalendarPage from "./CalendarPage"
import TaskListContext from '../../context/TaskListContext'
import tasks from '../../services/tasks'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState, useEffect } from 'react'


const PageDisplay = ({ avatarInfo, setAvatarInfo, inventory, setInventory }) => {
    const [taskList, setTaskList] = useState([])

    const fetchData = () => {
        tasks
            .getTasks()
            .then(r => { setTaskList(r) })
    }

    useEffect(fetchData, [])

    const updateTask = (id) => {
        const taskItem = taskList.find(t => t.task_id === id)
        const taskItemChanged = { ...taskItem, completed: !taskItem.completed }
        tasks
            .updateTask(id, taskItemChanged)
            .then(r => {
                setTaskList(taskList.map(t => t.task_id === id ? taskItemChanged : t))
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

        tasks
            .createTask(newTask)
            .then(r => {
                setTaskList(taskList.concat(r))
            })
    }

    const deleteTask = (id) => {
        tasks
            .deleteTask(id)
            .then(r => {
                setTaskList(taskList.filter(t => t.task_id !== id))
            })
    }

    const handlers = {
        taskList,
        setAvatarInfo,
        setInventory,
        updateTask,
        addTask,
        deleteTask
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
                        {/* <Sonnet /> */}
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