import { Tooltip, OverlayTrigger, Stack, Form, Button, Modal, Image } from 'react-bootstrap';

import TaskListContext from '../../context/TaskListContext'
import { useContext } from 'react'
import infoicon from '../../images/info_icon.png'

import * as yup from "yup";
import * as formik from 'formik'


function CreateTaskForm(props) {

  const handlers = useContext(TaskListContext);
  const title = props.task ? "Task Details" : "Create Task"
  const buttonText = props.task ? "Save" : "Create Task"

  const { Formik } = formik;
  const schema = yup.object().shape({

    title: yup.string().required(),
    description: yup.string(),
    size: yup.string().required(),
    level: yup.number().required(),
    due_date: yup.string(),

  });

  const taskSizeDesc = "'Task Size' describes how difficult a task is. The higher the task size, the greater the value of the candy awarded."
  const taskLevelDesc = "'Task Level' describes the level of skill and knowledge required to complete a task. It represents different tiers for experience gained."

  const iconStyle = {
    // filter: "invert(100%)",
    width: '20px',
    margin: '7px',
  }

  return (
    <Modal backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            if (props.task) {

              handlers.updateTask(props.task.task_id, values)
            }
            else {
              handlers.addTask(values)
            }
            props.handleClose()

          }}
          initialValues={{
            title: props.task ? props.task.title : '',
            description: props.task ? props.task.description : '',
            size: props.task ? props.task.task_type : 'S',
            level: props.task ? props.task.task_level : 1,
            due_date: props.task ? props.task.due_date ? props.task.due_date : '' : '',
          }}
        >
          {({
            handleSubmit, handleChange, handleBlur, values, touched, isValid, errors,
          }) => (
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

                <Stack direction="horizontal" gap={3} className="mx-auto">

                  <Form.Group controlId="validationFormik03">
                    <Form.Label>Task Size</Form.Label>
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
                      isInvalid={!!errors.size}
                    >
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                      <option value="C">Cake</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.size}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <br />

                  <Form.Group controlId="validationFormik04" className='ms-6'>
                    <Form.Label>Task Level</Form.Label>
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top" style={{ fontSize: '15px' }}>
                          {taskLevelDesc}
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

                      placeholder="Select Level"
                      name="level"
                      value={values.level}
                      onChange={handleChange}
                      isInvalid={!!errors.level}
                    >
                      <option value={1}>Beginner - 1</option>
                      <option value={2}> Novice - 2</option>
                      <option value={3}>Intermediate - 3</option>
                      <option value={4}>Advanced - 4</option>
                      <option value={5}>Expert - 5</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.level}
                    </Form.Control.Feedback>
                  </Form.Group>


                </Stack>

                <br />

                <Form.Group controlId="validationFormik05">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control

                    type="date"
                    placeholder="due_date"
                    name="due_date"
                    value={values.due_date}
                    onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    {errors.due_date}
                  </Form.Control.Feedback>
                </Form.Group>

                <br />

                <Button className="col-md-5 mx-auto" type="submit">{buttonText}</Button>

              </Stack>
            </Form>
          )}

        </Formik>
      </Modal.Body>
    </Modal >





  );
}


export default CreateTaskForm






