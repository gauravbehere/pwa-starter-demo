(function () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" })
      .then(function(registration) {
        console.info('Service worker registered');
        checkForPageUpdate(registration);
      })
      .catch(function(error) {
        console.error('Service worker registration failed ', error);
      });
    }
    function checkForPageUpdate(registration) {          
      registration.addEventListener("updatefound", function() {        
        if (navigator.serviceWorker.controller) {
          var installingSW = registration.installing;
          installingSW.onstatechange = function() {
            console.info("Service Worker State :", installingSW.state);
            switch(installingSW.state) {
              case 'installed':
                new Notification('Site is updated.\nRefresh the page.');
                break;
              case 'redundant':
                throw new Error('The installing service worker became redundant.');
            }
          }
        }
      });
    }
  })();
  