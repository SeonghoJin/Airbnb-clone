import axios from 'axios'



export const vaildId = (id: string) => {
    if (id.trim() === "") return false;
    return true;
}

export const vaildPassword = (password: string, repassword: string) => {
    if (password.trim() === "") return false;
    if (password.trim() !== repassword.trim()) return false;
    return true;
}

export const vaildSignUp = (id: string, password: string, repassword: string) => {
    return vaildId(id) && vaildPassword(password, repassword);
}

export const SingUpRequest = (id: string, password: string) => {

}