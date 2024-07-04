document.addEventListener('DOMContentLoaded', () => {
    function nav() {

        const show = document.querySelector('.nav__burger');
        const navMenu = document.querySelector('.nav__menu');
        const hide = document.querySelector('.fa-times');

        show.addEventListener('click', () => {
            navMenu.classList.add('active');
            //Animate Menu
        });

        hide.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

    }

    nav();

});
