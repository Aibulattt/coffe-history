import {Form} from './Form';
import '../style/style.scss';
import '../style/media1024.scss';
import InputMask from 'inputmask';
import {OpenMenu} from './mobile-menu';
import {swiperPrice} from './swiper';
import { Modal } from './popup';

document.addEventListener('DOMContentLoaded', async () => {
    InputMask({
        mask: "+7 (999) 999 99 99"
    }).mask(document.querySelectorAll("input[type='tel']"));
    swiperPrice();
    OpenMenu();
    Modal();
    Form();
    
})
