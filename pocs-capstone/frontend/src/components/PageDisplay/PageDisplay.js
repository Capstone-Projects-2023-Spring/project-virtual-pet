import "./PageDisplay.css"
import TaskPage from "./TaskPage";
import CalendarPage from "./CalendarPage";
import PetProfPage from "./PetProfPage";
import TaskListContext from '../../context/TaskListContext'
import InventoryBox from "../Inventory/InventoryBox";
import InventoryBoxMobile from "../Inventory/InventoryBoxMobile";
import GlobalContext from "../../context/GlobalContext";
import { Tab, Tabs } from 'react-bootstrap';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useState, useEffect, useContext } from 'react'
import { useWindowWidth } from "@react-hook/window-size";


const PageDisplay = () => {

    const axiosPrivate = useAxiosPrivate()
    const baseURL = `/tasks/`
    const contextHandlers = useContext(GlobalContext)
    const width = useWindowWidth();
    const isMobile = width <= 850;



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
            { ...taskItem, completed: !taskItem.completed, completed_date: (taskItem.completed_date === null ? new Date().toISOString().split('T')[0] : null) } :
            { ...taskItem, title: newTask.title, due_date: newTask.due_date === '' ? null : newTask.due_date, task_type: newTask.size, description: newTask.description, task_level: newTask.level }


        // Has the user recieved a candy for this task already?
        if (taskItemChanged.completed === true && taskItemChanged.received === false) {
            determineReward(taskItemChanged)
        }

        axiosPrivate.put(`${baseURL}${id}/`, taskItemChanged)
            .then(r => {
                setTaskList(taskList.map(t => t.task_id === id ? r.data : t))
            })
    }

    // Task mark as completed and user has never recieved a candy for this task. Give corresponding candy.
    let determineReward = (task) => {
        // Look for candy coresponding to task in inventory that is not locked
        let candy = contextHandlers?.inventory.find(candy => candy.candy_base_type === task.task_type && candy.candy_level === task.task_level && candy.quantity !== "L")
        // Does candy exist in inventory
        if (candy !== undefined) {
            // Give a candy, update backend, and set state
            candy.quantity += 1
            axiosPrivate.put(`/inventory/${candy.inventory_id}/`, candy)
                .then(r => {
                    contextHandlers.setInventory(contextHandlers.inventory.map(c => c.inventory_id === candy.inventory_id ? r.data : c))
                })

            task.received = true
            axiosPrivate.put(`/tasks/${task.task_id}/`, task)
                .then(r => {
                    setTaskList(taskList.map(t => t.task_id === task.task_id ? r.data : t))
                })

        }
        else {
            // Create candy, post to backend, and set state
            let newCandy = {
                candy_base_type: task.task_type,
                candy_level: task.task_level,
                quantity: 1,
            }

            // Update locked candy in inventory
            contextHandlers?.createInventoryItem(newCandy)
                .then(r => {
                    let candy = contextHandlers?.inventory.find((c) => c.candy_base_type === r.candy_base_type && c.candy_level === r.candy_level);
                    console.log(candy);
                    console.log(r);
                    candy.inventory_id = r.inventory_id;
                    candy.quantity = r.quantity;
                    // candyList.push(r)
                    // contextHandlers?.setInventory([...contextHandlers?.inventory, ...candyList])
                })

            task.received = true
            axiosPrivate.put(`/tasks/${task.task_id}/`, task)
                .then(r => {
                    setTaskList(taskList.map(t => t.task_id === task.task_id ? r.data : t))
                })
        }
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
                        {isMobile ?
                        < InventoryBoxMobile /> : < InventoryBox />}
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