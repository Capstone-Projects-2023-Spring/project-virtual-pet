import {useEffect, useState, useContext} from 'react';
import "./CalendarPageMobile.css";
import Calendar from 'react-calendar'; 
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CalendarTaskListMobile from './CalendarTaskListMobile';

const CalendarPageMobile = () => {

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

             {show === true ? <CalendarTaskListMobile {...{ showCreateTask, handleClose, date}}/> : ""}
            
        </div>

        
    )
}

export default CalendarPageMobile