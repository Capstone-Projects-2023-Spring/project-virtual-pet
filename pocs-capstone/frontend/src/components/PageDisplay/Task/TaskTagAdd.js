import { Form, Button, Modal, Dropdown, ListGroup, CloseButton } from 'react-bootstrap';

import GlobalContext from "../../../context/GlobalContext.js";
import UserContext from "../../../context/UserContext";
import React, { useContext, useState, useEffect } from 'react'
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";


const CustomMenu = React.forwardRef(
    ({ style, className, 'aria-labelledby': labeledBy, tagValue, setTagValue, tagError, globalTags, addGlobalTag }, ref) => {



        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    type="text"
                    placeholder="Add tags..."
                    name="tags"
                    value={tagValue}
                    onChange={e => setTagValue(e.target.value)}
                    isInvalid={tagError !== ""}
                />
                <Form.Control.Feedback type="invalid">
                    {tagError}
                </Form.Control.Feedback>

                <ListGroup className="tasks-dropdown-tags">
                    {globalTags.map((gTag, index) => <Button key={index} variant="light" type="button" className="tag-select" onClick={(e) => addGlobalTag(gTag)}>{gTag}</Button>)}
                </ListGroup>
            </div>
        );
    },
);


function TaskTagAdd({ showCreateTask, setShowCreateTask, task }) {
    const axiosPrivate = useAxiosPrivate();
    const handlers = useContext(GlobalContext)
    const userHandler = useContext(UserContext)
    const title = "Add Tags"
    const buttonText = "Save"


    // set state of tags to an empty array or the task's tag list - depends on if the user is creating or updating a task
    const [tags, setTags] = useState(task ? task.tags : [])
    const [tagValue, setTagValue] = useState("")
    const [tagError, setTagError] = useState("")

    // trigger useEffect on mount and when there are changes to userInfo --> from the TaskPage component, userinfo is updated when tags are deleted from the global list
    // This useEffect is called whenever the user deletes a tag from the GLOBAL tag list -> said tag should be removed from the tag list of INDIVIDUAL task items 
    useEffect(() => {
        if (userHandler?.userInfo?.tags && task) {

            // check it's the updating version of the CreateTaskForm
            const found = tags.every(t => userHandler?.userInfo?.tags?.includes(t))

            // Check to make sure this is the 'update task' version of CreateTaskForm - rendered from TaskItem rather than the TaskPage AddTask button
            // also make sure it's not run for every task
            // important to add third condition : makes sure you're not comparing to an empty global list of tags - else value of found will turn out different 
            if (task && !found) {
                // go through each tag the task owns and only return tags exist in the global tag list
                const removeTags = tags.filter(t => userHandler?.userInfo?.tags?.includes(t))
                setTags(removeTags)
                axiosPrivate.put(`/tasks/${task.task_id}/`, { ...task, tags: removeTags })
                    .then(r => {
                        // Get is needed because when a tag is removed from the global list,
                        // too many useEffect trigger for different task items, 
                        // and the setTaskList updates too many times in a row, undoing prev changes from other useeffect state calls
                        axiosPrivate.get(`/tasks/`)
                            .then(r => {
                                handlers?.setTaskList(r.data)
                            })
                            .catch((err) => {
                                console.log("setting task error", err);
                            })
                    })
                    .catch((err) => {
                        console.log("CANT UPDATE TASKLIST?", err);
                    });
            }

            if (task.course_title) {
                // If the task is a canvas assignment, not in the task's current tags list, and is IN the global list 

                if (task.course_title && !task.tags.find(t => task.course_title) && userHandler?.userInfo?.tags.find(t => t === task.course_title)) {
                    const newTags = tags.concat(task.course_title)
                    setTags(newTags)
                    axiosPrivate.put(`/tasks/${task.task_id}/`, { ...task, tags: newTags })
                        .then(r => {
                            axiosPrivate.get(`/tasks/`)
                                .then(r => {
                                    handlers?.setTaskList(r.data)
                                })
                                .catch((err) => {
                                    console.log("setting task error", err);
                                })
                        })
                        .catch((err) => {
                            console.log("CANT UPDATE TASKLIST?", err);
                        });

                }
            }
        }

    }, [userHandler.userInfo])


    const handleSubmit = () => {
        handlers?.updateTask(task.task_id, { ...task, tagList: tags })
        handleClose()
        setTagValue("")
    }

    // Adding user submitted tags to tag state and updating global list of tags + tag validation
    const handleTagSubmit = (e) => {
        console.log(`SUBMITTING TAG: ${tagValue}`)
        e.preventDefault()
        // https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
        if (tagValue.trim() !== "" && !tags.find(tagItem => tagItem === tagValue.trim())) {
            setTagError("")
            // setTags(tags.concat(tagValue.trim()))
            const currentTags = tags.concat(tagValue.trim())

            handlers?.updateTask(task.task_id, { ...task, tagList: currentTags })
            setTags(currentTags)

            const updateGlobalTags = currentTags.concat(userHandler?.userInfo?.tags?.filter((item) => currentTags.indexOf(item) < 0))

            const updatedUser = {
                ...userHandler?.userInfo,
                tags: updateGlobalTags
            };
            axiosPrivate
                .patch(`/user-data/${updatedUser.id}/`, updatedUser)
                .then((response) => {
                    userHandler?.setUserInfo(response.data)
                    console.log(`END RESULT OF UPDATING GLOBAL tags: ${response.data}`)
                })
                .catch((err) => {
                    console.log("CANT UPDATE USER", err);
                });
        }
        else {
            setTagError("Invalid tag - no special characters, spaces, uppercase letters, etc")
            setTimeout(() => {
                setTagError("")
            }, 2000)
        }
        setTagValue("")
    }

    const deleteTag = (index, tagItem) => {
        const updateTags = tags.filter((t, i) => i !== index)
        handlers?.updateTask(task.task_id, { ...task, tagList: updateTags })
        setTags(updateTags)
    }

    const handleClose = () => {
        setShowCreateTask(false);
    }

    const addGlobalTag = (gTag) => {
        if (gTag.trim() !== "" && !tags.find(tagItem => tagItem === gTag.trim())) {
            const newTags = tags.concat(gTag)
            handlers?.updateTask(task.task_id, { ...task, tagList: newTags })
            setTags(newTags)
        }
        setTagError("")
    }

    return (
        <Modal backdrop="static" className="createtask-modal" show={showCreateTask} onHide={(e) => { handleClose(); console.log("ON HIDE", e) }}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleTagSubmit} style={{ marginBottom: '10px' }}>
                    <Form.Group controlId="validationFormik05">
                        <Form.Label>{task.title}</Form.Label>
                        <Dropdown className="d-inline" autoClose="outside">
                            <Dropdown.Toggle className="add-tag-dropdown" id="dropdown-autoclose-outside dropdown-button-drop-down-centered">
                                Add Tags
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={CustomMenu}
                                tagValue={tagValue}
                                setTagValue={setTagValue}
                                tagError={tagError}
                                globalTags={userHandler?.userInfo?.tags}
                                addGlobalTag={addGlobalTag}
                            >
                                {userHandler?.userInfo?.tags?.map((tagItem, index) =>
                                    <Dropdown.Item key={index} eventKey={index}>{tagItem}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>

                    </Form.Group>

                </Form>


                {tags.length !== 0 ?
                    <ListGroup className="center-tasks-tags">
                        {tags.map((tagItem, index) => {
                            return (
                                <ListGroup.Item key={index} className="tasks-tags-items">
                                     <div className="tasks-tags-items-taskpage-label">
                                        {tagItem}
                                    </div>
                                    <div className="tasks-tags-items-taskpage-delete">
                                        {task?.course_title === tagItem && userHandler?.userInfo?.canvas_tags.find(cT => cT === tagItem) ? null : <CloseButton onClick={() => deleteTag(index)} />}
                                    </div>
                                </ListGroup.Item>
                            )
                        })}

                    </ListGroup>
                    :
                    null
                }
                <div className="submit-button-modal">
                    <Button onClick={handleSubmit} className="col-md-5 mx-auto" type="submit">{buttonText}</Button>
                </div>

            </Modal.Body>
        </Modal>
    );
}


export default TaskTagAdd






