import axios from "axios";

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