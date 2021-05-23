import { IDatabase } from "../core/database/IDataBase.js";
import { MySQL } from "../core/database/MySQL.js";
import { NeDB } from "../core/database/NeDB.js";
import { Bean } from "../core/Ioc/decorator/Bean.js";
import { Connect } from "../core/Ioc/decorator/Connect.js";
import { Repository } from "../core/repository/Repository.js";

class Test {

}

export interface TestRepository extends Repository<Test> {

}

@Bean()
export class ConcreteTestRepository implements TestRepository {
    @Connect(MySQL, Test)
    database: IDatabase<Test>;

}