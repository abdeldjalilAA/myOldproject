const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondesE = document.getElementById("secondes");

const newYears = "25 oct 2026";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const TTseconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(TTseconds / 3600 / 24);
  const hours = Math.floor(TTseconds / 3600) % 24;
  const minutes = Math.floor(TTseconds / 60) % 60;
  const seconds = Math.floor(TTseconds) % 60;

  daysE.innerHTML = formatTime(days);
  hoursE.innerHTML = formatTime(hours);
  minutesE.innerHTML = formatTime(minutes);
  secondesE.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
countdown();
