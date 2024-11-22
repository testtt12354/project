const btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    set1()
})


function set1(){
class Countdown {
    constructor(targetDate, boxes) {
        this.targetDate = new Date(targetDate);
        this.boxes = boxes;
        this.startCountdown();
    }

    startCountdown() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const currentDate = new Date();
        const difference = this.targetDate - currentDate;

        const totalSeconds = Math.floor(difference / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        this.updateBoxes(days, hours, minutes, seconds);
    }

    updateBoxes(days, hours, minutes, seconds) {
        this.boxes[0].textContent = days < 10 ? '0' + days : days;
        this.boxes[1].textContent = hours < 10 ? '0' + hours : hours;
        this.boxes[2].textContent = minutes < 10 ? '0' + minutes : minutes;
        this.boxes[3].textContent = seconds < 10 ? '0' + seconds : seconds;
    }
}



const boxElements = [
    document.querySelector('.box'),
    document.querySelector('.box2'),
    document.querySelector('.box3'),
    document.querySelector('.box4')
];


const countdown = new Countdown("2024-11-29T00:00:00", boxElements);
}
