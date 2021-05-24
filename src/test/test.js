var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DBconfig } from "../config/index.js";
import { Connect } from "../core/database/decorator/Connect.js";
import { MySQL } from "../core/database/MySQL.js";
import { NeDB } from "../core/database/NeDB.js";
import Container from "../core/Ioc/Container.js";
import { AutoWired } from "../core/Ioc/decorator/Autowired.js";
import { ConcreteUserRepository } from "../repository/UserRepository.js";
import { AuthService } from "../service/AuthService.js";
var Test = /** @class */ (function () {
    function Test() {
    }
    __decorate([
        AutoWired(),
        __metadata("design:type", AuthService)
    ], Test.prototype, "authService", void 0);
    __decorate([
        AutoWired(ConcreteUserRepository),
        __metadata("design:type", Object)
    ], Test.prototype, "userRepository", void 0);
    __decorate([
        Connect(DBconfig, NeDB),
        __metadata("design:type", Object)
    ], Test.prototype, "NeDBdatabase", void 0);
    __decorate([
        Connect(DBconfig, MySQL),
        __metadata("design:type", Object)
    ], Test.prototype, "MySQLdatabase", void 0);
    __decorate([
        AutoWired(),
        __metadata("design:type", Object)
    ], Test.prototype, "userRepositoryNoAutoWired", void 0);
    return Test;
}());
export { Test };
export default Container.get(Test);
