

import '../PageDisplay.css'
import CreateTaskForm from '../CreateTaskForm';
import TaskListMobile from './TaskListMobile'
import { useState } from 'react';
import { Tab, Tabs, Button, Stack, Card } from 'react-bootstrap';


// { taskList, newTitle, newDesc, newSize, newDate, setAvatarInfo, setInventory, setTaskList, handleCompleteCheck, handleTitleChange, handleDescChange, handleSizeChange, handleDateChange, addTask, deleteTask }
const TaskPageMobile = () => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [filterTodo, setFilterTodo] = useState('all')

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    return (

        <div className="mini-page">
            <Card className='tasklist-position'>
                <Card.Header>
                    {/* <div className="ms-auto"> */}
                    <Tabs
                        id="controlled-tab-example"
                        defaultActiveKey="all"
                        activeKey={filterTodo}
                        onSelect={(f) => {
                            setFilterTodo(f)
                        }}
                        fill
                        className="mb-6 to-tabs">

                        <Tab eventKey="all" title="Active">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="completed" title="Completed" className="ms-auto">
                            {/* <Sonnet /> */}
                        </Tab>

                    </Tabs>

                </Card.Header>

                <TaskListMobile filter={filterTodo} />

            </Card>

            <CreateTaskForm {...{ showCreateTask, handleClose }} />

        </div>
    )
}

export default TaskPageMobile