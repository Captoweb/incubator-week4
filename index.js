let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
    startButton.setAttribute('disabled', ''); // блокирую (disabled) кнопку с id start
    startButton.style.cursor = 'not-allowed'; // убираю cursor: pointer
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
    startButton.removeAttribute('disabled'); // убираю (disabled) кнопку с id start
    startButton.style.cursor = 'pointer'; // добавляю cursor: pointer
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}


// Логика следующая.

//     При нажатии на кнопку "Запустить часы", часы должны идти
//     При нажатии на кнопку "Остановить часы ", часы должны остановиться
//     🌟 Задача со звездочкой.
//     ❗Тесты не проверяют данный пункт.
//     Попробуйте 2 раза кликнуть на кнопку "Запустить часы" и потом попробовать 
// "Остановить часы ". У вас это не получится. Ваша задача выяснить почему и починить код