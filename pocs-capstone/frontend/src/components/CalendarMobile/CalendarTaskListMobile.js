import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import GlobalContext from '../../context/GlobalContext';
import TaskItemMobile from '../PageDisplay/TaskMobile/TaskItemMobile';

// Renders Modal when a day is selected from the mobile calendar
function CalendarTaskListMobile (props) {

    const handlers = useContext(GlobalContext);
    // Format selected calendar date with task date format
    const getDueDate = (d) => {

        const date = ('0' + (d.getDate())).slice(-2)
        const month = ('0' + (d.getMonth()+1)).slice(-2)
        const year = d.getFullYear();
        const dateS = year + "-" + month + "-" + date;
        
        return dateS;
    }

    const headerDate = () => {
      let day = "";
      switch(props.date.getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
          day = "";
      }

      let hDate = day + " - " + props.date.toLocaleString().split(',')[0]

      return hDate;
    }
    // Get tasks for selected date and sort from largest to smallest
    let selectedDateTasks = handlers?.taskList.filter(task => task.due_date === getDueDate(props.date) && !task.completed)
    let small = selectedDateTasks.filter(i => i.task_type === 'S').sort((a, b) => b.task_level - a.task_level)
    let medium = selectedDateTasks.filter(i => i.task_type === 'M').sort((a, b) => b.task_level - a.task_level)
    let large = selectedDateTasks.filter(i => i.task_type === 'L').sort((a, b) => b.task_level - a.task_level)
    let cake = selectedDateTasks.filter(i => i.task_type === 'C').sort((a, b) => b.task_level - a.task_level)

    let sortedTasks = {
        "Cake": cake,
        "Large": large,
        "Medium": medium,
        "Small": small
      
    }
  
  return (
    <Modal size="lg" backdrop="static" show={props.showCreateTask} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{fontSize: 24}}>{props.date !== undefined ? headerDate() :  ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {Object.keys(sortedTasks).map((key, index) => {
                                return (
                                    <div key={index}>
                                        {sortedTasks[key].length !== 0 ?
                                                    <div>
                                                    {sortedTasks[key].map((t, id) => {
                                                        return <TaskItemMobile key={t.task_id} task={t} updateTask={handlers?.updateTask} deleteTask={handlers?.deleteTask} />})}
                                                    </div>
                              
                                            :
                                            <></>
                                        }
                                    </div>

                                )
                            })}
                            {selectedDateTasks.length === 0 && <div>No Tasks Due On This Day!!</div>}
       
      </Modal.Body>
    </Modal >
  );
}

export default CalendarTaskListMobile;