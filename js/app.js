(function () {
    /*
    * Registering Service Worker & listening to it's update.
    */
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" })
      .then(function(registration) {
        console.info('Service worker registered');
        checkForUpdate(registration);
      })
      .catch(function(error) {
        console.error('Service worker registration failed ', error);
      });
    }
    function checkForUpdate(registration) {          
      registration.addEventListener("updatefound", function() {        
        if (navigator.serviceWorker.controller) {
          var installingWorker = registration.installing;
          installingWorker.onstatechange = function() {
            console.info("Service Worker State :", installingWorker.state);
            switch(installingWorker.state) {
              case 'installed':
              navigator.serviceWorker.ready
              .then(function (registration) {
                  /*
                  * Notify user to refresh the webpage.
                  */
                registration.showNotification('Site Content Updated\n Please Refresh.')
              });
                break;
              case 'redundant':
                throw new Error('The installing service worker became redundant.');
            }
          }
        }
      });
    }
  })();
  
