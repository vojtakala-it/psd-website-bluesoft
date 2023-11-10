export function listenToBurger() {
    if (window.innerWidth <= 640) {
        const burger = document.querySelector('.navbar-hamburger button');
        burger.removeEventListener('click', onBurgerClick);
        burger.addEventListener('click', onBurgerClick);
    }
}

function onBurgerClick() {
    const navList = document.querySelector('.navbar-list');
    navList.classList.toggle('hamburger-menu');
}
