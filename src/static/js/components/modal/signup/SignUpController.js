export var vaildId = function (id) {
    if (id.trim() === "")
        return false;
    return true;
};
export var vaildPassword = function (password, repassword) {
    if (password.trim() === "")
        return false;
    if (password.trim() !== repassword.trim())
        return false;
    return true;
};
export var vaildSignUp = function (id, password, repassword) {
    return vaildId(id) && vaildPassword(password, repassword);
};
export var SingUpRequest = function (id, password) {
};
