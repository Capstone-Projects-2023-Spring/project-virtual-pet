
import './PageDisplay.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import CreateTaskForm from './CreateTaskForm';

import { useState } from 'react'

const TaskItem = ({ task, updateTask, deleteTask }) => {

    const [showCreateTask, setShowCreateTask] = useState(false);

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);


    // const


    const calculateDueDate = (date) => {
        const today_date = new Date()
        const due_date = new Date(`${date}T00:00:00`)
        const year_diff = due_date.getYear() - today_date.getYear()
        const mon_diff = due_date.getMonth() - today_date.getMonth()

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

    // console.log("TASK DETAILS", task)


    return (

        <>
            <ListGroup horizontal='sm' className="my-2 list-group-task">
                <div className='check-box-task'>
                    <ListGroup.Item>

                        <Form>
                            <div key="default-checkbox" className="mb-3">
                                <Form.Check defaultChecked={task.completed} type="checkbox" id="default-checkbox" onClick={() => { updateTask(task.task_id) }} />
                            </div>
                        </Form>

                    </ListGroup.Item>
                </div>
                <ListGroup.Item className='task-item' action onClick={handleShow}>
                    <Stack direction="horizontal" gap={3}>




                        <div className="ms-2 me-auto">
                            {/* <ListGroup.Item onClick={handleShow}> */}
                            <div className="fw-bold task-title">{task.title}</div>
                            <div>Due {calculateDueDate(task.due_date)}</div>

                            {/* </ListGroup.Item> */}
                        </div>



                    </Stack>

                </ListGroup.Item>
                
                    <ListGroup.Item className="close-box-task">
                    <div>
                        <CloseButton onClick={() => deleteTask(task.task_id)} />
                        </div>

                    </ListGroup.Item>
                
            </ListGroup>

            <CreateTaskForm {...{ showCreateTask, handleClose, task  }}/>


        </>





    )
}


export default TaskItem