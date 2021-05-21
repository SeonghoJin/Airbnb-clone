import { request, Request, Response, Router } from 'express';
import AuthService from '../service/AuthService.js';
import { v4 } from 'uuid'
import { requestSignUp } from '../static/js/components/modal/signup/SignUpController.js';
const router = Router();

declare module 'express-session' {
    interface SessionData {
        _id: string,
    }
}

export default (app: Router) => {

    app.use('/auth', router);

    const authService: AuthService = new AuthService();

    router.post('/login', (req: Request, res: Response) => {

        const email: string = req.body.email;
        if (authService.vaildEmail(email) === false) {
            return res
                .status(200)
                .json({ "errorCode": "vaildEmail" })
                .send()
        }

        const sessionID: string = v4();

        res
            .status(200)
            .cookie("sessionID", sessionID, {
                maxAge: 60 * 60 * 24
            })
            .json({
                "sessionID": sessionID
            })
            .send()

    });

    router.post('/sign-up', (req: Request, res: Response) => {
        const id = req.body.id;
        const pw = req.body.pw;

        req.session._id = id;
        req.session.save();

        res.cookie("sid", req.sessionID);
        res.redirect("/");
    })

}