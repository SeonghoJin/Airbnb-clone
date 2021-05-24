import { IDatabase, isIDatabase } from "../../database/IDataBase.js";
import { NeDB } from "../../database/NeDB.js";
import { Clazz, } from "../../interface/Clazz.js"
import { IDBconfig } from "../../interface/DBconfig.js";
import Container from "../Container.js";

export const Connect = (config: IDBconfig, database?: Clazz) => {
    return (target: any, propertyKey: any) => {
        if (database === undefined) {
            const newDatabase = Container.getBeanOfInterface(isIDatabase);
            if (newDatabase === null) {
                Connect(config, NeDB)(target, propertyKey);
            } else {
                Reflect.defineProperty(target, propertyKey, {
                    value: newDatabase
                })
            }
        }
        else {
            Container.set(database, config);
            Reflect.defineProperty(target, propertyKey, {
                value: Container.get(database)
            })
        }
    }
}
