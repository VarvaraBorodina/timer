let time = 0;
let flag = false;

const stopbutton = document.getElementById("stop");
const reset = document.getElementById("reset");
const startbutton = document.getElementById("start");
const $time = document.getElementById("time");
const ring = document.querySelector(".ring");

// transform time to mm:ss format
function transformTime(time) {
    if(time%60 < 10) {
        if(time/60 < 10) {
            return `0${Math.trunc(time/60)}:0${time%60}`;
        } else {
            return`${Math.trunc(time/60)}:0${time%60}`
        }      
    } else {
        if(time/60 < 10) {
            return`0${Math.trunc(time/60)}:${time%60}`;
        } else {
            return `${Math.trunc(time/60)}:${time%60}`
        }
    }
}

//render time and progrees ring
function render() {
    $time.textContent = transformTime(time);
    let i=time%60;
    ring.style.strokeDasharray = `${i*10.46666} ${628-i*10.46666}`;
    ring.style.stroke = `rgb(255,255,255,${1-i*i*0.0002-i*0.0002})`;
}

function updateTime() {
    time++;
    render();
}

render();

setTimeout(function timer() {
    if(flag) {
        updateTime();
    } 
    setTimeout(timer, 100);
}, 100);

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

