import { Tooltip, OverlayTrigger, Stack, Form, Button, Modal, Image } from 'react-bootstrap';

// import GlobalContext from '../../../context/GlobalContext'
import { useContext } from 'react'
// import infoicon from '../../../images/info_icon.png'

import * as yup from "yup";
import * as formik from 'formik'
import PetProfPage from './PageDisplay/PetProfPage';


function PetProfileMobile(props) {

//   const handlers = useContext(GlobalContext);
  const title = props.task ? "Task Details" : "Create Task"
  const buttonText = props.task ? "Save" : "Create Task"

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

  return (
    <Modal className="createtask-modal-mobile" backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Pet Profile</Modal.Title> */}
        
      </Modal.Header>
      <Modal.Body>

      < PetProfPage/>
      </Modal.Body>
    </Modal >





  );
}


export default PetProfileMobile






