import React, { useState } from "react";
import Calendar from "react-calendar";
import TaskItem from "./TaskItem";

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPopup, setShowPopup] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="calendar-page">
            <Calendar value={selectedDate} onChange={handleDateChange} />
            {showPopup && (
                <div className="popup">
                    <TaskItem selectedDate={selectedDate} onClose={handleClosePopup} />
                </div>
            )}
        </div>
    );
};

export default CalendarPage


