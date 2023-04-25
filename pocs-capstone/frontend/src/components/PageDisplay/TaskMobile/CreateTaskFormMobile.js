import { Tooltip, OverlayTrigger, Stack, Form, Button, Modal, Image, Dropdown, ListGroup, CloseButton } from 'react-bootstrap';

import GlobalContext from "../../../context/GlobalContext.js";
import UserContext from "../../../context/UserContext";
import React, { useContext, useState, useEffect } from 'react'
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import infoicon from '../../../images/info_icon.png'

import * as yup from "yup";
import * as formik from 'formik'

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

        <ListGroup className="tasks-dropdown-tags-mobile">
          {globalTags.map((gTag, index) => <Button key={index} variant="light" type="button" className="tag-select-mobile" onClick={(e) => addGlobalTag(gTag)}>{gTag}</Button>)}
        </ListGroup>
      </div>
    );
  },
);


function CreateTaskFormMobile({ showCreateTask, setShowCreateTask, task }) {
  const axiosPrivate = useAxiosPrivate();
  const handlers = useContext(GlobalContext)
  const userHandler = useContext(UserContext)
  const title = task ? "Task Details" : "Create Task"
  const buttonText = task ? "Save" : "Create Task"

  // set state of tags to an empty array or the task's tag list - depends on if the user is creating or updating a task
  const [tags, setTags] = useState(task ? task.tags : [])
  const [tagValue, setTagValue] = useState("")
  const [tagError, setTagError] = useState("")


  // console.log("TASK, tags, and global state", task, tags, userHandler?.userInfo?.tags)

  // trigger useEffect on mount and when there are changes to userInfo --> from the TaskPage component, userinfo is updated when tags are deleted from the global list
  // trigger useEFfect when canvas tasks are loaded - updates global tag list 
  // conflict between remove tag and 
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



  const minDateCake = new Date()
  minDateCake.setDate(minDateCake.getDate() + 3)
  minDateCake.setHours(0, 0, 0, 0)

  const { Formik } = formik;
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    size: yup.string().required(),
    due_date: yup.string(),

  });

  const taskSizeDesc = "'Time to Complete Task' is an estimate of how long it will take to complete the task. The longer it takes to complete, the greater the value of the candy awarded."
  const taskDesc = "Users can create tasks with a title, description, due date, and estimated time to complete. The size of a task is determined by the estimated time to complete it and the level of a task is determined by how long the user has been with the site. "

  const iconStyle = {
    width: '20px',
    margin: '7px',
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

      setTags(currentTags)
      if (task) {
        handlers?.updateTask(task.task_id, { ...task, tagList: currentTags })
      }

      // console.log(`Combining global tags and current tags - global: ${userHandler.userInfo.tags}, local tags: ${currentTags}`)
      const updateGlobalTags = currentTags.concat(userHandler?.userInfo?.tags?.filter((item) => currentTags.indexOf(item) < 0))
      // console.log(`GLOBAL TAGS UPDATED LIST: ${updateGlobalTags}`)
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
      setTagError("No repeat tags!")
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
    if (!task) {
      setTags([])
    }
    setShowCreateTask(false);
  }
  // User selects pre-existing global tag to apply to the task item
  const addGlobalTag = (gTag) => {

    if (gTag.trim() !== "" && !tags.find(tagItem => tagItem === gTag.trim())) {
      const newTags = tags.concat(gTag)
      setTags(newTags)
      if (task) {
        handlers?.updateTask(task.task_id, { ...task, tagList: newTags })
      }
    }
    setTagError("")
  }

  return (
    <Modal centered className="createtask-modal-mobile" backdrop="static" show={showCreateTask} onHide={(e) => { handleClose() }}>

      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            console.log("SUBMITTING FORM", values)

            const valuesAndTags = { ...values, tagList: tags }
            if (task) {
              handlers?.updateTask(task.task_id, valuesAndTags)
            }
            else {
              handlers?.addTask(valuesAndTags)

            }

            handleClose()

            // after submitting, reset input field and set tags to empty only if the task object is empty (meaning the component has been rendered for adding tasks only NOT udpating)
            setTagValue("")
            if (!task) {
              // console.log(`Should only see this console log if user created a new TASK ${task}`)
              setTags([])
            }

          }}
          initialValues={{
            title: task ? task.title : '',
            description: task ? task.description : '',
            size: task ? task.task_type : 'S',
            due_date: task ? task.due_date ? task.due_date : '' : '',
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
            <>

              <Form noValidate onSubmit={handleSubmit}>
                <Stack gap={2} className="col-md-12 mx-auto">
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>Title</Form.Label>

                    <Form.Control

                      type="text"
                      placeholder="Add a title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      isInvalid={!!errors.title} />

                    <Form.Control.Feedback type="invalid">
                      {errors.title}
                    </Form.Control.Feedback>

                  </Form.Group>

                  <br />

                  <Form.Group controlId="validationFormik02">
                    <Form.Label>Description</Form.Label>

                    <Form.Control

                      as="textarea"
                      type="text"
                      placeholder="Add a description"
                      name="description"
                      style={{ height: '100px' }}
                      value={values.description}
                      onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>

                  </Form.Group>

                  <br />


                  <Form.Group controlId="validationFormik03">
                    <Form.Label>Time to Complete Task</Form.Label>
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top" style={{ fontSize: '15px' }}>
                          {taskSizeDesc}
                        </Tooltip>
                      }
                    >
                      <Image
                        src={infoicon}
                        alt="more info icon image"
                        style={iconStyle}
                      />
                    </OverlayTrigger>
                    <Form.Select

                      placeholder="Select Size"
                      name="size"
                      value={values.size}
                      onChange={handleChange}
                      isInvalid={values.size === 'C' && (new Date(values.due_date.replace(/-/g, '\/'))) < minDateCake}
                    >
                      <option value="S">Less than an hour</option>
                      <option value="M">Between 1 and 4 hours</option>
                      <option value="L">Between 4 hours and 3 days</option>
                      <option value="C">Between 3 days to a week</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.size}
                    </Form.Control.Feedback>
                  </Form.Group>


                  <br />

                  <Form.Group controlId="validationFormik04">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                      min={values.size !== 'C' ? null : minDateCake.toISOString().slice(0, 10)}
                      type="date"
                      placeholder="due_date"
                      name="due_date"
                      value={values.due_date}
                      onChange={handleChange}
                      isInvalid={values.size === 'C' && (new Date(values.due_date.replace(/-/g, '\/'))) < minDateCake} />
                    <Form.Control.Feedback type="invalid">
                      This is a CAKE task! It should take at least 3 days to finish. Please pick another date.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <br />
                </Stack>
              </Form>
              {/* <div>
                <ul>
                  {task?.tags?.map((tagItem, index) => {
                    return (
                      <li key={index}>
                        {tagItem}
                      </li>
                    )
                  })}
                </ul>
              </div>
 */}

              <Form onSubmit={handleTagSubmit} style={{ marginBottom: '10px' }}>
                <Form.Group controlId="validationFormik05">
                  <div><Form.Label>Tags</Form.Label></div>
                  <Dropdown className="d-inline" autoClose="outside">
                    <Dropdown.Toggle drop="down-centered" className="add-tag-dropdown-mobile" id="dropdown-autoclose-outside dropdown-button-drop-down-centered">
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
                <ListGroup className="center-tasks-tags-mobile">
                  {tags.map((tagItem, index) => {
                    return (
                      <ListGroup.Item key={index} className="tasks-tags-items-mobile">
                        <div className='tasks-tags-items-taskpage-label'>
                          {tagItem}
                        </div>
                        <div className="tasks-tags-items-taskpage-delete">
                          {task?.course_title && userHandler?.userInfo?.canvas_tags.find(cT => cT === tagItem) ? null : <CloseButton onClick={() => deleteTag(index)} />}
                        </div>
                      </ListGroup.Item>
                    )
                  })}

                </ListGroup>
                :
                null
              }

              <div className="submit-button-modal-mobile">
                <Button onClick={handleSubmit} className="col-md-5 mx-auto" type="submit">{buttonText}</Button>
              </div>

            </>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default CreateTaskFormMobile















