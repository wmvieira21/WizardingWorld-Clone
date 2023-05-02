let login = document.querySelector('.main-navbar__login--button');
let menuNavBar = document.querySelector('.main-navbar__menu--button');
let menuSideNavBar = document.querySelector('.sidenav-navbar__menu--button');
let sideNavBar = document.querySelector('.sidenav-sidebar');

menuNavBar.addEventListener('click', () => {
    sideNavBar.classList.remove('close-sidenav');
    setTimeout(() => {
        sideNavBar.classList.add('sidenav-sidebar__transition');
    }, 10);
});

menuSideNavBar.addEventListener('click', () => {
    sideNavBar.classList.remove('sidenav-sidebar__transition');
    sideNavBar.classList.add('close-sidenav');
});