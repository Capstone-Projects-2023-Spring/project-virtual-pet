import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
    window.OneSignal = window.OneSignal || [];

    if (!OneSignal.initialized) {
        console.log("Initializing OneSignal: ", OneSignal.initialized)
        await OneSignal.init({
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
    }
    //OneSignal.showSlidedownPrompt(); // will not continuously bombard user
    saveUserId();

}

function saveUserId() {
    OneSignal.getUserId().then(playerId => {
        //Send the playerId to your server to associate it with the user
        console.log("Here is the user's device/browser id:", playerId);
    });

    //also add code here to send to our backend, something like:
    /*axiosPrivate.put('/save-onesignal-id/')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          if (data.created) {
            console.log('OneSignal ID successfully added');
          } else {
            console.log('User OneSignal ID updated');
          }
        } else {
          console.error('Failed to save OneSignal user ID to backend');
        }
      })
      .catch(error => {
        console.error('Axios call failed to send OneSignal ID to backend:', error);
      });*/

}