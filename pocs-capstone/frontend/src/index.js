import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import reportWebVitals from './reportWebVitals'; //TODO return and revisit this vitals stuff

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: '03d68522-7024-4cff-a04b-8f49eb789abe',
    safari_web_id: "web.onesignal.auto.4da9f50a-e5cd-4bfe-8999-da1af6f61d49",
    allowLocalhostAsSecureOrigin: true, // allows HTTPS testing with localhost
    persistNotification: false, // on non-mobile Chrome, the notification will not go away automatically unless this is false
    notifyButton: { // subscription bell in lower right corner; goes away after subscribing
      enable: true,
      showCredit: true,
      displayPredicate: () => OneSignal.isPushNotificationsEnabled().then(isEnabled => isEnabled ? false : true),
      prenotify: true,
      text: {
        'message.prenotify': 'Click to subscribe to notifications!',
      },
      colors: { // Customize the colors of the main button and dialog popup button
        'circle.background': 'rgb(255, 198, 198)',
        'circle.foreground': 'rgb(215, 60, 60)',
        'badge.background': 'rgb(255, 198, 198)',
        'badge.foreground': 'rgb(215, 60, 60)',
        'badge.bordercolor': 'rgb(215, 60, 60)',
        'pulse.color': 'rgb(217, 91, 91)',
        'dialog.button.background.hovering': 'rgb(77, 101, 113)',
        'dialog.button.background.active': 'rgb(70, 92, 103)',
        'dialog.button.background': 'rgb(255, 198, 198)',
        'dialog.button.foreground': 'white'
      },
    },
    welcomeNotification: {
      title: "Welcome to Study Buddy",
      message: "Thanks for subscribing to push notifications!",
    }
  });
  OneSignal.getUserId().then(playerId => {
    //Send the playerId to your server to associate it with the user
    console.log("Here is the user's device/browser id:", playerId);
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); //TODO return and revisit the webvitals business
