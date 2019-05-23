// Conversion Constants
const millisecondToDays = 1000*60*60*24;
const millisecondToHours = 1000*60*60;
const millisecondToMinutes = 1000*60;
const millisecondToSeconds = 1000;

const refresh = 1000;

const wowCountdown = document.querySelector(".wow-countdown");

const release = new Date('2019-08-27T00:00:00');

// Functions
function updateCountdown() {

    var now = new Date();
    var countdown = release-now;

    var days = Math.floor(countdown/millisecondToDays);
    var hoursMillis = countdown%millisecondToDays;
    var hours = Math.floor(hoursMillis/millisecondToHours);
    var minutesMillis = hoursMillis%millisecondToHours;
    var minutes = Math.floor(minutesMillis/millisecondToMinutes);
    var secondsMillis = minutesMillis%millisecondToMinutes;
    var seconds = Math.floor(secondsMillis/millisecondToSeconds);

    var countDownDisplay = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
    wowCountdown.innerHTML = countDownDisplay;
}

// Time Calculations
updateCountdown();
    
setInterval(updateCountdown, refresh)

