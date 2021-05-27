import assert from 'assert'
import { AutoWired, Connect, Container, IDatabase, isIDatabase, MySQL, NeDB } from 'typejnu'
import { DBconfig } from '../../../config/index.js'
import { ConcreteUserRepository, UserRepository } from '../../../repository/UserRepository.js'
import { AuthService } from '../../../service/AuthService.js'


export class test {

    @AutoWired()
    authService: AuthService

    @AutoWired(ConcreteUserRepository)
    userRepository: UserRepository

    @Connect(DBconfig, NeDB)
    NeDBdatabase: IDatabase

    @Connect(DBconfig, MySQL)
    MySQLdatabase: IDatabase

    @AutoWired()
    userRepositoryNoAutoWired: UserRepository

    @Connect(DBconfig)
    TestDatabase: IDatabase

}

const Test = new test();


describe('Ioc 테스트', () => {

    it('AuthService객체 싱글톤 테스트', () => {
        assert.strictEqual(Test.authService, Container.get(AuthService))
    })

    it('UserRepository객체 싱글톤 테스트', () => {
        assert.strictEqual(Test.userRepository, Container.get(ConcreteUserRepository));
    })

    it('UserRepository객체 class 명시 안할시 테스트', () => {
        assert.notStrictEqual(Test.userRepositoryNoAutoWired, Container.get(ConcreteUserRepository));
    })

    it('NeDB database 테스트', () => {
        assert.ok(Test.NeDBdatabase instanceof NeDB);
    })

    it('UserRepository database 싱글톤 테스트', () => {
        assert.strictEqual(Test.authService.userRepository.database, Test.userRepository.database);
    })

    it('MySQL database 테스트', () => {
        assert.ok(Test.MySQLdatabase instanceof MySQL);
    })

    it('IDatabase 주입 테스트', () => {
        assert.ok(isIDatabase(Test.TestDatabase))
    })

})