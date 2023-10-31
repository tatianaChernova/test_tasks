$(function () {
    // Нажатие на Start
    $(".start__btn").on('click', function () {
        $(".icon").css("animation-name", "jump");
    });
    // Нажатие на Change
    $('.colors__btn').on('click', function () {
        // Цвета
        let colorsArr = ["red", "green", "blue", "purple"];
        // Функция рандомайзер 
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        // Рандомный индекс для 4 цветов
        const i = getRandomInt(0, 3);
        // Заполнение выбранным цветом svg
        $('.icon svg g path').css('fill', colorsArr[i]);
    });
});