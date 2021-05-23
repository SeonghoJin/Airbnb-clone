import { Clazz } from "../interface/Clazz";


export default new class {
    private container: Map<Clazz, any>;
    constructor() {
        this.container = new Map<Clazz, any>();

    }

    set<T extends Clazz>(clazz: T, ...args: any[]) {
        let item = this.get(clazz);
        if (item !== null) {
            return item;
        }
        item = new clazz(...args);
        this.container.set(clazz, item);
        console.log(item);
        return item;
    }

    get<T extends Clazz>(clazz: T, ...args: any[]): T | null {
        let item = this.container.get(clazz);
        if (item === undefined) {
            item = new clazz(...args);
            this.container.set(clazz, item);
        }
        return this.container.get(clazz);
    }

}
