import assert from 'assert';
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
    it('UserRepository객체 class 명시 안할시 테스트', function () {
        assert.notStrictEqual(Test.userRepositoryNoAutoWired, Container.get(ConcreteUserRepository));
    });
    it('NeDB database 테스트', function () {
        assert.ok(Test.database instanceof NeDB);
    });
    it('NeDB 싱글톤 테스트', function () {
        assert.strictEqual(Test.authService.userRepository, Test.userRepository);
    });
});
