var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import assert from 'assert';
import { AutoWired, Connect, Container, isIDatabase, MySQL, NeDB } from 'typejnu';
import { DBconfig } from '../../../config/index.js';
import { ConcreteUserRepository } from '../../../repository/UserRepository.js';
import { AuthService } from '../../../service/AuthService.js';
var test = /** @class */ (function () {
    function test() {
    }
    __decorate([
        AutoWired(),
        __metadata("design:type", AuthService)
    ], test.prototype, "authService", void 0);
    __decorate([
        AutoWired(ConcreteUserRepository),
        __metadata("design:type", Object)
    ], test.prototype, "userRepository", void 0);
    __decorate([
        Connect(DBconfig, NeDB),
        __metadata("design:type", Object)
    ], test.prototype, "NeDBdatabase", void 0);
    __decorate([
        Connect(DBconfig, MySQL),
        __metadata("design:type", Object)
    ], test.prototype, "MySQLdatabase", void 0);
    __decorate([
        AutoWired(),
        __metadata("design:type", Object)
    ], test.prototype, "userRepositoryNoAutoWired", void 0);
    __decorate([
        Connect(DBconfig),
        __metadata("design:type", Object)
    ], test.prototype, "TestDatabase", void 0);
    return test;
}());
export { test };
var Test = new test();
describe('Ioc 테스트', function () {
    it('AuthService객체 싱글톤 테스트', function () {
        assert.strictEqual(Test.authService, Container.get(AuthService));
    });
    it('UserRepository객체 싱글톤 테스트', function () {
        assert.strictEqual(Test.userRepository, Container.get(ConcreteUserRepository));
    });
    it('UserRepository객체 class 명시 안할시 테스트', function () {
        assert.notStrictEqual(Test.userRepositoryNoAutoWired, Container.get(ConcreteUserRepository));
    });
    it('NeDB database 테스트', function () {
        assert.ok(Test.NeDBdatabase instanceof NeDB);
    });
    it('UserRepository database 싱글톤 테스트', function () {
        assert.strictEqual(Test.authService.userRepository.database, Test.userRepository.database);
    });
    it('MySQL database 테스트', function () {
        assert.ok(Test.MySQLdatabase instanceof MySQL);
    });
    it('IDatabase 주입 테스트', function () {
        assert.ok(isIDatabase(Test.TestDatabase));
    });
});
