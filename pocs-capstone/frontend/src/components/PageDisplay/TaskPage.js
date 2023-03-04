import './PageDisplay.css'
import TabContent from 'react-bootstrap/TabContent'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import TaskItem from './TaskItem'
import Stack from 'react-bootstrap/Stack';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateTaskForm from './CreateTaskForm';
import {useState} from 'react';

const TaskPage = ({taskList, setAvatarInfo, setInventory, setTaskList}) => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    return (
        <div className="mini-page">
            <Card className='tasklist-position'>
                <Card.Header>
                <Stack direction="horizontal" gap={3}>
                    <div>
                    TO-DO
                    </div>
                    <div className="ms-auto">
                    <Button variant="primary" onClick={handleShow}>+ Create Task</Button>
                    </div>
                </Stack>
                </Card.Header>

                <ListGroup variant="flush" className="task-scroll">
                    {taskList.map( t => <TaskItem key={t.taskId} task={t} />)}
                </ListGroup>

                
            </Card>

            <CreateTaskForm show={showCreateTask} hide={handleClose}/>
        </div>
    )
}

export default TaskPage