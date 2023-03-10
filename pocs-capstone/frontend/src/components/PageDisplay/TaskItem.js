
import './PageDisplay.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import CloseButton from 'react-bootstrap/CloseButton';
import CreateTaskForm from './CreateTaskForm';

import { useState } from 'react'

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [showCreateTask, setShowCreateTask] = useState(false);

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    const calculateDueDate = (date) => {
        const today_date = new Date()
        const due_date = new Date(`${date}T00:00:00`)
        const year_diff = due_date.getYear() - today_date.getYear()
        const mon_diff = due_date.getMonth() - today_date.getMonth()

        // console.log("date", today_date, year_diff, mon_diff, due_date)
        // MAKE TEXT DIFFERENT FOR DUE DATES FROM BEFORE 
        if (mon_diff === 0 && year_diff === 0) {

            const date_diff = Math.round((Date.parse(due_date) - Date.parse(today_date)) / 86400000) + 1
            return date_diff > 0 ? (date_diff === 1 ? `in ${date_diff} day` : `in ${date_diff} days`) : `Today`
        }
        if (mon_diff > 0 && mon_diff < 12 && year_diff === 0) {
            return mon_diff === 1 ? `in ${mon_diff} month` : `in ${mon_diff} months`
        }
        else {
            return year_diff === 1 ? `in ${year_diff} year` : `in ${year_diff} years`
        }
    }

    return (

        <>
            {
                task.course_id!==0 && task.assignment_id!==0 ?
                    (
                        <>
                            <ListGroup horizontal='sm' className="my-2 list-group-task">
                                <ListGroup.Item className='course-id'>
                                    <div>
                                     
                                        <div className="fw-bold">Course {task.course_id}</div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='task-item'>

                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold task-title task-description">{task.title}</div>
                                        <div className='task-description'>{task.description}</div>
                                        <div>Due {calculateDueDate(task.due_date)}</div>
                                    </div>
                                </ListGroup.Item>
                                {/* remove this list group item if it's a canvas task, have for testing purposes */}
                                {/* <ListGroup.Item className="close-box-task">
                                    <div>
                                        <CloseButton onClick={() => deleteTask(task.task_id)} />
                                    </div>
                                </ListGroup.Item>
                                 */}
                            </ListGroup >
                            <CreateTaskForm {...{ showCreateTask, handleClose, task }} />
                        </>
                    ) :

                    (
                        <>
                            <ListGroup horizontal='sm' className="my-2 list-group-task">
                                <ListGroup.Item className='check-box-task'>
                                    <div>
                                        <Form>
                                            <div key="default-checkbox" className="mb-3">
                                                <Form.Check defaultChecked={task.completed} type="checkbox" id="default-checkbox" onClick={() => { updateTask(task.task_id) }} />
                                            </div>
                                        </Form>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='task-item' action onClick={handleShow}>

                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold task-title task-description">{task.title}</div>
                                        <div className='task-description'>{task.description}</div>
                                        <div>Due {calculateDueDate(task.due_date)}</div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="close-box-task">
                                    <div>
                                        <CloseButton onClick={() => deleteTask(task.task_id)} />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup >
                            <CreateTaskForm {...{ showCreateTask, handleClose, task }} />
                        </>
                    )
            }
        </>

    )
}


export default TaskItem