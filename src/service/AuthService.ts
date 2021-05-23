import { Request, Response } from 'express';
import Container from '../core/Ioc/Container.js';
import { AutoWired } from '../core/Ioc/decorator/Autowired.js';
import { Bean } from '../core/Ioc/decorator/Bean.js';
import { User } from '../domain/User.js';
import { ConcreteTestRepository, TestRepository } from '../repository/TestRepository.js';
import { ConcreteUserRepository, UserRepository } from '../repository/UserRepository.js';

@Bean()
export class AuthService {

    @AutoWired(ConcreteUserRepository)
    userRepository: UserRepository;

    @AutoWired(ConcreteTestRepository)
    testRepository: TestRepository

    public async Login(req: Request, res: Response) {
        console.log(Container);
        console.log(this.userRepository.database);
        console.log(this.testRepository.database);
    }

    public async isUser(id: string) {
    }


    public vaildEmail(email: String): boolean {
        const spEmail: string[] = email.split('@');
        return spEmail.length == 2 && spEmail[1] != '';
    }
}
