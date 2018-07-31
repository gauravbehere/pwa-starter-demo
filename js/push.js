(function(window){
var messaging = firebase.messaging();
 messaging
   .requestPermission()
   .then(function () {     
     console.log("Notification permission granted.");
     return messaging.getToken()
   })
   .then(function(token) {
   })
   .catch(function (err) {
   console.log("Unable to get permission to notify.", err);
 });

 messaging.onMessage(function(payload) {
    var notification = new Notification(payload.data.body);    
});
})(window);