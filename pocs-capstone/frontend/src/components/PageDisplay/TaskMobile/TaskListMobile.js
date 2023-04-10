
import { ListGroup, Stack, Button } from 'react-bootstrap';
import TaskItemMobile from './TaskItemMobile'
import GlobalContext from '../../../context/GlobalContext'
import { useContext } from 'react'

const TaskListMobile = ({ filter }) => {
    const handlers = useContext(GlobalContext)
    const showTasks = filter === 'all' ?
        handlers?.taskList.filter(task => !task.completed) :
        handlers?.taskList.filter(task => task.completed)

    if (showTasks.length === 0) {
        return (
            <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    No tasks!
                </ListGroup.Item>
            </ListGroup>
        )
    }

    return (
        <>
            {filter === 'completed' ?
                (
                    <div className='delete-com-tasks "mb-2"'>
                        <Stack className="col-md-5 mx-auto">
                            <Button variant="outline-danger" size="sm" onClick={() => handlers?.deleteAllTasks(showTasks)}>Delete ALL Completed</Button>
                        </Stack>

                    </div>

                ) : null}

                <ListGroup className="task-scroll-mobile">
                    {showTasks.map(t => <TaskItemMobile key={t.task_id} task={t} updateTask={handlers.updateTask} deleteTask={handlers.deleteTask} />)}
                </ListGroup>




        </>
    )

}


export default TaskListMobile