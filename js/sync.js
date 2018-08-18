function registerSync() {
    new Promise(function (resolve, reject) {
        Notification.requestPermission(function (result) {
            if (result !== 'granted') return reject(Error("Denied notification permission"));
            resolve();
        })
    }).then(function () {
        return navigator.serviceWorker.ready;
    }).then(function (reg) {
        /*
        * You may also want to check if there is already a sync pending with same name before registering a sync.
        * More details here : https://wicg.github.io/BackgroundSync/spec/#sync-manager-interface
        */
        return reg.sync.register('syncDemo');
    }).then(function () {
        console.info('Sync registered');
    }).catch(function (err) {
        console.error('Failed to register sync', err.message);        
    });
}
