var messaging = firebase.messaging();
messaging.usePublicVapidKey("AIzaSyC43JJJObG0BsLwFYIbKOeknRt1Dnz4ZPM");

messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);    
  });
