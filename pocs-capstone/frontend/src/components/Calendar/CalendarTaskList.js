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

    let todayTasks = handlers?.taskList.filter(task => task.due_date === getDueDate(props.date))
    let small = todayTasks.filter(i => i.task_type === 'S').sort((a, b) => b.task_level - a.task_level)
    let medium = todayTasks.filter(i => i.task_type === 'M').sort((a, b) => b.task_level - a.task_level)
    let large = todayTasks.filter(i => i.task_type === 'L').sort((a, b) => b.task_level - a.task_level)
    let cake = todayTasks.filter(i => i.task_type === 'C').sort((a, b) => b.task_level - a.task_level)

    let sortedTasks = {
        "Cake": cake,
        "Large": large,
        "Medium": medium,
        "Small": small
      
    }


  
  return (
    <Modal size="lg" backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.date !== undefined ? props.date.toLocaleString().split(',')[0] :  ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {handlers?.taskList} */}
        {/* {handlers?.taskList.filter(task => task.due_date === getDueDate(props.date)).length !== 0 ? 
        handlers?.taskList.filter(task => task.due_date === getDueDate(props.date)).map(t => <CalendarTaskItem key={t.task_id} task={t} />) 
        : <div>No Tasks Due Today!</div>} */}

        {Object.keys(sortedTasks).map((key, index) => {
                                return (
                                    <div key={index}>
                                        {sortedTasks[key].length !== 0 ?
                                                    <div>
                                            
                                                    {sortedTasks[key].map((t, id) => {
                                                        // https://github.com/react-dnd/react-dnd/issues/748#issuecomment-348710655
                                                        // DONT use index from mapping for react-dnd item key!!!
                                                        return <CalendarTaskItem key={t.task_id} task={t} />})}
                                                    </div>
                                                
                                            :
                                            <></>
                                        }
                                    </div>
                                )
                            })}
       
      </Modal.Body>
    </Modal >





  );
}


export default CalendarTaskList






