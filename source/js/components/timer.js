document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.querySelector('.timer');

    if (timerElement) {
        const endTimeStr = timerElement.getAttribute('data-time');
        console.log("End time string:", endTimeStr);
        const endTime = new Date(endTimeStr).getTime();
        console.log("End time in milliseconds:", endTime);

        const updateTimer = function() {
            const now = new Date().getTime();
            console.log("Current time in milliseconds:", now);
            const difference = endTime - now;
            console.log("Time difference in milliseconds:", difference);

            if (difference <= 0) {
                clearInterval(interval);
                timerElement.querySelectorAll('.timer__value').forEach((item) => {
                    item.textContent = '00';
                });
                timerElement.setAttribute('data-title', 'Время акции уже вышло!');
                return;
            }

            // Вычисление оставшегося времени
            const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            console.log("Remaining time:", remainingDays, remainingHours, remainingMinutes, remainingSeconds);

            // Обновление элементов на странице
            timerElement.querySelector('.timer__days').textContent = remainingDays.toString().padStart(2, '0');
            timerElement.querySelector('.timer__hours').textContent = remainingHours.toString().padStart(2, '0');
            timerElement.querySelector('.timer__minutes').textContent = remainingMinutes.toString().padStart(2, '0');
            timerElement.querySelector('.timer__seconds').textContent = remainingSeconds.toString().padStart(2, '0');
        };

        // Проверка сразу после загрузки страницы
        if (new Date().getTime() >= endTime) {
            timerElement.querySelectorAll('.timer__value').forEach((item) => {
                item.textContent = '00';
            });
            timerElement.setAttribute('data-title', 'Время акции уже вышло!');
        } else {
            // Запуск таймера
            updateTimer();
            const interval = setInterval(updateTimer, 1000);
        }
    }
});
