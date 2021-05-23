import Container from "../Container.js"
import { Clazz } from "../../interface/Clazz.js"
import "reflect-metadata"
export const Bean = () => {
    return (target: Clazz): any => {

        const temp = Reflect.ownKeys(target.prototype);
        const property = Reflect.ownKeys(target.prototype).map((key: any) => {
            return Reflect.getMetadata('design:type', target.prototype, key);
        }).filter((value) => {
            return value !== undefined && value !== Object;
        });
        property.map((prop: any) => {
            Bean()(prop);
        })
        Container.set(target);
    }
}
