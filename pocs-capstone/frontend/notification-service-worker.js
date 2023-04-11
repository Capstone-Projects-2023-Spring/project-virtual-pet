console.log("hello from service worker!")
/*self.addEventListener('push', event => {
    const data = event.data.json();
    const title = 'New Notification';
    const options = {
      body: data.message,
      icon: '/images/orangecat.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url
      }
    };
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
  });
  */