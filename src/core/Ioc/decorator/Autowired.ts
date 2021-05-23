import "reflect-metadata"
import { Clazz } from "../../interface/Clazz.js";
import Container from "../Container.js";
import { Bean } from "./Bean.js";
export const AutoWired = (selectType?: Clazz) => {

    return (target: any, propertyKey: string) => {
        let type = selectType !== undefined ? selectType : Reflect.getMetadata('design:type', target, propertyKey);
        Bean()(type)
        const instance = Container.get(type);
        Reflect.defineProperty(target, propertyKey, {
            value: instance
        });
    }
}