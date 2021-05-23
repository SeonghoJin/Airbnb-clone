import Container from "../Container.js";
import "reflect-metadata";
export var Bean = function () {
    return function (target) {
        var property = Reflect.ownKeys(target.prototype).map(function (key) {
            return Reflect.getMetadata('design:type', target.prototype, key);
        }).filter(function (value) {
            return value !== undefined;
        });
        property.map(function (prop) {
            Bean()(prop);
        });
        Container.set(target);
    };
};
