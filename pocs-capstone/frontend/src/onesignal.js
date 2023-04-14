import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
    await OneSignal.init({
        appId: '03d68522-7024-4cff-a04b-8f49eb789abe',
        safari_web_id: "web.onesignal.auto.4da9f50a-e5cd-4bfe-8999-da1af6f61d49",
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
            enable: true,
        },
    });
    //OneSignal.showSlidedownPrompt();
    //OneSignal.getUserId().then(playerId => {
    // Send the playerId to your server to associate it with the user
    // console.log(playerId);
    //});
}