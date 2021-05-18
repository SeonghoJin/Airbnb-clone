import { Request, Response, Router } from 'express';
import AuthService from '../service/AuthService.js';
import {v4} from 'uuid'
const router = Router();

export default (app : Router) => {

    app.use('/auth', router);

    const authService : AuthService = new AuthService();

    router.post('/login', (req : Request, res : Response) => {

        const email : string = req.body.email;
        if(authService.vaildEmail(email) === false){
            return res
                    .status(200)
                    .json({"errorCode" : "vaildEmail"})
                    .send()
        }

        const sessionID : string = v4();

        res
            .status(200)
            .cookie("sessionID", sessionID, {
                maxAge : 60*60*24
            })
            .json({
                "sessionID":sessionID
            })
            .send()
        
    });

}