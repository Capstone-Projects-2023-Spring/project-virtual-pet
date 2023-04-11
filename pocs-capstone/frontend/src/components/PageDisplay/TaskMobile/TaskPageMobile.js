import '../PageDisplay.css'
import CreateTaskFormMobile from './CreateTaskFormMobile';
import TaskListMobile from './TaskListMobile'
import { useState } from 'react';
import { Tab, Tabs, Button, Stack, Card } from 'react-bootstrap';

const TaskPageMobile = () => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [filterTodo, setFilterTodo] = useState('all')

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    return (

        <div className="mini-page" style={{marginBottom: "20px"}} >
            <Card className='tasklist-position' >
                <Card.Header >

                    {/* <div className="ms-auto"> */}
                    <Stack direction="horizontal">
                        <div>
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="all"
                                activeKey={filterTodo}
                                onSelect={(f) => {
                                    setFilterTodo(f)
                                }}
                                fill
                                className="mb-6 to-tabs-mobile">

                                <Tab eventKey="all" title="Active">
                                    {/* <Sonnet /> */}
                                </Tab>
                                <Tab eventKey="completed" title="Completed" className="ms-auto">
                                    {/* <Sonnet /> */}
                                </Tab>

                            </Tabs>

                        </div>
                        <div className='ms-auto'>
                            <Button variant="primary" onClick={handleShow}>+</Button>

                        </div>



                    </Stack>



                </Card.Header>

                <TaskListMobile filter={filterTodo} />

            </Card>

            <CreateTaskFormMobile {...{ showCreateTask, handleClose }} />

        </div>
    )
}

export default TaskPageMobile