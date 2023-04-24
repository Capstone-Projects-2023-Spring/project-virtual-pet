import { Tooltip, OverlayTrigger, Stack, Form, Button, Modal, Image, Dropdown } from 'react-bootstrap';

import GlobalContext from "../../context/GlobalContext.js";
import UserContext from "../../context/UserContext";
import React, { useContext, useState, useEffect } from 'react'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import infoicon from '../../images/info_icon.png'

import * as yup from "yup";
import * as formik from 'formik'

const CustomMenu = React.forwardRef(
  ({ style, className, 'aria-labelledby': labeledBy, tags, setTags, tagValue, setTagValue, tagError, setTagError, globalTags, updateTaskItem, task }, ref) => {


    // console.log("GLOBAL TAGS ", globalTags, "ERROR", tagError)
    const addGlobalTag = (gTag) => {
      console.log("adding", gTag)

      if (gTag.trim() !== "" && !tags.find(tagItem => tagItem === gTag && gTag.match(/^[0-9a-z]+$/))) {
        const newTags = tags.concat(gTag)
        setTags(newTags)

        if (task) {
          console.log("undefined?", task)
          updateTaskItem(newTags, task)

        }

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


function CreateTaskForm({ showCreateTask, setShowCreateTask, task }) {
  const axiosPrivate = useAxiosPrivate();
  const handlers = useContext(GlobalContext)
  const userHandler = useContext(UserContext)
  const title = task ? "Task Details" : "Create Task"
  const buttonText = task ? "Save" : "Create Task"

  // console.log("TASK", task)

  // set state of tags to an empty array or the task's tag list - depends on if the user is creating or updating a task
  const [tags, setTags] = useState(task ? task.tags : [])
  const [tagValue, setTagValue] = useState("")
  const [tagError, setTagError] = useState("")


  const updateTaskItem = (tagsChanged, task) => {
    const taskItemChanged = {
      ...task,
      tags: tagsChanged
    }
    axiosPrivate.put(`/tasks/${task.task_id}/`, taskItemChanged)
      .then(r => {
        setTags(tagsChanged)
        // handlers?.setTaskList(handlers?.taskList.map(t=> t.task_id === task.task_id ? r.data : t))

        // hate that this fucking worked ...
        // setTaskList not working? - instead make an Axios GET request to update the state of taskList 
        // console.log("CHANGE TO TASK", r.data)
        // const taskListUpdate = handlers?.taskList.map(t => t.task_id === task.task_id ? r.data : t)
        // console.log("UPDATEDTASKLSIT", taskListUpdate)
        // handlers?.setTaskList(taskListUpdate)
        axiosPrivate.get(`/tasks/`)
          .then(r => {
            // console.log("FETCH ALL TASKS RESET :", r.data)
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

  // trigger useEffect on mount and when there are changes to userInfo --> from the TaskPage component, userinfo is updated when tags are deleted from the global list
  // This useEffect is called whenever the user deletes a tag from the GLOBAL tag list -> said tag should be removed from the tag list of INDIVIDUAL task items 
  useEffect(() => {
    // check it's the updating version of the CreateTaskForm
    // console.log("USEEFFECT TRIGGERED")


    const found = tags.every(t => userHandler?.userInfo?.tags?.includes(t))
    // Check to make sure this is the 'update task' version of CreateTaskForm - rendered from TaskItem rather than the TaskPage AddTask button
    // also make sure there is a discrepancy - dont just run this for every task
    console.log("VALUE OF FOUND: ", found, userHandler?.userInfo?.tags)
    // important to add third condition : makes sure you're not comparing to an empty global list of tags - else value of found will turn out different 
    if (task && !found && userHandler?.userInfo?.tags) {
      console.log("this betch?")

      // go through each tag the task owns and only return tags exist in the global tag list
      const removeTags = tags.filter(t => userHandler?.userInfo?.tags?.includes(t))
      // console.log(`NEW TAGS LIST (COMPARED TO GLOBAL TAG LIST) ${removeTags}`)

      updateTaskItem(removeTags, task)

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
    if (tagValue.trim() !== "" && !tags.find(tagItem => tagItem === tagValue.trim()) && tagValue.match(/^[0-9a-z]+$/)) {
      setTagError("")
      // setTags(tags.concat(tagValue.trim()))
      const currentTags = tags.concat(tagValue.trim())

      if (task) {
        updateTaskItem(currentTags, task)
      }
      else{
        setTags(currentTags)
      }
      


      console.log(`Combining global tags and current tags - global: ${userHandler.userInfo.tags}, local tags: ${currentTags}`)
      const updateGlobalTags = currentTags.concat(userHandler.userInfo.tags.filter((item) => currentTags.indexOf(item) < 0))
      console.log(`GLOBAL TAGS UPDATED LIST: ${updateGlobalTags}`)
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
    updateTaskItem(updateTags, task)
  }

  const handleClose = () => {
    if (!task) {

      setTags([])
    }
    setShowCreateTask(false);

  }


  return (
    <Modal backdrop="static" show={showCreateTask} onHide={(e) => { handleClose(); console.log("ON HIDE", e) }}>

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

              handlers.updateTask(task.task_id, valuesAndTags)
            }
            else {
              handlers.addTask(valuesAndTags)

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
              <div>
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
                    updateTaskItem={updateTaskItem}
                    task={task}
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
            </>
          )}

        </Formik>




      </Modal.Body>
    </Modal >





  );
}


export default CreateTaskForm






