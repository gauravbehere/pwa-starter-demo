function registerSync() {
    new Promise(function (resolve, reject) {
        Notification.requestPermission(function (result) {
            if (result !== 'granted') return reject(Error("Denied notification permission"));
            resolve();
        })
    }).then(function () {
        return navigator.serviceWorker.ready;
    }).then(function (reg) {
        return reg.sync.register('syncDemo');
    }).then(function () {
        console.info('Sync registered');
    }).catch(function (err) {
        console.error('Failed to register sync', err.message);        
    });
}