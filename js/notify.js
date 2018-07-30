(function() {
if (!("Notification" in window)) {
    alert("Browser does not support notifications");
}
else if (Notification.permission === "granted") {    
    var notification = new Notification("Sample Push Notification");
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {        
        if (permission === "granted") {
            var notification = new Notification("Sample Push Notification");
        }
    });
}
})();
