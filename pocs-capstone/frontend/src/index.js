import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import NotificationProvider, { NotificationContext } from './context/NotificationProvider';
//import reportWebVitals from './reportWebVitals'; //TODO return and revisit this vitals stuff

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// Register the notification service worker
/*if ('serviceWorker' in navigator) {
  const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  navigator.serviceWorker.register(`${publicUrl}/notification-service-worker.js`)
    .then(registration => {
      console.log('Notification service worker registered:', registration);
    })
    .catch(error => {
      console.log("bruh")
      console.error('Error registering notification service worker:', error);
    });
}*/

  
  const check = () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('No Service Worker support!')
    } else {
      console.log("yes service worker support")
    }
    if (!('PushManager' in window)) {
      throw new Error('No Push API Support!')
    } else{
      console.log("push!")
    }
  }

  const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('../notification-service-workerjs'); //notice the file name
    return swRegistration;
}

  const main = async () => {
    check()
    const swRegistration = await registerServiceWorker();
  }
  main()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); //TODO return and revisit the webvitals business
