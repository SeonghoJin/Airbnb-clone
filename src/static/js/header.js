const headerbackground = document.querySelector('.header_background');
const main_nav_wrapper = document.querySelector('.main_nav_wrapper');
const logo_svg = document.querySelector('.logo_wrapper svg');
const header = document.querySelector('header');
let scrolled = false;

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}

function enableScroll() {
    document.body.style.overflow = null;
}

document.addEventListener('scroll', () => {
    let check = false;
    if (document.scrollingElement.scrollTop < 0.1) {
        check = !(scrolled === false)
        scrolled = false;
    } else {
        check = !(scrolled === true)
        scrolled = true;
    }

    if (check) {
        if (scrolled === true) {
            addScolledClass();
        } else {
            removeScrolledClass();
        }
    }
})

const addScolledClass = () => {
    headerbackground.classList.add('scrolled');
    main_nav_wrapper.classList.add('scrolled');
    logo_svg.classList.add('scrolled');
    header.classList.add('scrolled');
}

const removeScrolledClass = () => {
    headerbackground.classList.remove('scrolled');
    main_nav_wrapper.classList.remove('scrolled');
    logo_svg.classList.remove('scrolled');
    header.classList.remove('scrolled');
}


const third_tap_button = document.querySelector('.sub_tab.third');
const options = document.querySelector('.options');

const changeDisplay = () => {
    options.style.display = (options.style.display === "none" ? "block" : "none");
}

third_tap_button.addEventListener('click', () => {
    changeDisplay();
})

const login_button = document.querySelector('.login');
const login_modal = document.querySelector('.login_modal');
const login_container = document.querySelector('.modal_container');
const remove_modal = document.querySelector('.remove_modal');

login_button.addEventListener('click', (e) => {
    pop_up_login_modal();
})

login_container.addEventListener('click', (e) => {
    remove_login_modal();
})

remove_modal.addEventListener('click', (e) => {
    remove_login_modal();
})

const pop_up_login_modal = () => {
    changeDisplay();
    login_modal.classList.remove('hidden');
    login_modal.classList.add('flex');
    disableScroll();
}

export const remove_login_modal = () => {
    login_modal.classList.remove('flex');
    login_modal.classList.add('hidden');
    enableScroll();
}


const input_example = document.querySelector('.input_example');
const input_email = document.querySelector('.input_email');

input_email.addEventListener('focus', (e) => {
    input_email.classList.remove('op0');
    input_example.classList.add('animation');
})

input_email.addEventListener('blur', (e) => {
    if (input_email.value == "") {
        input_email.classList.add('op0');
        input_example.classList.remove('animation');
    }
})