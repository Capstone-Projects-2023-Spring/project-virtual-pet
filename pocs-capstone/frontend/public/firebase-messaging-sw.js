importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDDW-B6ZaDUJDaGdCkMCOCHi9VV9PeD9XU",
    authDomain: "notification-test-fadb6.firebaseapp.com",
    projectId: "notification-test-fadb6",
    storageBucket: "notification-test-fadb6.appspot.com",
    messagingSenderId: "670745965935",
    appId: "1:670745965935:web:c4b16eff2eff447869649a"
  };

  firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

 // Send a push notification to a device with a given FCM token
 const sendPushNotification = (fcmToken) => {
    console.log("YEEELLOOO")
    const payload = {
      notification: {
        title: "Happy Birthday!",
        body: "Today is your birthday!",
      },
      token: fcmToken
    };

    getMessaging()
      .send(payload)
      .then((response) => {
        console.log("Push notification sent:", response);
      })
      .catch((error) => {
        console.log("Error sending push notification:", error);
      });
  };

  setInterval(sendPushNotification("d2ulR6z2cJK8k9pgz__CX-:APA91bFT1kJMefJyxEkH-D2Wn1BzFwD3rpoLbxXokLT6MKmGeFFCshIAVLXrguM1kArZ1Lfnxi2CkFujUhgFESGHi9upZvN-WoOGyCUh5ZvEyfG9byj0RBVq7wIO5jfwbfzrDfpu_evQ"), 3000); // 5 minutes in milliseconds
