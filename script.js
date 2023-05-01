let login = document.querySelector('.main-navbar__login--button');
let menuNavBar = document.querySelector('.main-navbar__menu--button');
let menuSideNavBar = document.querySelector('.sidenav-navbar__menu--button');
let sideNavBar = document.querySelector('.sidenav-sidebar');


login.addEventListener('click', () => {
    alert('Action is not available!');
});

menuNavBar.addEventListener('click', () => {
    sideNavBar.classList.remove('close-sidenav');
});

menuSideNavBar.addEventListener('click', () => {
    sideNavBar.classList.add('close-sidenav');
});