(function (window) {
    if (!('PushManager' in window)) {
        console.error('Browser does not support push notifications');
        return;
    }
    if (Notification.permission === 'denied') {
        console.warn('Push notification disabled');
        return;
    }
    navigator.serviceWorker.ready.then(function (registration) {
        const applicationServerKey = urlB64ToUint8Array("AIzaSyBdiXPJoR6ShLOclagHrA4va05fxIN-Oc4");
        if (!registration.pushManager) {
            alert('Browser does not support push notifications');
            return false;
        }

        //To subscribe `push notification` from push manager
        registration.pushManager.subscribe({
            applicationServerKey: applicationServerKey,
            userVisibleOnly: true //Always show notification when received
        }).then(function (subscription) {
            console.info('Push notification subscribed.');
        }).catch(function (error) {
            console.error('Push notification subscription error: ', error);
        });
    })
})(window);