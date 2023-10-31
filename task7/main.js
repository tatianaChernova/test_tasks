
// Инициализация popover bootstrap

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

// Нажатие Подтвердить
document.querySelector('#submit-btn').onclick = function (event) {
    // Получение данных input 
    event.preventDefault();
    let input = [];
    input[0] = document.getElementById("input-1").value;
    input[1] = document.getElementById("input-2").value;
    input[2] = document.getElementById("input-3").value;
    // Передача в названия кнопок
    if (input[0] != '' && input[1] != '' && input[2] != '') {
        document.getElementById("btn-text-1").innerHTML = input[0];
        document.getElementById("btn-text-2").innerHTML = input[1];
        document.getElementById("btn-text-3").innerHTML = input[2];
    }
    // Передача во всплывающие подсказки 
    document.querySelector('.btn-1').setAttribute('data-bs-content', input[0]);
    document.querySelector('.btn-2').setAttribute('data-bs-content', input[1]);
    document.querySelector('.btn-3').setAttribute('data-bs-content', input[2]);
}








