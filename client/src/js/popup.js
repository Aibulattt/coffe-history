export const Modal = () => {
    const openBtn = document.querySelectorAll('.js-open-modal');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelectorAll('.js-modal-close');
    const closePopup = document.querySelectorAll('.js-close-popup');

    openBtn.forEach(btn => {
        btn.addEventListener('click', ev => {
            const modalId = ev.currentTarget.dataset.modal;
            const modalEl = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalEl.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('lock');
        })
    })

    closeBtn.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            const parentModal = ev.currentTarget.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('lock');
        })
    })

    closePopup.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            console.log('click');
            const parentModal = ev.currentTarget.closest('.modal');

            parentModal.classList.remove('active');
            // overlay.classList.remove('active');
            // document.body.classList.remove('lock');
        })
    })


    overlay.addEventListener('click', () => {
        document.querySelector('.modal.active').classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('lock');
    });

}