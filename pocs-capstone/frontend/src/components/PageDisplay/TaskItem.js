
import './PageDisplay.css'
import { CloseButton, Stack, Badge, Form, ListGroup } from 'react-bootstrap';
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
        const date_diff = Math.round((Date.parse(due_date) - Date.parse(today_date)) / 86400000) + 1

        const [mag, format] = (mon_diff === 0 && year_diff === 0) ? [date_diff, 'day'] : mon_diff < 12 && year_diff === 0 ? [mon_diff, 'month'] : [year_diff, 'year']
        return mag > 0 ? (mag === 1 ? `in ${mag} ${format}` : `in ${mag} ${format}s`) : mag < 0 ? (mag === -1 ? `${Math.abs(mag)} ${format} ago` : `${Math.abs(mag)} ${format}s ago`) : ``

    }

    return (

        <>
            {/* <ListGroup horizontal='sm' className="my-2 list-group-task"> */}

                    <div>
                        <Form>
                            <div key="default-checkbox" className="mb-3">
                                <Form.Check defaultChecked={task.completed} type="checkbox" id="default-checkbox" onClick={() => { updateTask(task.task_id) }} />
                            </div>
                        </Form>
                    </div>

                {/* <ListGroup.Item className='task-item' action onClick={handleShow}> */}
                    <div className="ms-2 me-auto">
                        <div className="fw-bold task-description">
                            <Stack direction="horizontal" gap={2}>
                                <div className='task-title'>{task.title}</div>
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
                {/* </ListGroup.Item> */}
                {/* <ListGroup.Item className="close-box-task"> */}
                    <div>
                        <CloseButton onClick={() => deleteTask(task.task_id)} />
                    </div>
                {/* </ListGroup.Item> */}
            {/* </ListGroup > */}
            <CreateTaskForm {...{ showCreateTask, handleClose, task }} />
        </>

    )
}


export default TaskItem