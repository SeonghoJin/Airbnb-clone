// import header from "./header.js";
// import login from "./login.js";
import App from "./app"
import "../css/footer.css"
import "../css/header.css"
import "../css/index.css"
import "../css/modal.css"
import "../css/search.css"
import Header from "./components/header/header";
import City from './components/city/city';
import Search from "./components/search/search"

new Header(document.querySelector('header'));
new City(document.querySelector('city'));
new Search(document.querySelector('search'));