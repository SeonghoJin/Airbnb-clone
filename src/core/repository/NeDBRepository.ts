import { NeDB } from "../database/NeDB.js";
import { Repository } from "./Repository.js";

export class NeDBRepository<T> extends Repository<T>{

    constructor() {
        super(new NeDB());
    }

}