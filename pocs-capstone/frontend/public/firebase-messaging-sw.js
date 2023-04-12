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
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo384.png',
        // Add sound and vibration options
        //vibrate: [200, 100, 200],
        sound: '/meow-notif.wav',
        //click_action: 'http://localhost:3000/'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});

