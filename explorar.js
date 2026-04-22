const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.cima');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});