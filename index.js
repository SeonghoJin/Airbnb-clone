import express from 'express';
import path from 'path';
import config from './src/config/index.js'
const app = express();
const __dirname = path.resolve();
app.use("/static", express.static(path.join(__dirname, '/src/static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/src/static/index.html"));
});

app.listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
}).on('error', err => {
    console.log(err);
    process.exit(1);
});