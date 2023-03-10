
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem'
import TaskListContext from '../../context/TaskListContext'
import { useContext } from 'react'
// { taskList, handleCompleteCheck, deleteTask }
const TaskList = () => {
    const handlers = useContext(TaskListContext)

    if (handlers?.taskList?.length === 0) {
        return (
            <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    No tasks yet.
                </ListGroup.Item>
            </ListGroup>
        )
    }

    return (
        <ListGroup className="task-scroll">
            {handlers.taskList.map(t => <TaskItem key={t.task_id} task={t} updateTask={handlers.updateTask} deleteTask={handlers.deleteTask}/>)}
        </ListGroup>

    )
}


export default TaskList