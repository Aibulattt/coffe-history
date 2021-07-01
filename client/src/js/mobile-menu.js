export const OpenMenu = () => {
    const btnOpen = document.querySelector('.header__burger-btn');
    const header = document.querySelector('header');
    const hedaerWrapper = document.querySelector('.header__menu-mobile');

    btnOpen.addEventListener('click', () => {
        header.classList.toggle('mobile-menu');
        document.body.classList.toggle('lock');
    })

    hedaerWrapper.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'A' || ev.target.tagName === 'BUTTON') {
            header.classList.remove('mobile-menu');
            document.body.classList.remove('lock');
        }
    })
}