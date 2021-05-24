import express from 'express';
import {
    config
} from './src/config/index.js';
import route from './src/routes/index.js';
import middlewears from './src/middlewears/index.js';
import Container from './src/core/Ioc/Container.js';

const app = express();

middlewears(app);
app.use(route);

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