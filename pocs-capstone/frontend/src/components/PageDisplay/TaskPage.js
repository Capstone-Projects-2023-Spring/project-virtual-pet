import './PageDisplay.css'
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList'
import { useState } from 'react';



// { taskList, newTitle, newDesc, newSize, newDate, setAvatarInfo, setInventory, setTaskList, handleCompleteCheck, handleTitleChange, handleDescChange, handleSizeChange, handleDateChange, addTask, deleteTask }
const TaskPage = () => {
    const [showCreateTask, setShowCreateTask] = useState(false);

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    // console.log("??", taskList)
    return (
        <div className="mini-page">
            <Card className='tasklist-position'>
                <Card.Header>
                    <Stack direction="horizontal" gap={3}>
                        <div className='to-do-header'>
                            TO-DO:
                        </div>
                        <div className="ms-auto">
                            <Button variant="primary" onClick={handleShow}>+ Create Task</Button>
                        </div>
                    </Stack>
                </Card.Header>

                <TaskList/>
                
            </Card>

            <CreateTaskForm {...{ showCreateTask, handleClose }}/>
        </div>
    )
}

export default TaskPage