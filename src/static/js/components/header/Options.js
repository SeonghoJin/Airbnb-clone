import Component from "../../core/Component";

export default class Options extends Component {

    template() {
        return `
                    <ul>
                        <li class="login">
                            로그인
                        </li>
                        <li>
                            회원 가입
                        </li>
                    </ul>
                    <ul>
                        <li>
                            숙소 호스트 되기
                        </li>
                        <li>
                            체험 호스팅하기
                        </li>
                        <li>
                            도움말
                        </li>
                    </ul>        
        
        `
    }

    setEvent() {
        const {
            onLogin,
        } = this.props;
        this.addEvent('click', '.login', onLogin);
    }

}