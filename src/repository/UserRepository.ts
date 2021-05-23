import { IDatabase } from "../core/database/IDataBase.js";
import { MySQL } from "../core/database/MySQL.js";
import { NeDB } from "../core/database/NeDB.js";
import { Bean } from "../core/Ioc/decorator/Bean.js";
import { Connect } from "../core/Ioc/decorator/Connect.js";
import { Repository } from "../core/repository/Repository.js";
import { User } from "../domain/User.js";

export interface UserRepository extends Repository<User> {

    getUserById(id: string): Promise<User[]>;
    exist(id: string): Promise<boolean>;
    insert(user: User): Promise<void>;

}

@Bean()
export class ConcreteUserRepository implements UserRepository {

    @Connect(NeDB, User)
    database: IDatabase<User>;

    constructor() {
    }
    async getUserById(id: string): Promise<User[]> {
        return this.database.find({ id: id });
    }

    async exist(id: string): Promise<boolean> {
        const user: User[] = await this.database.find({ id: id });
        return user.length !== 0;
    }

    async insert(user: User): Promise<void> {
        return this.database.insert(user);
    }
}
