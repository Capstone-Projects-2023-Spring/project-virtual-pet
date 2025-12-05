import { useEffect, useState, useContext } from 'react';
import "./CalendarPageDesktop.css";
import Calendar from 'react-calendar';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CalendarTaskList from './CalendarTaskList';
import GlobalContext from '../../context/GlobalContext';

const CalendarPageDesktop = () => {

    const [date, setDate] = useState();
    const [show, setShow] = useState(false);
    const [showCreateTask, setShowCreateTask] = useState(false);

    const handlers = useContext(GlobalContext);
    const taskList = handlers?.taskList || [];

    console.log("taskList in CalendarPageDesktop: ", taskList);

    const handleClose = () => {
        setShowCreateTask(false);
        setShow(false);
    }
    const handleShow = () => setShowCreateTask(true);

    const myf = (v) => {

        setShow(true);
        handleShow();

        setDate(v);
    }

    // Helper function to format a Date object into YYYY-MM-DD string
    const getDueDateString = (d) => {
        const date = ('0' + (d.getDate())).slice(-2);
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const year = d.getFullYear();
        return year + "-" + month + "-" + date;
    }

    // Function to check if a specific day has any tasks
    const hasTasksOnDay = (date) => {
        return taskList.some(task => {
            if (!task.due_date) return false;
            const taskDate = new Date(task.due_date.replace(/-/g, '/'));
            return (
                taskDate.getFullYear() === date.getFullYear() &&
                taskDate.getMonth() === date.getMonth() &&
                taskDate.getDate() === date.getDate() &&
                !task.completed
            );
        });
    };

    // The tileContent function renders custom content for each tile
    const tileContent = ({ date, view }) => {
        if (view === 'month' && hasTasksOnDay(date)) {
            return <div className="event-dot"></div>;
        }
        return null;
    };

    return (
        // <div className="calendar-page">

        <div className="calendar-container">
            <Calendar onClickDay={(value, event) => myf(value)} tileContent={tileContent} />

            {show === true ? <CalendarTaskList {...{ showCreateTask, handleClose, date }} /> : ""}

        </div>


    )
}

export default CalendarPageDesktop;