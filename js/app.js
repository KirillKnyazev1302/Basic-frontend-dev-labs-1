$(document).ready(function () {
    $('.burger_menu').on('click', function(e) {
        e.preventDefault(); //прерываем стандартное событие (переход по ссылке, т.к. .burger_menu - ссылка)
        $('.header_menu').slideToggle('200'); //открываем закрываем меню
        $('.burger_menu').toggleClass('opened'); //добавляем убираем класс opened (для преобразования в крестик)
    });
});