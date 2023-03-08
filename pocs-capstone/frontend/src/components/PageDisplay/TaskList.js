
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem'

const TaskList = ({ taskList, handleCompleteCheck }) => {

    if (taskList.length == 0) {
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
            {taskList.map(t => <TaskItem key={t.task_id} task={t} handleCompleteCheck={handleCompleteCheck}/>)}
        </ListGroup>

    )
}


export default TaskList