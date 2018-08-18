(function () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
                /**
                 * Notifying the user with a sample notification
                 * Can be a greeting :)
                 */
                registration.showNotification("Sample Push Notification.")
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                        /**
                        * Notifying the user with a sample notification
                        * Can be a greeting :)
                        */
                        registration.showNotification("Sample Push Notification.")
                    });
            }
        });
    }
})();
