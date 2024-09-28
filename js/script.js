let colorInterval; // переменная для хранения интервала

// Получаем элементы
const colorBox = document.querySelector('.color-box');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

// Функция для генерации случайного цвета
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функция для старта изменения цвета
function startColorChange() {
    colorInterval = setInterval(() => {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    }, 500); // меняем цвет каждые 0.5 секунд
}

// Функция для остановки изменения цвета
function stopColorChange() {
    clearInterval(colorInterval);
}

// Обработчики событий для кнопок
startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
