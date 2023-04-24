
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TaskNoticeMobile = ({ showNotice, setShowNotice, task }) => {
    const handleClose = () => setShowNotice(false)
    const timeRequired = {
        "S": "1 minute",
        "M": "1 hour",
        "L": "4 hours",
        "C": "3 days"
    }

    return (
        <>
            <Modal centered className="task-notice-modal-mobile"  show={showNotice} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className="task-notice-modal-title-mobile">Task Completion Notice</Modal.Title>  
                </Modal.Header>
                <Modal.Body style={{ 'textAlign': 'center' }}>
                    {/* <span > */}
                    You can't complete this task just yet!
                    <p style={{ 'marginBottom': '0px' }}><em><small>Wait at least <b>{timeRequired[task.task_type]}</b> to complete.</small></em></p>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default TaskNoticeMobile