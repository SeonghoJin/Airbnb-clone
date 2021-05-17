import { Request, Response } from 'express';
import session from 'express-session';

export default class AuthService{

    public async Login(req : Request, res : Response){

    }

    private vaildEmail(email : String) : boolean{
        const spEmail : string[] = email.split('@');
        return spEmail.length == 2;
    }
}
