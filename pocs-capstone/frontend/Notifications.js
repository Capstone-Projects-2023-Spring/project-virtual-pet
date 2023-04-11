const FCM = require('fcm-node');
const serverKey = 'YOUR_SERVER_KEY';
const fcm = new FCM(serverKey);

const message = {
    to: 'DEVICE_FCM_TOKEN',
    notification: {
        title: 'Notification Title',
        body: 'Notification Body',
        icon: 'ic_notification_icon'
    },
    data: {
        custom_data_key_1: 'Custom Data Value 1',
        custom_data_key_2: 'Custom Data Value 2'
    }
};

fcm.send(message, (err, response) => {
    if (err) {
        console.log('Error sending push notification: ', err);
    } else {
        console.log('Push notification sent successfully: ', response);
    }
});
