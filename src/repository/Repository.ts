import { IDatabase } from "../core/database/IDataBase";

export class Repository<T>{
    protected database: IDatabase<T>
    constructor(database: IDatabase<T>) {
        this.database = database;
    }
}