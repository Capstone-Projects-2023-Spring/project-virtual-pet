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