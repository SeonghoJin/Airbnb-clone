import Component from "./core/Component";
import MainBackground from "./components/main_background/MainBackground"
import Header from "./components/header/header";
import City from './components/city/city';
import Search from "./components/search/search"
import House from "./components/house/House"
import Experience from "./components/experience/Experience"
import ContentThree from "./components/contentThree/ContentThree"
import Footer from "./components/footer/Footer"
import LoginModal from "./components/login-modal/LoginModal"

export default class App extends Component {

    template() {
        return `
    <LoginModal class="login_modal hidden">
    </LoginModal>
    <header>
    </header>
    <search class="search_wrapper">
    </search>
    <main-background class="main_background_wrapper">
    </main-background>
    <city class="city main_wrapper">
    </city>
    <house class="house_kind main_wrapper">
    </house>
    <experience class="bg-bl width100 flex">
    </experience>
    <contentThree class="main_wrapper mg-tb40">
    </contentThree>
    <footer class="width100" style="background-color: #F7F7F7; border-top:1px solid #DDDDDD">
    </footer>
        `
    }

    mounted() {
        this.attach('header', Header);
        this.attach('city', City);
        this.attach('search', Search);
        this.attach('main-background', MainBackground);
        this.attach('house', House);
        this.attach('experience', Experience);
        this.attach('contentThree', ContentThree);
        this.attach('footer', Footer);
        this.attach('LoginModal', LoginModal);
    }

}