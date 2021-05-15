import { Router } from 'express';
import path from 'path'
import auth from './auth.js'

const router = Router();
auth(router);

router.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), "/src/static/index.html"));
})

export default router;