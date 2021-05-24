import { IDatabase } from "../database/IDataBase";

export interface Repository<T> {
    database: IDatabase;
}