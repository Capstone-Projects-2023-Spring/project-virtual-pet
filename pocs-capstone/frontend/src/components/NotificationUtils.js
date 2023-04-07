//import React, { useContext } from "react";
//import NotificationContext from "../context/NotificationContext.js";

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
