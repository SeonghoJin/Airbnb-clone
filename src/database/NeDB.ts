import nedb from 'nedb'
import { IDatabase } from './IDataBase'

export class NeDB<T> implements IDatabase<T>{
    private db: nedb<T>
    constructor() {
        this.db = new nedb<T>({
            filename: Date.now().toString(),
            autoload: true
        })
    }

    insert(data: T): Promise<void> {
        return new Promise<void>((res, rej) => {
            this.db.insert(data, (err, doc: T) => {
                res();
            })
        })
    }

    find(query: any): Promise<T[]> {
        return new Promise<T[]>((res, rej) => {
            this.db.find(query, (err: Error, doc: T[]) => {
                res(doc);
            })
        })
    }

}
