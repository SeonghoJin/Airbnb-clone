import { IDatabase } from "../database/IDataBase.js";
import { User } from "../domain/User.js";

class UserRepository {

    private database: IDatabase<User>;

    constructor(database: IDatabase<User>) {
        this.database = database;
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
