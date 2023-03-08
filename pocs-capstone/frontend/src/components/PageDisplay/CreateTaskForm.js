import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CreateTaskForm = ({ showCreateTask, handleClose, newTitle, newDesc, newSize, newDate, handleTitleChange, handleDescChange, handleSizeChange, handleDateChange, addTask }) => {



  return (
    <Modal backdrop="static" show={showCreateTask} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addTask}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">


            <Form.Label><b>Title</b></Form.Label>

            <FloatingLabel
              controlId="floatingInput"
              label="Add a title"
              className="mb-3"
            >
              <Form.Control type="title" placeholder="Add a title" value={newTitle} onChange={handleTitleChange} />
            </FloatingLabel>


          </Form.Group>

          <br />

          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label> <b>Description</b></Form.Label>


            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Add a description"
                style={{ height: '100px' }}
                value={newDesc}
                onChange={handleDescChange}
              />
            </FloatingLabel>

          </Form.Group>

          <br />


          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label><b> Task Size </b></Form.Label>
            <Form.Select aria-label="Default select example" value={newSize} onChange={handleSizeChange}>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="C">Cake</option>
            </Form.Select>

          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <br />
            <Form.Label><b>Due Date</b></Form.Label>
            {/* <Form.Control type="date" name='date_of_birth' error={errors.date_of_birth} ref={register} /> */}
            <Form.Control type="date" name='date_of_birth' value={newDate} onChange={handleDateChange} />


          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Create Task
            </Button>
          </Modal.Footer>



        </Form>
      </Modal.Body>

    </Modal>
  )
}


export default CreateTaskForm