
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//shopw active  menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const servicesMenu = document.querySelector('#services-page');
    const aboutMenu = document.querySelector('#about-page');
    let scrollPos = window.scrollY; 
    console.log(scrollPos);

        //add 'highlight' classs to my menu items
    if (window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 1400) {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on a new item
const hideMobile = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobile);
navLogo.addEventListener('click', hideMobile);