import { Router } from 'express';
var router = Router();
export default (function (app) {
    app.use('/auth', router);
    router.post('/login', function (req, res) {
        var email = req.body.email;
        res.cookie("email", email, {
            maxAge: 60 * 60 * 1000,
            path: "/"
        });
        res.sendStatus(200);
    });
    router.get('/login', function (req, res) {
        console.log(req.sessionID);
        res.redirect('/');
    });
});
