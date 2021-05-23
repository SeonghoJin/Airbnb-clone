import { Bean } from "../core/Ioc/decorator/Bean.js";
import { NeDBRepository } from "../core/repository/NeDBRepository.js";
import { User } from "../domain/User.js";

@Bean()
export class UserRepository extends NeDBRepository<User>{

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
