import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';
import useAxiosPrivate from "./hooks/useAxiosPrivate";

const firebaseConfig = {
    apiKey: "AIzaSyDDW-B6ZaDUJDaGdCkMCOCHi9VV9PeD9XU",
    authDomain: "notification-test-fadb6.firebaseapp.com",
    projectId: "notification-test-fadb6",
    storageBucket: "notification-test-fadb6.appspot.com",
    messagingSenderId: "670745965935",
    appId: "1:670745965935:web:c4b16eff2eff447869649a"
};

console.log('*** Environment ***', process.env.REACT_APP_ENV)
console.log('*** Firebase Config ***', firebaseConfig)

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getOrRegisterServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        return window.navigator.serviceWorker
            .getRegistration('/')
            .then((serviceWorker) => {
                if (serviceWorker) return serviceWorker;
                return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
                    scope: '/',
                });
            });
    }
    throw new Error('The browser doesn`t support service worker.');
};

    export const getFirebaseToken = () =>
        getOrRegisterServiceWorker()
            .then((serviceWorkerRegistration) =>
                getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY, serviceWorkerRegistration }));

    export const onForegroundMessage = () =>
        new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));

