import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CreateTaskForm = ({showCreateTask, handleClose}) =>{
    return (
        <Modal show={showCreateTask} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}


export default CreateTaskForm