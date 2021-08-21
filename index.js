let time = 0;
let flag = false;

const stopbutton = document.getElementById("stop");
const reset = document.getElementById("reset");
const startbutton = document.getElementById("start");
const $time = document.getElementById("time");
const svg = document.querySelector(".ring");

function render() {
        if(time%60 < 10) {
            if(time/60 < 10) {
                $time.textContent = `0${Math.trunc(time/60)}:0${time%60}`;
            } else {
                $time.textContent = `${Math.trunc(time/60)}:0${time%60}`
            }
            
        } else {
            if(time/60 < 10) {
                $time.textContent = `0${Math.trunc(time/60)}:${time%60}`;
            } else {
                $time.textContent = `${Math.trunc(time/60)}:${time%60}`
            }
        }
}

function updatetime() {
    let i=time%60;
    svg.style.strokeDasharray = `${i*10.46666} ${628-i*10.46666}`;
    svg.style.stroke = `rgb(255,255,255,${1-i*i*0.0002-i*0.0002})`;
    time++;
    render();
}

render();

setTimeout(function timer() {
    if(flag) {
        updatetime();
    } 
    setTimeout(timer, 1000);
}, 1000);

reset.addEventListener('click', () => {
    flag = false
    time = 0;
    svg.style.stroke = `rgb(255,255,255,0)`;
    render();
 });

stopbutton.addEventListener('click', () => {
    flag = false;
});

startbutton.addEventListener('click', () => {
    flag = true;
});

