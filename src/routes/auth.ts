import { Request, Response, Router } from 'express';
import AuthService from '../service/AuthService.js';
const router = Router();

export default (app : Router) => {

    app.use('/auth', router);

    router.post('/login', (req : Request, res : Response) => {
        const email : string = req.body.email;
        res.cookie("email", email, {
            maxAge: 60 * 60 * 1000,
            path: "/"
        });
        res.sendStatus(200);
    });

    router.get('/login', (req : Request, res : Response) => {
        console.log(req.sessionID);
        res.redirect('/');
    })
}