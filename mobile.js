'use strict';

/* функционал для работы мобильной версии */

const iconeEl = document.querySelector('.menu_icon');
const menuNavList = document.querySelector('.nav_list');


/* Обработчик события по клику на иконку бургера */
iconeEl.addEventListener('click', () => {
    document.body.classList.toggle('lock'); //добавляем класс дл боди
    iconeEl.classList.toggle('active'); // добавляем класс для иконки буцргера
    menuNavList.classList.toggle('active'); //добавляем класс для меню
});

