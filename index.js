const express = require('express');
const app = express();
const path = require("path");

app.use(express.static('static'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Server is working : Port - ', port);
})