// Conversion Constants
const millisecondToDays = 1000*60*60*24;
const millisecondToHours = 1000*60*60;
const millisecondToMinutes = 1000*60;
const millisecondToSeconds = 1000;

const refresh = 1000;
const greenDay = 90;

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
    wowCountdown.style.color = calculateColorString(countdown);
}

// How do we switch colors of the countdown text?

// We want to go between green and red.
// Colors in computers are represented in one of a few ways, we'll focus on RGB - Red, Green, Blue
// The level of Red, Green, and Blue represented in a color is on a scale from 0 to 255 (the range of an unsigned 8 bit number)
// Since there are 3 colors, there are 3 numbers. You'll often see these numbers expressed in hexidecimal notation.
// Each hexidecimal character represents 4 bits, so 2 characters to represent 8 bits. Values go from 0-9 and A-F (16 different values, 0 = 0, 1-1, ... A=10, F=15)
// F = 1111 = 15, E = 1110 = 14
// FF = 11111111 = 255
// The shift from green to red is actually pretty simple. There's no blue. At all... Which means the vales are only changing the red and green channels.
// All the way red: Red=255, Green=0, All the way Green: Red=0, Green=255, Yellow: Red=255, Green=255
// Let's start with 50 days out as green.

function calculateColorString(timeleft) {
    const greenMillis = greenDay * 24 * 60 * 60 * 1000; // Green day times 24 hours times 60 minutes times 60 seconds times 1000 milliseconds
    const yellowMillis = greenMillis / 2;

    var maxStrength = 255;
    var greenStrength;
    var redStrength;

    if (timeleft > yellowMillis) {
        greenStrength = maxStrength;
        redStrength = (1-((timeleft - yellowMillis) / yellowMillis)) * 255;
    } else {
        greenStrength = (timeleft / yellowMillis) * 255;
        redStrength = maxStrength;
    }

    console.log("Green Strength: " + greenStrength + ", Red Strength: " + redStrength);

    return "rgb(" + redStrength.toString() + ", " + greenStrength + ", 0)"      // rgb(100, 100, 0)
}

// Time Calculations
updateCountdown();
    
setInterval(updateCountdown, refresh)

