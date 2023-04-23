import { Tooltip, OverlayTrigger, Stack, Form, Button, Modal, Image } from 'react-bootstrap';

import GlobalContext from "../../context/GlobalContext.js";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from 'react'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import infoicon from '../../images/info_icon.png'

import * as yup from "yup";
import * as formik from 'formik'


function CreateTaskForm(props) {
  const axiosPrivate = useAxiosPrivate();
  const handlers = useContext(GlobalContext)
  const userHandler = useContext(UserContext)
  const title = props.task ? "Task Details" : "Create Task"
  const buttonText = props.task ? "Save" : "Create Task"

  // set state of tags to an empty array or the task's tag list - depends on if the user is creating or updating a task
  const [tags, setTags] = useState(props.task ? props.task.tags : [])
  const [tagValue, setTagValue] = useState("")
  const [tagError, setTagError] = useState("")

  console.log(`Current Tags: ${tags}`)

  useEffect(()=>{
    console.log(`CreateTaskForm Render for: ${title}, Value of tags on start: ${tags} `)
  },[])
  // call once on render 
  useEffect(() => {
    // check it's the updating version of the CreateTaskForm
    console.log("USEEFFECT TRIGGERED")
    if (props.task) {

      const removeTags = tags.filter(t => userHandler?.userInfo?.tags?.includes(t))
      console.log(`REMOVING TAGS IF DON'T EXIST IN GLOBAL TAG LIST ${removeTags}`)
      const taskItemChanged = {
        ...props.task,
        tags: removeTags
      }
      axiosPrivate.put(`/tasks/${props.task.task_id}/`, taskItemChanged)
        .then(r => {
          setTags(removeTags)
        })
    }

    console.log(`NEW VALUE OF TAGS AFTER CHECKING GLOBAL TAG LIST ${tags}`)
   
  }, [userHandler.userInfo.tags])

  // on render make sure the tags state is set to the correct value


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

  // console.log("USER INFO:", userHandler?.userInfo?.tags, "TAGS CURRENT", tags)

  // When the user enters a tag, trim the word, make sure it's valid, and add to the tags state list
  const handleTagSubmit = (e) => {
    console.log(`SUBMITTING TAG: ${tagValue}`)
    e.preventDefault()
    if (tagValue.trim() !== "") {
      // https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
      if (!tags.find(tagItem => tagItem === tagValue.trim()) && tagValue.match(/^[0-9a-z]+$/)) {
        setTags(tags.concat(tagValue.trim()))
      }
    }
    setTagValue("")
  }

  const deleteTag = (index, tagItem) => {
    // deleting a tagged item: remove from state - don't need to make an axios call from here, updateTask and addTask will do so with the latest version of the tags state 
    setTags(tags.filter((t, i) => i !== index))
    console.log(`REMOVING TAGS: ${tags}`)

  }

  return (
    <Modal backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        {/* <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-top" style={{ fontSize: '12px', width: '200px' }}>
              {taskDesc}
            </Tooltip>
          }
        >
          <Image
            src={infoicon}
            alt="more info icon image"
            style={iconStyle}
          />
        </OverlayTrigger> */}
      </Modal.Header>
      <Modal.Body>

        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            console.log("SUBMITTING FORM", values)

            // When the user submits the forms, add the tags the user added to the larger global tag list (unique values only)
            console.log(`Combining global tags and current tags - global: ${userHandler.userInfo.tags}, local tags: ${tags}`)
            const updateGlobalTags = tags.concat(userHandler.userInfo.tags.filter((item) => tags.indexOf(item) < 0))
            console.log(`GLOBAL TAGS UPDATED LIST: ${updateGlobalTags}`)
            const updatedUser = {
              ...userHandler?.userInfo,
              tags: updateGlobalTags
            };
            axiosPrivate
              .patch(`/user-data/${updatedUser.id}/`, updatedUser)
              .then((response) => {
                userHandler?.setUserInfo(response.data)
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(`END RESULT OF UPDATING GLOBAL tags: ${userHandler.userInfo.tags}`)

            
            const valuesAndTags = { ...values, tagList: tags }
            if (props.task) {

              handlers.updateTask(props.task.task_id, valuesAndTags)
            }
            else {
              handlers.addTask(valuesAndTags)

            }

            props.handleClose()

            // after submitting, reset input field and set tags to empty only if the props.task object is empty (meaning the component has been rendered for adding tasks only NOT udpating)
            setTagValue("")
            if (!props.task) {
              console.log(`Should only see this console log if user created a new TASK ${props.task}`)
              setTags([])
            }

          }}
          initialValues={{
            title: props.task ? props.task.title : '',
            description: props.task ? props.task.description : '',
            size: props.task ? props.task.task_type : 'S',
            due_date: props.task ? props.task.due_date ? props.task.due_date : '' : '',
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


              <Form onSubmit={handleTagSubmit}>
                {/* <Form.Group> */}
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add tags..."
                  name="tags"
                  value={tagValue}
                  onChange={e => setTagValue(e.target.value)}
                />
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






