const menu_hamburguer = document.getElementById('menu_hamburguer');
const links_do_nav = document.getElementById('links_do_nav');

menu_hamburguer.addEventListener('click', () => {
    links_do_nav.classList.toggle('active');

    menu_hamburguer.classList.toggle('is-active');

});