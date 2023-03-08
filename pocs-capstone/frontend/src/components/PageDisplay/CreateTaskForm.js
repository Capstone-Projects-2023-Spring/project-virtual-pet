import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import TaskListContext from '../../context/TaskListContext'
import { useContext } from 'react'
import Stack from 'react-bootstrap/Stack';
import * as yup from "yup";
import * as formik from 'formik'


function CreateTaskForm({ showCreateTask, handleClose }) {
  const handlers = useContext(TaskListContext);

  const { Formik } = formik;
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    size: yup.string().required(),
    due_date: yup.string().required()
  });

  return (
    <Modal backdrop="static" show={showCreateTask} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Formik
          validationSchema={schema}
          onSubmit={(values) => {

            handlers.addTask(values)
            handleClose()
          }}
          initialValues={{
            title: '',
            description: '',
            size: 'S',
            due_date: '',
          }}
        >
          {({
            handleSubmit, handleChange, handleBlur, values, touched, isValid, errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Stack gap={2} className="col-md-12 mx-auto">
                <Form.Group controlId="validationFormik01">
                  <Form.Label>Title</Form.Label>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Add a title..."
                    className="mb-3"
                  >
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
                  </FloatingLabel>
                </Form.Group>

                <br />

                <Form.Group controlId="validationFormik02">
                  <Form.Label>Description</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Add a description...">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Add a description"
                      name="description"
                      style={{ height: '100px' }}
                      value={values.description}
                      onChange={handleChange}/>
                  </FloatingLabel>
                </Form.Group>

                <br />

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

                <Form.Group controlId="validationFormik04">
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
                <Button className="col-md-5 mx-auto" type="submit">Submit form</Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal >





  );
}


export default CreateTaskForm






