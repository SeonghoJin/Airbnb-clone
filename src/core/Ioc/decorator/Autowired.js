import "reflect-metadata";
import Container from "../Container.js";
import { Bean } from "./Bean.js";
export var AutoWired = function (selectType) {
    return function (target, propertyKey) {
        var type = selectType !== undefined ? selectType : Reflect.getMetadata('design:type', target, propertyKey);
        Bean()(type);
        var instance = Container.get(type);
        Reflect.defineProperty(target, propertyKey, {
            value: instance
        });
    };
};
