//add hours to a date object.
Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

function countdownTimer(hrs) {
  let days,
    hours,
    minutes,
    seconds,
    endDate = new Date().addHours(hrs).getTime();

  //validate end date
  if (isNaN(endDate)) {
    return;
  }

  //1 second interval
  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      // 86400 seconds in a day
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      // 3600 seconds in an hour
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      // 60 seconds in a minute
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);

      document
        .getElementById("days")
        .getElementsByClassName("value")[0].innerText = parseInt(days, 10);
      document
        .getElementById("hours")
        .getElementsByClassName("value")[0].innerText = hours;
      document
        .getElementById("minutes")
        .getElementsByClassName("value")[0].innerText = minutes;
      document
        .getElementById("seconds")
        .getElementsByClassName("value")[0].innerText = seconds;
    } else {
      // if timer expired
      document.getElementsByClassName("container")[0].innerText = "Expired";
      return;
    }
  }
}

//IIFE for the countdown timer
(function() {
  countdownTimer(48);
})();
