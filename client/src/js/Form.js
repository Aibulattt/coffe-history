export function Form () {
    const formHero = document.getElementById('form-hero');
    let nameHero = formHero.querySelector('.js-hero__name');
    let telHero = formHero.querySelector('.js-hero__tel');
    let emailHero = formHero.querySelector('.js-hero__email');
    const modal = document.querySelector('.form');

    const formModal = document.getElementById('form-modal');
    let nameModal = formModal.querySelector('#form_name');
    let telModal = formModal.querySelector('#form_tel');
    let emailModal = formModal.querySelector('#form_email');
    let messageModal = formModal.querySelector('#form_message')

    const modalSend = document.querySelector('.js-modal-send');
    const tarifBtn = document.querySelectorAll('.js-open-modal[data-id]');
    const overlay = document.querySelector('.overlay');
    let tarif = '';

    tarifBtn.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            tarif = ev.target.dataset.id;
        })
    })

    const modalError = document.createElement('div');
    modalError.className= 'modal-error';
    modalError.innerHTML = `<p class="modal-error__text">Введите корректные данные</p>`

    const validationForm = (name, tel, email, message) => {
        const validEmail = /.+@.+\..+/i;
        if (document.documentElement.clientWidth > 1024) {
            if ( (name.length < 2) || (!tel ) || (!validEmail.test(email)) ) {
                document.body.append(modalError);
                setTimeout(() => modalError.remove(), 2500)
                return false;
            } 
        } else {
            if ( (name.length < 2) || (!tel ) || (message.length < 10) ) {
                document.body.append(modalError);
                setTimeout(() => modalError.remove(), 2500)
                return false;
            } 
        }

         return true;
    }

    const validationFormHero = (name, tel, email) => {
        const validEmail = /.+@.+\..+/i;
            if ( (name.length < 2) || (!tel ) || (!validEmail.test(email)) ) {
                document.body.append(modalError);
                setTimeout(() => modalError.remove(), 2500)
                return false;
            } 

         return true;
    }

    const sentFormAnimation = () => {
        modalSend.classList.add('form-sending');
        modalSend.classList.remove('form-sending__hide');
        setTimeout(() => {
            modalSend.classList.remove('form-sending');
            modalSend.classList.add('form-sending__hide');
        }, 1500)
    }

    
    const getFormData = async (tarif) => {
        try {
            const userData = {
                name: nameModal.value,
                tel: telModal.value,
                email: emailModal.value || '',
                tarif: tarif || '',
                message: messageModal.value || ''
            };
            
            const response = await fetch('https://salty-cove-34110.herokuapp.com/api/send', { 
                method: 'POST',
                body: JSON.stringify({...userData}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                sentFormAnimation();
                formModal.reset()
            }
        } catch (e) {
            console.log('server errrrrr',e);
        }
    }
    
    formModal.addEventListener('submit', (ev) => {
        ev.preventDefault();
        if(validationForm(nameModal.value,telModal.value,emailModal.value, messageModal.value)){
            getFormData(tarif);
            modal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('lock');
        }
    })
    
    const getUserData = async () => {
        try {
            const userData = {
                name: nameHero.value,
                tel: telHero.value,
                email: emailHero.value,
            }
            nameHero.value = '',
            telHero.value = '',
            emailHero.value = '';
            const response = await fetch('https://salty-cove-34110.herokuapp.com/api/send', { 
                method: 'POST',
                body: JSON.stringify({...userData}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                sentFormAnimation();
                formHero.reset()
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    formHero.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        if(validationFormHero(nameHero.value, telHero.value, emailHero.value)){
            getUserData();
        }
    })
}