let timed = document.querySelector(".timeid");
let stopt = document.querySelector("#Stop");
let resett = document.querySelector("#Reset");
let startt = document.querySelector("#Start");

let min = 0;
let secs = 0;
let hrs = 0;
let currt = 0;
let start_time = 0;
let paused = true;
stopt.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        currt = Date.now() - start_time;
        clearInterval(inter);
    }
})
resett.addEventListener("click", () => {
    min = 0;
    secs = 0;
    hrs = 0;
    currt = 0;
    start_time = 0;
    paused = true;
    clearInterval(inter);
    timed.textContent = "00:00:00"
})
startt.addEventListener("click", () => {
    if (paused) {
        paused = false;
        start_time = Date.now() - currt;
        inter = setInterval(update_time, 1000);
    }
})

function update_time() {
    currt = Date.now() - start_time;
    hrs = Math.floor((currt / (1000 * 60 * 60)) % 60);
    min = Math.floor((currt / (1000 * 60)) % 60);
    secs = Math.floor((currt / 1000) % 60);
    timed.textContent = `${formatTime(hrs)}:${formatTime(min)}:${formatTime(secs)}`

    function formatTime(time) {
        return time < 10 ? (`0${time}`) : time;

    }
}