
import './PageDisplay.css'
import ListGroup from 'react-bootstrap/ListGroup';


const TaskItem = ({task}) => {
    return (
        <ListGroup.Item className='outline-that'>{task.title}</ListGroup.Item>
    )
}


export default TaskItem