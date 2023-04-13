let cutDownDate = new Date('Jan 1, 2024 00:00:00').getTime();
let counter = setInterval(() => {

    let now = new Date().getTime();

    let distance = cutDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timeToNY").innerHTML = days + " днів " + hours + " годин "
        + minutes + " хвилин " + seconds + " секунд";


}, 1000);




