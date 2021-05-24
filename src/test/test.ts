import { DBconfig } from "../config/index.js";
import { IDatabase } from "../core/database/IDataBase.js";
import { MySQL } from "../core/database/MySQL.js";
import { NeDB } from "../core/database/NeDB.js";
import Container from "../core/Ioc/Container.js";
import { AutoWired } from "../core/Ioc/decorator/Autowired.js";
import { Bean } from "../core/Ioc/decorator/Bean.js";
import { Connect } from "../core/Ioc/decorator/Connect.js";
import { ConcreteUserRepository, UserRepository } from "../repository/UserRepository.js";
import { AuthService } from "../service/AuthService.js";

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