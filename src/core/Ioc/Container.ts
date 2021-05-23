
interface Clazz {
    new(...args: any[]): any
}

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
        return item;
    }

    get<T extends Clazz>(clazz: T, ...args: any[]): T | null {
        const item = this.container.get(clazz);
        if (item === undefined) return null;
        return item;
    }

}
