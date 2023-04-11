import { useState } from 'react';
import "./CalendarPageMobile.css";
import Calendar from 'react-calendar'; 
import CalendarTaskListMobile from './CalendarTaskListMobile';

// Renders the mobile calendar and mobile calendar task list when the user clicks a day
const CalendarPageMobile = () => {

    const [date, setDate] = useState();
    const [show, setShow] = useState(false);
    const [showCreateTask, setShowCreateTask] = useState(false);

    const handleClose = () =>  {
        setShowCreateTask(false); 
        setShow(false);
    }
    const handleShow = () => setShowCreateTask(true);

    // Show Modal
    const dayClicked = (v) => {

        setShow(true);
        handleShow();
        setDate(v);
    }

    return(

        <div className="calendar-container">
            <Calendar onClickDay={(value, event) => dayClicked(value)} />

             {show === true ? <CalendarTaskListMobile {...{ showCreateTask, handleClose, date}}/> : ""}
            
        </div>

    )
}

export default CalendarPageMobile;