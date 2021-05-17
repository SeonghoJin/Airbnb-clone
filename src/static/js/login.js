import axios from "axios";
const login_button = document.querySelector('.signup_and_login');
const input_email = document.querySelector('.input_email');
const uri = 'http://localhost:3000'

login_button.addEventListener('click', (e) => {
    console.log(1);
    axios({
        method: 'post',
        url: uri + '/auth/login',
        data: {
            email: input_email.valueaa
        }
    })
});