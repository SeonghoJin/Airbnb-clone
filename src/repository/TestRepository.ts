import { IDatabase } from "../core/database/interface/IDataBase.js";
import { Bean } from "../core/Ioc/decorator/Bean.js";
import { Repository } from "../core/database/repository/Repository.js";
import { Connect } from "../core/database/decorator/Connect.js";
import { DBconfig } from "../config/index.js";

class Test {

}

export interface TestRepository extends Repository<Test> {

}

@Bean()
export class ConcreteTestRepository implements TestRepository {
    @Connect(DBconfig)
    database: IDatabase;

}