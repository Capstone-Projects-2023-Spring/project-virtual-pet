import './PageDisplay.css'
import './TaskPage.css'
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList'
import { useState } from 'react';
import { Tab, Tabs, Button, Stack, Card } from 'react-bootstrap';

// { taskList, newTitle, newDesc, newSize, newDate, setAvatarInfo, setInventory, setTaskList, handleCompleteCheck, handleTitleChange, handleDescChange, handleSizeChange, handleDateChange, addTask, deleteTask }
const TaskPage = () => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [filterTodo, setFilterTodo] = useState('all')
    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    return (
        <div className="mini-page">
            <Card className='tasklist-position'>
                <Card.Header>
                    <Stack direction="horizontal" gap={3}>

                        <div className='to-do-header'>
                            TO-DO
                        </div>
                        <div className="ms-auto">
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="all"
                                activeKey={filterTodo}
                                onSelect={(f) => {
                                    setFilterTodo(f)
                                }}

                                className="mb-3 to-tabs">
                                <Tab eventKey="all" title="Active">
                                    {/* <Sonnet /> */}
                                </Tab>
                                <Tab eventKey="completed" title="Completed">
                                    {/* <Sonnet /> */}
                                </Tab>

                            </Tabs>
                        </div>

                        <div>
                            <Button variant="primary" onClick={handleShow}>+ Create Task</Button>
                        </div>
                    </Stack>
                </Card.Header>

                <TaskList filter={filterTodo} />

            </Card>

            <CreateTaskForm {...{ showCreateTask, handleClose }} />
            {/* <CreateTaskForm {...{ showCreateTask, handleClose, newTitle, newDesc, newSize, newDate, handleTitleChange, handleDescChange, handleSizeChange, handleDateChange, addTask }} /> */}

        </div>






        // <div className="grid-page">
        //     <Card>
        //         <Card.Header>
        //             <div className="grid-header">
        //                 <div className='to-do-header box1-header'>
        //                     TO-DO
        //                 </div>
        //                 <div className="box2-header">
        //                     <Tabs
        //                         id="controlled-tab-example"
        //                         defaultActiveKey="all"
        //                         activeKey={filterTodo}
        //                         onSelect={(f) => {
        //                             setFilterTodo(f)
        //                         }}

        //                         className="mb-3 to-tabs">
        //                         <Tab eventKey="all" title="Active" />
        //                         <Tab eventKey="completed" title="Completed" />

        //                     </Tabs>
        //                 </div>
        //                 <div className="box3-header">
        //                     <Button variant="primary" onClick={handleShow}>+ Create Task</Button>
        //                 </div>

        //             </div>

        //         </Card.Header>

        //             <TaskList filter={filterTodo} />



        //     </Card>


        //     <CreateTaskForm {...{ showCreateTask, handleClose }} />

        // </div>


    )
}

export default TaskPage


// <Card className='tasklist-position'>
// <Card.Header>
//     <Stack direction="horizontal" gap={3}>

//         <div className='to-do-header'>
//             TO-DO
//         </div>
//         <div className="ms-auto">
//             <Tabs
//                 id="controlled-tab-example"
//                 defaultActiveKey="all"
//                 activeKey={filterTodo}
//                 onSelect={(f) => {
//                     setFilterTodo(f)
//                 }}

//                 className="mb-3 to-tabs">
//                 <Tab eventKey="all" title="Active">
//                     {/* <Sonnet /> */}
//                 </Tab>
//                 <Tab eventKey="completed" title="Completed">
//                     {/* <Sonnet /> */}
//                 </Tab>

//             </Tabs>
//         </div>

//         <div>
//             <Button variant="primary" onClick={handleShow}>+ Create Task</Button>
//         </div>
//     </Stack>
// </Card.Header>

// <TaskList filter={filterTodo} />

// </Card>