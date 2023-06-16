'use strict'
/**  Режимы разработки: 
 * - с использованием webpack;
 * - с использованием include;
 * 
 * для определения в каком режиме работать в файле gulpfile.js указать значение переменной
 * vars.useWebpack: true / false
 * 
 * режим webpack позволяет использовать плюшки ES6
 * режим include позволяет импортировать содержимок файлов с помощью @@include()
 */

import { deviceIdent } from "./_functions.js";
import { headerMenu } from "./files/_header.js";

deviceIdent()
headerMenu();

function runBanerAnimation() {
    let banerImgs = document.querySelector('#banerAnim');
    if (!banerImgs) return false;
    banerImgs.classList.add('_run-anim');
}


document.addEventListener('DOMContentLoaded', () => {
    runBanerAnimation();
})


function productRate() {
    let rateItems = document.querySelectorAll('.rate');
    if (!rateItems) {return false}

    for (let i = 0; i < rateItems.length; i++) {
        setRates(rateItems[i]);
    };


    function setRates(elem) {
        let rate = elem.dataset.rate;
        let stars = elem.querySelectorAll('svg');
        for (let i = 0; i < rate; i++) {
            stars[i].style.fill = "#DC780B";
        };
    }

}

productRate()


let fbSlider = new Swiper('.feedback-slider__container', {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});