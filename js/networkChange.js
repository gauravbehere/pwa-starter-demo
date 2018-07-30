(function () {
    document.addEventListener('DOMContentLoaded', function(event) {      
      if (!navigator.onLine) {
        checkConnectivity();
      }
      window.addEventListener('online', checkConnectivity, false);
      window.addEventListener('offline', checkConnectivity, false);
    });    
    function checkConnectivity() {
      /* 
      * PWA Starter Demo
      * Add logic to change colors or theme here to let user know about connectivity changes    
      */
      if (navigator.onLine) {
        new Notification('You are back online');        
      }
      else {
        new Notification('Network connection lost');
      }
    }
  })();