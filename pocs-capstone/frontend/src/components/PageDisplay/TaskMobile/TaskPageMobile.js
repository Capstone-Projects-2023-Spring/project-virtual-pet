import '../PageDisplay.css'
import CreateTaskFormMobile from './CreateTaskFormMobile';
import TaskListMobile from './TaskListMobile'
import UserContext from "../../../context/UserContext";
import { useState, useContext } from 'react';
import { Tab, Tabs, Button, Stack, Card, Dropdown, Form, ListGroup } from 'react-bootstrap';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const TaskPageMobile = () => {
    const userHandler = useContext(UserContext)
    const axiosPrivate = useAxiosPrivate()
    const [selectedTags, setSelectedTags] = useState([])
    const [taskTypes, setTaskTypes] = useState([])
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [filterTodo, setFilterTodo] = useState(true)

    const handleClose = () => setShowCreateTask(false);
    const handleShow = () => setShowCreateTask(true);

    const deleteTagGlobal = (tagItem) => {
        const newTags = userHandler?.userInfo?.tags?.filter(tag => tag !== tagItem)
        const updatedUser = {
            ...userHandler?.userInfo,
            tags: newTags
        }
        axiosPrivate.patch(`/user-data/${updatedUser.id}/`, updatedUser)
            .then((response) => {
                userHandler?.setUserInfo(response.data)
                setSelectedTags(selectedTags.filter(tag => tag !== tagItem))
            })
            .catch((err) => {
                console.log(err);
            });

    }
    const handleTagCheck = (e, tagItem) => {
        if (e.target.checked && !selectedTags.find(t => t === tagItem)) {
            setSelectedTags(selectedTags.concat(tagItem))
        }
        else {
            setSelectedTags(selectedTags.filter(t => t !== tagItem))
        }
    }

    const getChecked = (tagItem) => {
        // if tagItem exists in the selectedTags list, it has been checked off. Return true.
        return selectedTags.find(t => t === tagItem) ? true : false
    }

    const handleTaskCheck = (e, typeItem) => {
        if (e.target.checked && !taskTypes.find(type => type === typeItem)) {
            setTaskTypes(taskTypes.concat(typeItem))
        }
        else {
            setTaskTypes(taskTypes.filter(type => type !== typeItem))
        }
    }

    return (

        <div className="mini-page" style={{ marginBottom: "20px" }} >
            <Card className='tasklist-position' >
                <Card.Header >

                    {/* <div className="ms-auto"> */}
                    <Stack direction="horizontal">
                        <div>
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="all"
                                activeKey={filterTodo === true ? 'all' : 'completed'}
                                onSelect={(f) => {
                                    setFilterTodo(f === 'all' ? true : false)
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
                        <div className="ms-auto">
                            <Dropdown className="d-inline mx-2" autoClose="outside">
                                <Dropdown.Toggle id="dropdown-autoclose-outside">
                                    Tags
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Form onSubmit={e => e.preventDefault()}>
                                        <Stack direction="horizontal">
                                            <Form.Check type="checkbox" label='Canvas Assignemnts' onChange={(e) => { handleTaskCheck(e, 'canvas') }} />
                                            <Form.Check type="checkbox" label='My Tasks' onChange={(e) => { handleTaskCheck(e, 'usertasks') }} />
                                        </Stack>

                                    </Form>
                                    <ListGroup>
                                        {userHandler?.userInfo?.tags?.map((tagItem, index) => {
                                            return (
                                                <ListGroup.Item key={index}>
                                                    <Form onSubmit={e => e.preventDefault()}>
                                                        <Form.Check checked={getChecked(tagItem)} type="checkbox" label={tagItem} onChange={(e) => { handleTagCheck(e, tagItem) }} />
                                                        <Button onClick={() => deleteTagGlobal(tagItem)}>x</Button>
                                                    </Form>
                                                </ListGroup.Item>
                                            )
                                        })}
                                        <Form onSubmit={e => e.preventDefault()}>
                                            <Button onClick={() => setSelectedTags([])}>Clear Tags</Button>
                                        </Form>
                                    </ListGroup>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div>
                            <Button variant="primary" onClick={handleShow}>+</Button>

                        </div>



                    </Stack>



                </Card.Header>

                <TaskListMobile showAll={filterTodo} filterTags={selectedTags} filterTaskType={taskTypes} />

            </Card>

            <CreateTaskFormMobile {...{ showCreateTask, handleClose }} />

        </div>
    )
}

export default TaskPageMobile