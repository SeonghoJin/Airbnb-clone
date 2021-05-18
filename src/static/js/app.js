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
        new Header(document.querySelector('header'));
        new City(document.querySelector('city'));
        new Search(document.querySelector('search'));
        new MainBackground(document.querySelector('main-background'));
        new House(document.querySelector('house'));
        new Experience(document.querySelector('experience'));
        new ContentThree(document.querySelector('contentThree'));
        new Footer(document.querySelector('footer'));
        new LoginModal(document.querySelector('LoginModal'));
    }

}