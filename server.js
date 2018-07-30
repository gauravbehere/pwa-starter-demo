const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log('Server Started : http://localhost:'+ PORT);
});