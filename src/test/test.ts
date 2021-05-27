import { AutoWired, Connect, NeDB, IDatabase, MySQL, Container } from "typejnu"
import { DBconfig } from "../config/index.js"
import { ConcreteUserRepository, UserRepository } from "../repository/UserRepository.js"
import { AuthService } from "../service/AuthService.js"

export class Test {

    @AutoWired()
    authService: AuthService

    @AutoWired(ConcreteUserRepository)
    userRepository: UserRepository

    @Connect(DBconfig, NeDB)
    NeDBdatabase: IDatabase

    @Connect(DBconfig, MySQL)
    MySQLdatabase: IDatabase

    @AutoWired()
    userRepositoryNoAutoWired: UserRepository

}

export default Container.get(Test) as any as Test;