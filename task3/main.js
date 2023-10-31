$(function () {
    $('.colors-btn').on('click', function () {
        //количество строк в таблице
        var rowCount = $('tbody tr').length;
        //обнулить цвет всех строк 
        $('tbody tr').css('background-color', '#efecec');
        //общая функиця рандомайзер
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        let colorsArr = ["#94CBFF", "#FD9191", "#DFFF9B", "#FDFF83"]; //array 4 цветa
        var k = 0;
        while (k < 4) {
            const i = getRandomInt(1, rowCount); //рандомный выбор строки           
            const j = getRandomInt(0, 3); //рандомный выбор цвета  
            $('tbody tr:nth-child(' + i + ')').css('background-color', colorsArr[j]);
            k++;
        }
    });
});