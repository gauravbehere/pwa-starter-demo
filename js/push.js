var messaging = firebase.messaging();
messaging.usePublicVapidKey("BDnGLUP_ncj-O0so3o5IdhCss93SyT3ZNDMiYIaM8NHC489oGwSWi4Z-ih3tyiiwCpkhZpIfu1EcEUJ0wNI37Do");

messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);    
  });
