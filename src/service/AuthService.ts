import { Request, Response } from 'express';
import { Bean, AutoWired } from 'typejnu';
import { ConcreteUserRepository, UserRepository } from '../repository/UserRepository.js';

@Bean()
export class AuthService {

    @AutoWired(ConcreteUserRepository)
    userRepository: UserRepository;

    public async Login(req: Request, res: Response) {
    }

    public async isUser(id: string) {
    }


    public vaildEmail(email: String): boolean {
        const spEmail: string[] = email.split('@');
        return spEmail.length == 2 && spEmail[1] != '';
    }
}
