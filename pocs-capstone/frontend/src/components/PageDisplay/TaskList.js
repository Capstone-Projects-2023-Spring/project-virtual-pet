
import { ListGroup, Stack, Button, Toast, ToastContainer } from 'react-bootstrap';
import TaskItem from './TaskItem'
// import TaskListContext from '../../context/TaskListContext'
import GlobalContext from "../../context/GlobalContext.js";
import { useContext, useState } from 'react'

const TaskList = ({ filter }) => {
   
    const [otherToast, setOtherToast] = useState(0)
    const handlers = useContext(GlobalContext)
    const showTasks = filter === 'all' ?
        handlers?.taskList.filter(task => !task.completed) :
        handlers?.taskList.filter(task => task.completed)

    // updateTask={handlers.updateTask} deleteTask={handlers.deleteTask} setShowToast={setShowToast} setTimeLeft={setTimeLeft}
    const taskListHandlers = {
        updateTask: handlers.updateTask,
        deleteTask: handlers.deleteTask,
        setOtherToast: setOtherToast,
        otherToast: otherToast 
    }

    console.log("Total toasts", otherToast)

    return (
        <>
            {
                showTasks.length === 0 ?
                    <ListGroup variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                            No tasks!
                        </ListGroup.Item>
                    </ListGroup>
                    :
                    <>
                        {/* <ToastContainer position='top-end' className="p-3">
                            <Toast onClose={() => setShowToast(false)} show={showToast} delay={delayToast} autohide>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Tasks</strong>
                                    <small className="text-muted">just now</small>
                                </Toast.Header>
                                <Toast.Body>
                                    You can't complete this task just yet! 
                                    <p>Wait at least <b>{timeLeft}</b> to complete this task.</p>

                                </Toast.Body>
                            </Toast>
                        </ToastContainer> */}

                        {filter === 'completed' ?
                            (
                                <div className='delete-com-tasks "mb-2"'>
                                    <Stack className="col-md-5 mx-auto">
                                        <Button variant="outline-danger" size="sm" onClick={() => handlers?.deleteAllTasks(showTasks)}>Delete ALL Completed</Button>
                                    </Stack>

                                </div>

                            ) : null}

                        <ListGroup className="task-scroll">
                            {/* updateTask={handlers.updateTask} deleteTask={handlers.deleteTask} setShowToast={setShowToast} setTimeLeft={setTimeLeft} */}
                            {showTasks.map(t => <TaskItem key={t.task_id} task={t} {...taskListHandlers} />)}
                        </ListGroup>
                    </>

            }
        </>
    )

}


export default TaskList