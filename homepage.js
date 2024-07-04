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

    function observer() {
        const cards = document.querySelectorAll('.HomepageInfo__card')
        const updateHeader = document.querySelector('.HomepageUpdates__footer')
        const appear = new IntersectionObserver(
            observedItems => {
                observedItems.forEach(observedItem => {
                    observedItem.target.classList.toggle("appear", observedItem.isIntersecting)
                    if (observedItem.isIntersecting) appear.unobserve(observedItem.target)
                });
            },
            { threshold: 1 });
        cards.forEach(card => {
            appear.observe(card)
        });
        appear.observe(updateHeader)
    }

    observer()
});
