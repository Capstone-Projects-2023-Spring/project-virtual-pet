
// import './PageDisplay.css'
import { CloseButton, Stack, Badge, Form, ListGroup } from 'react-bootstrap';
import CreateTaskFormMobile from './CreateTaskFormMobile';
import TaskNotice from './TaskNoticeMobile'
import { useState } from 'react';
import "./TaskPageMobile.css";

const TaskItemMobile = ({ task, updateTask, deleteTask }) => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [showNotice, setShowNotice] = useState(false)

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    const calculateDueDate = (date) => {
        const today_date = new Date()
        const due_date = new Date(`${date}T00:00:00`)
        const year_diff = due_date.getYear() - today_date.getYear()
        const mon_diff = due_date.getMonth() - today_date.getMonth()
        const date_diff = Math.round((Date.parse(due_date) - Date.parse(today_date)) / 86400000) + 1

        const [mag, format] = (mon_diff === 0 && year_diff === 0) ? [date_diff, 'day'] : mon_diff < 12 && year_diff === 0 ? [mon_diff, 'month'] : [year_diff, 'year']
        return mag > 0 ? (mag === 1 ? `in ${mag} ${format}` : `in ${mag} ${format}s`) : mag < 0 ? (mag === -1 ? `${Math.abs(mag)} ${format} ago` : `${Math.abs(mag)} ${format}s ago`) : ``

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
            "S": 1 / 60,
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

    const computeStyle = `mb-3 checkbox-mobile ${task.completed ? "completed-checkbox" : "noncompleted-checkbox"}`

    return (

        <>
            {
                task.course_id !== 0 && task.assignment_id !== 0 ?
                    (
                        <>
                            <ListGroup horizontal className="my-2 list-group-task">
                                {/* <ListGroup.Item className='course-id-mobile'>
                                    <div>

                                        <div className="fw-bold">Course {task.course_id}</div>
                                    </div>
                                </ListGroup.Item> */}
                                <ListGroup.Item className='task-item'>
                                    <div className="ms-2 me-auto">
                                        <div>
                                            <div className="fw-bold task-title-mobile task-description">{task.title}</div>
                                            <div className="task-description-mobile">Course: {task.course_title}</div>
                                            <div className='task-description-mobile'>{task.description}</div>
                                            {task.due_date ?
                                                <div className='due-date-mobile'>Due {calculateDueDate(task.due_date)}</div> :
                                                <></>
                                            }

                                        </div>

                                    </div>

                                </ListGroup.Item>
                                {
                                    task.completed ?
                                        <ListGroup.Item className="close-box-task-mobile">
                                            <CloseButton onClick={() => deleteTask(task.task_id)} />
                                        </ListGroup.Item>
                                        :
                                        <></>
                                }
                            </ListGroup >
                            <CreateTaskFormMobile {...{ showCreateTask, handleClose, task }} />
                        </>
                    ) :

                    (
                        <>
                            <ListGroup horizontal className="my-2 list-group-task">
                                <ListGroup.Item className='check-box-task-mobile' style={task.completed ? { backgroundColor: `rgba(233, 233, 233, 0.352)` } : { backgroundColor: `rgba(233, 139, 139, 0.352)` }}>

                                    <Form>
                                        <div key="default-checkbox" className={computeStyle}>
                                            <Form.Check checked={task.completed} onChange={e => { }} type="checkbox" id="default-checkbox" onClick={() => { completeTask(task) }} />
                                        </div>
                                    </Form>

                                </ListGroup.Item>
                                <ListGroup.Item className='task-item-mobile' action onClick={handleShow}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold task-description">

                                            <Stack direction="horizontal" gap={1}>

                                                <div className='task-title-mobile'>{task.title}</div>
                                                <div className='task-badge-mobile'><Badge bg="secondary">Size: {task.task_type}</Badge></div>
                                                <div className='task-badge-mobile'><Badge bg="secondary">Level: {task.task_level}</Badge></div>
                                            </Stack>
                                        </div>
                                        <div className='task-description-mobile'>{task.description}</div>

                                        {task.due_date ?
                                            <div className='due-date-mobile'>Due {calculateDueDate(task.due_date)}</div> :
                                            <></>
                                        }
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="close-box-task-mobile">

                                    <CloseButton onClick={() => deleteTask(task.task_id)} />

                                </ListGroup.Item>
                            </ListGroup >
                            <CreateTaskFormMobile {...{ showCreateTask, handleClose, task }} />
                            <TaskNotice showNotice={showNotice} setShowNotice={setShowNotice} task={task} />
                        </>
                    )
            }
        </>

    )
}


export default TaskItemMobile