import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import RecurrenceForm from './RecurrenceForm';
import TaskListContext from '../../context/TaskListContext'
import { useContext, useState } from 'react'

import * as yup from "yup";
import * as formik from 'formik'


function CreateTaskForm(props) {
  const handlers = useContext(TaskListContext);

  const [showRecurr, setShowRecurr] = useState(false);

  const handleCloseR = () => setShowRecurr(false);
  const handleShowR = () => setShowRecurr(true);

  const title = props.task ? "Task Details" : "Create Task"
  const buttonText = props.task ? "Save" : "Create Task"

  const { Formik } = formik;
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    size: yup.string().required(),
    level: yup.string().required(),
    due_date: yup.string().required(),
    recurrence: yup.string().required(),

  });

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
            level: props.task ? props.task.task_level : 'Beginner',
            due_date: props.task ? props.task.due_date : '',
            recurrence: props.task ? props.task.recurrence : 'never',
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
                    onChange={handleChange}
                    isInvalid={!!errors.description} />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>

                </Form.Group>

                <br />

                <Stack direction="horizontal" gap={3} className="mx-auto">

                  <Form.Group controlId="validationFormik03">
                    <Form.Label>Task Size</Form.Label>
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
                    <Form.Select

                      placeholder="Select Level"
                      name="level"
                      value={values.size}
                      onChange={handleChange}
                      isInvalid={!!errors.level}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Novice"> Novice</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
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
                    onChange={handleChange}
                    isInvalid={!!errors.due_date} />
                  <Form.Control.Feedback type="invalid">
                    {errors.due_date}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationFormik06">
                  <Form.Label>Repeating? </Form.Label>
                  <Form.Select

                    placeholder="Select Level"
                    name="recurrence"
                    value={values.recurrence}
                    onChange={(e) => {
                      handleChange(e)
                      if (e.target.value === "custom") {
                        console.log(e.target.value, "HERE")
                        handleShowR()
                      }

                    }}
                    isInvalid={!!errors.level}
                  >
                    <option value="never">Never</option>
                    <option value="custom"> Custom</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.recurrence}
                  </Form.Control.Feedback>
                </Form.Group>




                <Button className="col-md-5 mx-auto" type="submit">{buttonText}</Button>

              </Stack>


              <RecurrenceForm {...{showRecurr, handleCloseR, values}}/>

            </Form>
          )}

        </Formik>


      </Modal.Body>
    </Modal >





  );
}


export default CreateTaskForm






