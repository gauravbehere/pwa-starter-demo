(function (window) {
  var messaging = firebase.messaging();
  navigator.serviceWorker.ready
    .then(function (registration) {
      messaging.useServiceWorker(registration)
    });
  messaging
    .requestPermission()
    .then(function () {
      console.log("Notification permission granted.");
      return messaging.getToken();
    })
    .then(function (token) {
      /**
       * Once token is recieved for the session, 
       * we are good to recieve the push notifications from firebase
       */
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    });

  messaging.onMessage(function (payload) {
    navigator.serviceWorker.ready
      .then(function (registration) {
        registration.showNotification(payload.data.body)
      });
  });
})(window);
