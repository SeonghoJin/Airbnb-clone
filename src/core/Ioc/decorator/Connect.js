export var Connect = function (database, entity) {
    return function (target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            value: new database(entity.name)
        });
        Reflect.set(target, propertyKey, "Bean", "database");
    };
};
