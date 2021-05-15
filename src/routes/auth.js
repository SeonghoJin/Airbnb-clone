import { Router } from 'express'

const router = Router();

export default (app) => {

    app.use('/auth', router);

    router.post('/login', (req, res) => {
        console.log(req.body);
        res.redirect("/")
    })
}