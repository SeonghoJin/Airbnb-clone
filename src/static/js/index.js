import header from "./header.js";
import login from "./login.js";
import App from "./app"
import City from "./components/city/city"
import "../css/footer.css"
import "../css/header.css"
import "../css/index.css"
import "../css/modal.css"
import "../css/search.css"

new App(document.querySelector('app'));
new City(document.querySelector('.city'));