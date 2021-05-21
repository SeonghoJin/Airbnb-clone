import { Router } from 'express';
import AuthService from '../service/AuthService.js';
import { v4 } from 'uuid';
var router = Router();
export default (function (app) {
    app.use('/auth', router);
    var authService = new AuthService();
    router.post('/login', function (req, res) {
        var email = req.body.email;
        if (authService.vaildEmail(email) === false) {
            return res
                .status(200)
                .json({ "errorCode": "vaildEmail" })
                .send();
        }
        var sessionID = v4();
        res
            .status(200)
            .cookie("sessionID", sessionID, {
            maxAge: 60 * 60 * 24
        })
            .json({
            "sessionID": sessionID
        })
            .send();
    });
    router.post('/sign-up', function (req, res) {
        var id = req.body.id;
        var pw = req.body.pw;
        req.session._id = id;
        req.session.save();
        res.cookie("sid", req.sessionID);
        res.redirect("/");
    });
});
