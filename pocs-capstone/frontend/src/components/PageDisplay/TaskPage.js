import './PageDisplay.css'
import './TaskPage.css'
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList'
import UserContext from "../../context/UserContext";
import { useState, useContext } from 'react';
import { Tab, Tabs, Button, Stack, Card, Dropdown, Form, ListGroup} from 'react-bootstrap';

// { taskList, newTitle, newDesc, newSize, newDate, setAvatarInfo, setInventory, setTaskList, handleCompleteCheck, handleTitleChange, handleDescChange, handleSizeChange, handleDateChange, addTask, deleteTask }
const TaskPage = () => {
    const userHandler = useContext(UserContext)
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
                        <div>
                            <Dropdown className="d-inline mx-2" autoClose="outside">
                                <Dropdown.Toggle id="dropdown-autoclose-outside">
                                    Tags
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <ListGroup>

                                        {userHandler?.userInfo?.tags?.map((tagItem, index) => {
                                            return (
                                                // <Dropdown.Item key={index} href="#">
                                                <ListGroup.Item key = {index}>
                                                    <Form>
                                                        <Form.Check type="checkbox" label={tagItem} />

                                                    </Form>

                                                </ListGroup.Item>


                                                // </Dropdown.Item>
                                            )
                                        })}
                                    </ListGroup>
                                    {/* <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>

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

        </div>
    )
}

export default TaskPage
