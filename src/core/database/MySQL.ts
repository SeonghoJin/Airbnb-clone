import { IDatabase } from "./IDataBase";
import mysql from 'mysql2';
import config from "../../config/index.js"


export class MySQL<T> implements IDatabase<T>{

    private connection;

    constructor(databaseName: string) {
        this.connection = mysql.createConnection({
            host: config.DB_HOST,
            user: config.DB_USER,
            password: config.DB_PASSWORD,
            database: databaseName
        })
    }


    find(query: any): Promise<T[]> {
        this.connection.query("desc table");
        throw new Error("Method not implemented.");
    }
    insert(data: T): Promise<void> {
        this.connection.query("desc table");
        throw new Error("Method not implemented.");
    }
}