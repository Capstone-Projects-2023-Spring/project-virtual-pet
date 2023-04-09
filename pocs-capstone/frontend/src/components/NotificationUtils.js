import React, { useEffect } from "react";
//import NotificationContext from "../context/NotificationContext.js";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";




export const sendWelcomeNotification = () => {
    const title = 'Welcome to Study Buddy!';
    const options = {
        body: 'Thanks for enabling push notifications!',
    };
    sendNotification(title, options);
};

export const sendOneTaskDueNotification = () => {
    const title = 'Task Due Soon!';
    const options = {
        body: `You have a task due in 24 hours.`,
    };
    sendNotification(title, options);
};

export const sendTasksDueNotification = (numDue) => {
    const title = 'Tasks Due Soon!';
    const options = {
        body: `You have ${numDue} tasks due in 24 hours.`,
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


export function getTasksDueToday(tasks) {

    const today = new Date().toISOString().slice(0, 10); // get today's date

    const tasksDueToday = tasks.filter(task => {
        const dueDate = task.due_date.slice(0, 10); // get the due date
        return dueDate === today; // keep task if due date equal to today
    });

    if (tasksDueToday.length > 0) {
        console.log("There are tasks due today!")
        if (tasksDueToday.length === 1) {
            sendOneTaskDueNotification();
        }
        else {
            sendTasksDueNotification(tasksDueToday.length);
        }
    }

}


