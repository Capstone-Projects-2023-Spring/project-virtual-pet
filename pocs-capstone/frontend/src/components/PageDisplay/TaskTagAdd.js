import { Form, Button, Modal, Dropdown } from 'react-bootstrap';

import GlobalContext from "../../context/GlobalContext.js";
import UserContext from "../../context/UserContext";
import React, { useContext, useState, useEffect } from 'react'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const CustomMenu = React.forwardRef(
    ({ style, className, 'aria-labelledby': labeledBy, tags, setTags, tagValue, setTagValue, tagError, setTagError, globalTags, task, handlers }, ref) => {

        const addGlobalTag = (gTag) => {
            if (gTag.trim() !== "" && !tags.find(tagItem => tagItem === gTag.trim())) {
                const newTags = tags.concat(gTag)
                handlers?.updateTask(task.task_id, { ...task, tagList: newTags })
                setTags(newTags)
            }
            setTagError("")
        }

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

                <ul className="list-unstyled">
                    {globalTags.map((gTag, index) =>
                        <li key={index}>
                            <button type="button" onClick={(e) => addGlobalTag(gTag)}>
                                {gTag}
                            </button>

                        </li>
                    )}
                </ul>
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
        const found = tags.every(t => userHandler?.userInfo?.tags?.includes(t))
        if (task && !found && userHandler?.userInfo?.tags) {
            console.log("this betch?")
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

    return (
        <Modal backdrop="static" show={showCreateTask} onHide={(e) => { handleClose(); console.log("ON HIDE", e) }}>

            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleTagSubmit}>
                    {/* <Form.Group> */}
                    <Form.Label>Tags</Form.Label>
                    <Dropdown className="d-inline mx-2" autoClose="outside">
                        <Dropdown.Toggle id="dropdown-autoclose-outside dropdown-button-drop-down-centered">
                            Add Tags
                        </Dropdown.Toggle>

                        <Dropdown.Menu as={CustomMenu}
                            tags={tags}
                            setTags={setTags}
                            tagValue={tagValue}
                            setTagValue={setTagValue}
                            tagError={tagError}
                            setTagError={setTagError}
                            globalTags={userHandler?.userInfo?.tags}
                            task={task}
                            handlers={handlers}
                        >
                            {userHandler?.userInfo?.tags?.map((tagItem, index) =>
                                <Dropdown.Item key={index} eventKey={index}>{tagItem}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>

                <ul>
                    {tags.map((tagItem, index) => {
                        return (
                            <li key={index}>
                                {tagItem}
                                <button onClick={() => deleteTag(index)}>

                                </button>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={handleSubmit} className="col-md-5 mx-auto" type="submit">{buttonText}</Button>
            </Modal.Body>
        </Modal>
    );
}


export default TaskTagAdd






