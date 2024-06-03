import vars from '../_vars';
const {timers} = vars;

function formatedValue(value, countValue) {
    return value < countValue ? '0' + value : '' + value;
}

if (timers) {
    timers.forEach(function(item) {  
        const itemDate = item.getAttribute('data-time');
        const countDownDate = new Date(itemDate).getTime();
        
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
       
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                clearInterval(x);
                const offerCardDiscountText = item.parentNode.querySelector('.offer-card__discount-text');
                if (offerCardDiscountText) {
                    offerCardDiscountText.textContent = 'Time for the offer has expired!';
                }
             
                item.querySelector('.timer__days').style.display = 'none';
                item.querySelector('.timer__hours').style.display = 'none';
                item.querySelector('.timer__minutes').style.display = 'none';
                item.querySelector('.timer__seconds').style.display = 'none';
                return;
            }

            if (!item.classList.contains('stop')) {
                item.querySelector('.timer__days').innerText = formatedValue(days, 10);
                item.querySelector('.timer__hours').innerText = formatedValue(hours, 10);
                item.querySelector('.timer__minutes').innerText = formatedValue(minutes, 10);
                item.querySelector('.timer__seconds').innerText = formatedValue(seconds, 10);
            }
        }, 1000);
    });
}
