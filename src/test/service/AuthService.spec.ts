import assert from 'assert';
import { AuthService } from '../../service/AuthService.js';
import Test from '../test.js'


describe('AuthService 함수 테스트', () => {

    const authService: AuthService = Test.authService;

    it("vaildID 테스트, 값이 제대로 들어올 경우", () => {
        assert.ok(authService.vaildEmail("asdsa@ASD"));
        assert.ok(authService.vaildEmail("asdsa@AaaSD"));
        assert.ok(authService.vaildEmail("asdsa@ASasdaD"));
        assert.ok(authService.vaildEmail("asdsaasdasdaasd@ASD"));
        assert.ok(authService.vaildEmail("asdsa@ASDasdad"));
    })

    it("vaildID 테스트, 값이 제대로 들어오지 않을 경우", () => {
        assert.ok(!authService.vaildEmail("asdsa"));
        assert.ok(!authService.vaildEmail("asdsa@"));
        assert.ok(!authService.vaildEmail("@asa@dsa!!@"));
        assert.ok(!authService.vaildEmail("@asa@dsaasd"));
        assert.ok(!authService.vaildEmail("@asa@dsaasdad"));
    })

})