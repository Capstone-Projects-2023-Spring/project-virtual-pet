//import React, { useContext } from "react";
//import NotificationContext from "../context/NotificationContext.js";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";

export const sendWelcomeNotification = () => {
    const title = 'Welcome to Study Buddy!';
    const options = {
        body: 'Thanks for enabling push notifications!',
    };
    sendNotification(title, options);
};

export const sendTaskDueNotification = (taskTitle) => {
    const title = 'Task Due Soon';
    const options = {
        body: `Your task "${taskTitle}" is due in 24 hours!`,
    };
    sendNotification(title, options);
};

const sendNotification = (title, options) => {
    const notification = new Notification(title, options);
};


// utility function to check which version to use
export function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch (e) {
        return false;
    }
    return true;
}

const checkTasks = async () => {
    // get tasks from backend
    const axiosPrivate = useAxiosPrivate()
    const tasks = () => {
        axiosPrivate.get("/tasks/")
    }

    // filter tasks that are due in 24 hours
    const now = new Date(); // current date and time
    const tasksDueSoon = tasks.filter(task => {
        const dueDate = new Date(task.due_date); // convert task due date string to Date object
        const timeDiff = dueDate.getTime() - now.getTime(); // calculate time difference in milliseconds
        const hoursDiff = timeDiff / (1000 * 60 * 60); // convert time difference to hours
        return hoursDiff <= 24 && hoursDiff > 0; // return true if task is due in less than 24 hours and more than 0 hours
    });

    // send notification for each task
    tasksDueSoon.forEach((task) => {
        sendTaskDueNotification(task.title);
    });
};

export const startTaskChecker = (intervalMs) => {
    const intervalId = setInterval(() => {
        checkTasks();
    }, intervalMs);

    return () => clearInterval(intervalId);
};

