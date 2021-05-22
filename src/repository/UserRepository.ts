import { User } from "../domain/User.js";
import { Repository } from "./Repository.js";

class UserRepository extends Repository<User>{

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
