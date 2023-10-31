$(function () {
    // Нажатие на Submit
    $(".percents__submit-btn").on('click', function () {
        // Получение данных о процентах
        var percents = $(".percents__input").val();
        // Проверка введенного числа
        if (percents < 0 || percents > 100) {
            $(".result-message").text("Please fill in number from 0 to 100");
            return false;
        }
        $(".result-message").text("");

        // Анимация progress bar
        $(".progress-bar__fill").animate({ 'width': percents + '%' }, 3000, function () {
            // Разблокировка кнопки перезапуска анимации
            $(".reset-animation-btn").removeAttr('disabled');
        });
    });

    // Очистка progress-bar при нажатии кнопки Clear
    $(".percents__clear-btn").on('click', function () {
        location.reload();
        $(".progress-bar__fill").css("width", "0%");
    });

    // Перезапуск анимации при нажатии кнопки Reset

    $(".reset-animation-btn").on('click', function () {
        // Получение данных о процентах
        var percents = $(".percents__input").val();

        $(".reset-animation-btn").attr("disabled", "true");
        $(".progress-bar__fill").css("width", "0%");
        $(".progress-bar__fill").animate({ 'width': percents + '%' }, 3000, function () {
            // Разблокировка кнопки перезапуска анимации
            $(".reset-animation-btn").removeAttr('disabled');
        });
    });
});