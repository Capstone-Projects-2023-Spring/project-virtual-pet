import '../PageDisplay.css'
import CreateTaskFormMobile from './CreateTaskFormMobile';
import TaskListMobile from './TaskListMobile'
import UserContext from "../../../context/UserContext";
import { useState, useContext } from 'react';
import { Tab, Tabs, Button, Stack, Card, Dropdown, Form, ListGroup, CloseButton } from 'react-bootstrap';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const TaskPageMobile = () => {
    const userHandler = useContext(UserContext)
    const axiosPrivate = useAxiosPrivate()
    const [selectedTags, setSelectedTags] = useState([])
    const [taskTypes, setTaskTypes] = useState([])
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [filterTodo, setFilterTodo] = useState(true)

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

    const getCheckedType = (tagItem) => {

        // if tagItem exists in the selectedTags list, it has been checked off. Return true.
        return taskTypes.find(t => t === tagItem) ? true : false
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
                        {/* <div>
                            Global tags:
                            {userHandler?.userInfo?.tags?.map((item, index) => {
                                return (
                                    <p key={index}>
                                        {item}
                                    </p>
                                )
                            })}


                        </div> */}
                        <div className="ms-auto">
                            <Dropdown className="d-inline mx-2" autoClose="outside">
                                <Dropdown.Toggle drop="down-centered" id="dropdown-autoclose-outside">
                                    {<FilterAltIcon/>}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Form onSubmit={e => e.preventDefault()} className='tag-type-checkoff-mobile'>
                                        <div className="tasks-tags-items-taskpage-check">
                                            <div>
                                                <Form.Check checked={getCheckedType('canvas')} type="checkbox" onChange={(e) => { handleTaskCheck(e, 'canvas') }} />
                                            </div>
                                            <div className="tasks-tags-items-taskpage-label">
                                                Canvas Assignments
                                            </div>
                                        </div>
                                        <div className="tasks-tags-items-taskpage-check">
                                            <div>
                                                <Form.Check checked={getCheckedType('usertasks')} type="checkbox" onChange={(e) => { handleTaskCheck(e, 'usertasks') }} />
                                            </div>
                                            <div className="tasks-tags-items-taskpage-label">
                                                My Tasks
                                            </div>
                                        </div>

                                    </Form>
                                    <ListGroup className="dropdown-tags-mobile">
                                        {userHandler?.userInfo?.tags?.map((tagItem, index) => {
                                            return (
                                                <ListGroup.Item key={index} className="tag-checkoff-mobile tasks-tags-items-taskpage-mobile">
                                                    <div className="tasks-tags-items-taskpage-check">
                                                        <div style={{ margin: '5px' }}>
                                                            <Form onSubmit={e => e.preventDefault()} >
                                                                <Form.Check checked={getChecked(tagItem)} type="checkbox" onChange={(e) => { handleTagCheck(e, tagItem) }} />
                                                            </Form>
                                                        </div>
                                                        <div className="tasks-tags-items-taskpage-label">
                                                            {tagItem}
                                                        </div>
                                                    </div>
                                                    <div className="tasks-tags-items-taskpage-delete" style={{ paddingRight: '10px' }}>
                                                        {userHandler?.userInfo?.canvas_tags?.find(t => t === tagItem) ? null : <CloseButton onClick={() => deleteTagGlobal(tagItem)} />}
                                                    </div>

                                                </ListGroup.Item>

                                            )
                                        })}
                                    </ListGroup>
                                    <Form onSubmit={e => e.preventDefault()}>
                                        <div className="clear-tags-mobile">
                                            <Button onClick={() => { setSelectedTags([]); setTaskTypes([]) }}>Clear Tags</Button>
                                        </div>

                                    </Form>
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

            <CreateTaskFormMobile {...{ showCreateTask, setShowCreateTask }} />

        </div>
    )
}

export default TaskPageMobile