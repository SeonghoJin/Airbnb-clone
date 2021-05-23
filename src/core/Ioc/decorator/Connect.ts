import { IDatabase } from "../../database/IDataBase";
import { Clazz, GenericClazz } from "../../interface/Clazz"


export const Connect = <T>(database: GenericClazz<T>, entity: Clazz) => {
    return (target: any, propertyKey: any) => {
        Reflect.defineProperty(target, propertyKey, {
            value: new database(entity.name)
        })
        Reflect.set(target, propertyKey, "Bean", "database");
    }
}
