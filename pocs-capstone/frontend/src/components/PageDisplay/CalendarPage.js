import {useEffect, useState, useContext} from 'react';
import "./CalendarPage.css";
import Calendar from 'react-calendar'; 
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CalendarTaskList from '../Calendar/CalendarTaskList';

const CalendarPage = () => {

    const [date, setDate] = useState();
    const [show, setShow] = useState(false);
    const [showCreateTask, setShowCreateTask] = useState(false);

    const handleClose = () =>  {
        setShowCreateTask(false); 
        setShow(false);
    }
    const handleShow = () => setShowCreateTask(true);

    const myf = (v) => {
        
        setShow(true);
        handleShow();
        
        setDate(v);
    }

    return(
        // <div className="calendar-page">

        <div className="calendar-container">
            <Calendar onClickDay={(value, event) => myf(value)} />

             {show === true ? <CalendarTaskList {...{ showCreateTask, handleClose, date}}/> : ""}
            
        </div>

        
    )
}

export default CalendarPage