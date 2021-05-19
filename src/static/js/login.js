import axios from "axios";
import {
    remove_login_modal
} from './header'
const login_button = document.querySelector('.signup_and_login');
const input_email = document.querySelector('.input_email');
const uri = 'http://localhost:3000'

login_button.addEventListener('click', (e) => {
    axios({
            method: 'post',
            url: uri + '/auth/login',
            data: {
                email: input_email.value
            }
        })
        .then((res) => {
            console.log(res);
            // remove_login_modal();
        })
});