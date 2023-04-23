
import './PageDisplay.css'
import { CloseButton, Stack, Badge, Form, ListGroup } from 'react-bootstrap'
import CreateTaskForm from './CreateTaskForm'
import TaskNotice from './TaskNotice'
import UserContext from "../../context/UserContext";
import { useState, useContext, useEffect } from 'react'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TaskItem = ({ task, updateTask, deleteTask, setTaskList, taskList }) => {

    console.log('LOADING TASK', task)
    const axiosPrivate = useAxiosPrivate();
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [showNotice, setShowNotice] = useState(false)
    // const [tags, setTags] = useState(task?.tags)
    const userHandler = useContext(UserContext)

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    const calculateDueDate = (date) => {
        const today_date = new Date()
        const due_date = new Date(`${date}T00:00:00`)

        // console.log(today_date, due_date)
        const year_diff = due_date.getYear() - today_date.getYear()
        const mon_diff = due_date.getMonth() - today_date.getMonth()
        const date_diff = Math.round((Date.parse(due_date) - Date.parse(today_date)) / 86400000) + 1

        const [mag, format] = (mon_diff <= 1 && year_diff === 0) ? [date_diff, 'day'] : mon_diff < 12 && year_diff === 0 ? [mon_diff, 'month'] : [year_diff, 'year']

        // console.log("mag and format", mag, format)
        const dueD = mag > 0 ? (mag === 1 ? `in ${mag} ${format}` : `in ${mag} ${format}s`) : mag < 0 ? (mag === -1 ? `${Math.abs(mag)} ${format} ago` : `${Math.abs(mag)} ${format}s ago`) : `Today`

        return dueD

    }

    const completeTask = (taskItem) => {

        // Ranges: 
        // SMALL: 0-1 hour
        // MEDIUM: 1-4 hour(s)
        // LARGE: 4-72 hours
        // CAKE: 72-168 hours
        // Users should have at LEAST spent the lower range amount of time with a task before being able to complete it 
        // make users wait for 1 minute before they're able to complete a small task?

        const timeRequired = {
            "S": 0,
            "M": 1,
            "L": 4,
            "C": 72
        }

        // Hours difference between when the task was created and now 
        const hourDiff = Math.abs((new Date()) - new Date(taskItem.created_date)) / 36e5;
        const canComplete = taskItem.received ? true : hourDiff >= timeRequired[taskItem.task_type] ? true : false
        // console.log("ALREADY RECEIVED ITEM / FINISHED TASK BEFORE?", taskItem.received, "CAN THIS BE COMPLETED", canComplete, "HOURS SINCE CREATED:", hourDiff, "TASK SIZE:", taskItem.task_type, "HOURS NEEDED TO COMPLETE TASK TYPE", timeRequired[taskItem.task_type])
        if (canComplete === true) {
            updateTask(taskItem.task_id)

        }
        else {
            setShowNotice(true)
        }

    }

    const computeStyle = `mb-3 ${task.completed ? "completed-checkbox" : "noncompleted-checkbox"}`

    return (

        <>
            {
                task.course_id !== 0 && task.assignment_id !== 0 ?

                    <>
                        <ListGroup horizontal className="my-2 list-group-task">
                            {/* <ListGroup.Item className='course-id'>
                        <div>
                            <div className="fw-bold">Course {task.course_id}</div>
                        </div>
                    </ListGroup.Item> */}
                            <ListGroup.Item className='task-item'>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold task-title task-description">{task.title}</div>
                                    <div className="task-description">Course: {task.course_title}</div>
                                    <div className='task-description'>{task.description}</div>
                                    {task.due_date ?
                                        <div className='due-date'>Due {calculateDueDate(task.due_date)}</div> :
                                        <></>
                                    }
                                </div>
                            </ListGroup.Item>
                            {
                                task.completed ?
                                    <ListGroup.Item className="close-box-task">
                                        <CloseButton onClick={() => deleteTask(task.task_id)} />
                                    </ListGroup.Item>
                                    :
                                    <></>
                            }
                        </ListGroup >
                        <CreateTaskForm {...{ showCreateTask, handleClose, task }} />
                    </>
                    :


                    <>
                        <ListGroup horizontal className="my-2 list-group-task">
                            <ListGroup.Item className='check-box-task' style={task.completed ? { backgroundColor: `rgba(233, 233, 233, 0.352)` } : { backgroundColor: `rgba(233, 139, 139, 0.352)` }}>
                                <Form >
                                    <div key="default-checkbox" className={computeStyle}>
                                        {/* <div key="default-checkbox" className="mb-3 noncompleted-checkbox"> */}
                                        {/* (!canCompleteTask && !task.completed) */}
                                        <Form.Check checked={task.completed} onChange={e => { }} type="checkbox" id="default-checkbox" onClick={() => { completeTask(task) }} />
                                    </div>
                                </Form>
                            </ListGroup.Item>
                            <ListGroup.Item className='task-item' action onClick={handleShow}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold task-description">
                                        <Stack direction="horizontal" gap={2}>
                                            <div className='task-title'>{task.title}</div>
                                            <div>{task.tags}</div>
                                            <div><Badge bg="secondary">Size: {task.task_type}</Badge></div>
                                            <div><Badge bg="secondary">Level: {task.task_level}</Badge></div>
                                        </Stack>
                                    </div>
                                    <div className='task-description'>{task.description}</div>

                                    {task.due_date ?
                                        <div className='due-date'>Due {calculateDueDate(task.due_date)}</div> :
                                        <></>
                                    }
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="close-box-task">
                                <CloseButton onClick={() => deleteTask(task.task_id)} />

                            </ListGroup.Item>

                        </ListGroup >
                        <CreateTaskForm showCreateTask={showCreateTask} handleClose={handleClose} task={task} />
                        <TaskNotice showNotice={showNotice} setShowNotice={setShowNotice} task={task} />
                    </>
            }
        </>

    )
}


export default TaskItem