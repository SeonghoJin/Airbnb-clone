import { isIDatabase } from "../../database/IDataBase.js";
import { NeDB } from "../../database/NeDB.js";
import Container from "../Container.js";
export var Connect = function (config, database) {
    return function (target, propertyKey) {
        if (database === undefined) {
            var newDatabase = Container.getBeanOfInterface(isIDatabase);
            if (newDatabase === null) {
                Connect(config, NeDB)(target, propertyKey);
            }
            else {
                Reflect.defineProperty(target, propertyKey, {
                    value: newDatabase
                });
            }
        }
        else {
            Container.set(database, config);
            Reflect.defineProperty(target, propertyKey, {
                value: Container.get(database)
            });
        }
    };
};
