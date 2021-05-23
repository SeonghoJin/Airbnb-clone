import { Request, Response } from 'express';
import { AutoWired } from '../core/Ioc/decorator/Autowired.js';
import { Bean } from '../core/Ioc/decorator/Bean.js';
import { NeDBRepository } from '../core/repository/NeDBRepository.js';
import { User } from '../domain/User.js';
import { UserRepository } from '../repository/UserRepository.js';

@Bean()
export class AuthService {

    @AutoWired()
    userRepository: UserRepository;

    public async Login(req: Request, res: Response) {
        this.userRepository.insert(new User(req.body.id, req.body.password));
    }

    public async isUser(id: string) {
        return (await this.userRepository.exist(id));
    }


    public vaildEmail(email: String): boolean {
        const spEmail: string[] = email.split('@');
        return spEmail.length == 2 && spEmail[1] != '';
    }
}
