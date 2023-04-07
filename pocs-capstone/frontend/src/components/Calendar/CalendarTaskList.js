import { useEffect, useContext } from 'react';
import { Tooltip, OverlayTrigger, Stack, Form, Button, Modal, Image } from 'react-bootstrap';
import TaskListContext from '../../context/TaskListContext';
import CalendarTaskItem from './CalendarTaskItem';

function CalendarTaskList(props) {

    const handlers = useContext(TaskListContext);

    const getDueDate = (d) => {
        const date = d.getDate();
        // const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        const month = ('0' + (d.getMonth()+1)).slice(-2)
        const year = d.getFullYear();
         
        // const dateStr = date + "/" + month + "/" + year;
        const dateS = year + "-" + month + "-" + date;
        // console.log("dateS", dateS);
        return dateS;
    }


  
  return (
    <Modal size="lg" backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.date !== undefined ? props.date.toLocaleString().split(',')[0] :  ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {handlers?.taskList} */}
        {handlers?.taskList.filter(task => task.due_date === getDueDate(props.date)).length !== 0 ? 
        handlers?.taskList.filter(task => task.due_date === getDueDate(props.date)).map(t => <CalendarTaskItem key={t.task_id} task={t} />) 
        : <div>No Tasks Due Today!</div>}
       
      </Modal.Body>
    </Modal >





  );
}


export default CalendarTaskList






