
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem'

const TaskList = ({ taskList }) => {

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
            {taskList.map(t => <TaskItem key={t.assignment_id} task={t} />)}
        </ListGroup>

    )
}


export default TaskList