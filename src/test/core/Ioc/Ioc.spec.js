import assert from 'assert';
import { MySQL } from '../../../core/database/MySQL.js';
import { NeDB } from '../../../core/database/NeDB.js';
import Container from '../../../core/Ioc/Container.js';
import { ConcreteUserRepository } from '../../../repository/UserRepository.js';
import { AuthService } from '../../../service/AuthService.js';
import Test from '../../test.js';
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
});
