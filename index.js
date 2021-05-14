const express = require('express');
const app = express();
const path = require("path");

app.use("/static", express.static(path.join(__dirname, '/src/static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/src/static/index.html"));
});

app.listen(3000, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${3000} 🛡️
      ################################################
    `);
}).on('error', err => {
    console.log(err);
    process.exit(1);
});