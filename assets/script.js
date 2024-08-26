document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.querySelector('.menu-button');
    const fullScreenMenu = document.querySelector('.full-screen-menu');

    let isMenuOpen = false;

    menuButton.addEventListener('click', () => {
        if (isMenuOpen) {
            fullScreenMenu.style.display = 'none';
        } else {
            fullScreenMenu.style.display = 'flex';
        }
        toggleButton();
        isMenuOpen = !isMenuOpen;
    });

    fullScreenMenu.addEventListener('click', (event) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        fullScreenMenu.style.display = 'none';
        toggleButton();
        isMenuOpen = false;
    });
});

function toggleButton() {
    var button = document.querySelector('.menu-button');
    button.classList.toggle('active');
}