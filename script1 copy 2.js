function Clock (element) {
        this.element = element;
    }

Clock.prototype.render = function () {
    let time = new Date;
    let hours = time.getHours();
    this.element.innerHTML = `${hours}`
    
};

function ClockFull(element){
    Clock.call(element)
}

ClockFull.prototype = Object.create (Clock.prototype)

ClockFull.prototype.render = function () {
        let time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds()
        this.element.innerHTML = `${hours}:${minutes}:${seconds}` 
};

function ClockForm (element){
    Clock.call(element)
}

ClockForm.prototype = Object.create (Clock.prototype)

ClockForm.prototype.render = function () {
        let time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        this.element.innerHTML = `${hours}:${minutes}`
               
};

let clockDisplayElement = document.querySelector(".clockpage")
let timeFull = new ClockFull (clockDisplayElement); 
let timeForm = new ClockForm (clockDisplayElement);
console.log(timeFull)
console.log(timeForm.render)



clockDisplayElement.addEventListener('click', (event) =>{
event.target.classList.toggle('hidden')
  })

setInterval(() => {
    if (clockDisplayElement.classList.contains('hidden')) {
        timeForm.render();
    } else {
        timeFull.render();
    }
}, 100)

