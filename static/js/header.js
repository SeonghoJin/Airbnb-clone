const headerbackground = document.querySelector('.header_background');
const main_nav_wrapper = document.querySelector('.main_nav_wrapper');
const logo_svg = document.querySelector('.logo_wrapper svg');
const header = document.querySelector('header');
let scrolled = false;

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