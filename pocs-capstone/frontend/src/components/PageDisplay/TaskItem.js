
import './PageDisplay.css'
import ListGroup from 'react-bootstrap/ListGroup';


const TaskItem = ({task}) => {
    return (
        <ListGroup.Item className='outline-that'>
            {task.title}
            <br/>
            <br/>
            <br/>
            <br/>
            {task.taskId}      
        </ListGroup.Item>
    )
}


export default TaskItem