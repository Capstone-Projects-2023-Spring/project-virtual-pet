import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import TaskListContext from '../../context/TaskListContext';
import CalendarTaskItem from './CalendarTaskItem';

function CalendarTaskList (props) {

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

    const [isEmpty, setIsEmpty] = useState(true);


  
  return (
    <Modal size="lg" backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.date !== undefined ? props.date.toLocaleString().split(',')[0] :  ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {Object.keys(sortedTasks).map((key, index) => {
                                return (
                                    <div key={index}>
                                        {sortedTasks[key].length !== 0 ?
                                                    <div>
                                            
                                                    {sortedTasks[key].map((t, id) => {
                                                      
                                                        return <CalendarTaskItem key={t.task_id} task={t} />})}
                                                    </div>
                                                
                                            :
                                            <></>
                                        }
                                    </div>

                                )
                            })}
                            {todayTasks.length === 0 && <div>No Tasks Due On This Day!!</div>}
       
      </Modal.Body>
    </Modal >
  );
}

export default CalendarTaskList