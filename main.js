window.addEventListener('scroll', onScroll);

function onScroll(){
    const navigation = document.querySelector('nav');
    if(scrollY > 0){
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function startSale(duration, display){
    let timer = duration, minutes, seconds;

    setInterval(() => {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = '05D 07:' + minutes + ':' + seconds + '!';

        if(--timer < 0){
            timer = duration
        }

    }, 1000)
}

window.onload = () => {
    const timerPosition = document.querySelector('#timer');

    const minutes = 54 * 60;
    const seconds = 23;

    const totalSeconds = minutes + seconds;

    startSale(totalSeconds, timerPosition);
}

// 7 * 60 = 25200 +
// 54 * 60 = 3240 +
// 23 = 23 = 28.263