const monthEl = document.querySelector('#month');
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const finishDate = new Date('1 Jan 2022');

function countdown() {
    const finishLearndDate = new Date(finishDate);
    const currentDate = new Date();
    const totalSeconds = (finishLearndDate - currentDate) / 1000;
    const numberOfDaysInMonth = {
        'january': 31,
        'february': function () {
            var year = currentDate.getFullYear();
            //check of leap-year
            var isLeap = new Date(year, 2, 1, -1).getDate() == 29;
            if (isLeap) {
                return 29;
            } else {
                return 28
            }
        }(),
        'march': 31,
        'april': 30,
        'may': 31,
        'june': 30,
        'july': 31,
        'august': 31,
        'september': 30,
        'october': 31,
        'november': 30,
        'december': 31
    };

    let diff = new Date(finishDate - new Date());
    let keysOfMonths = function (monthObject) {
        var objArr = [];
        for (var prop in monthObject) {
            objArr.push(monthObject[prop]);
        }
        return objArr;
    }
    let monthArr = keysOfMonths(numberOfDaysInMonth);

    let daysInMonthCheck = function (monthArr) {
        let month = new Date().getMonth();
        let days = new Date().getDate();
        let i = 0;
        for (i; i < monthArr.length; i++) {
            if (month === i) {
                return (monthArr[i] - days)
            }
        }
    };

    let daysInMonth = daysInMonthCheck(monthArr);


    // let years = diff.toISOString().slice(0, 4) - 1970;
    let month = diff.getMonth() + 1;
    let days = daysInMonth;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(years, month, days, hours, minutes, seconds);
    monthEl.innerHTML = formatTime(month);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();


setInterval(countdown, 1000);





