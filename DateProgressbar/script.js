function dateDiff(start, end) {
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

function updateDateTime() {
  const startDate = new Date("2024-04-22");
  const endDate = new Date("2029-04-22");

  const date = new Date();

  const totalDays = dateDiff(startDate, endDate);
  const pastDays = dateDiff(startDate, date);
  const progress = pastDays / totalDays;

  document.querySelector("#day-progress").value = 80;
  document.querySelector("#day-progress").textContent =
    progress.toFixed(2) + "%";
  //   document.querySelector("#day-progress").setAttribute('data-label', `Progress: ${progress.toFixed(2)}%`);
}

function timeLeft(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

$(document).ready(function () {
  const now = new Date();
  const startDate = new Date("2024-04-22 00:00:00");
  const deadline = new Date("2029-04-22 00:00:00");

  // display the current date and time
  const currentDateTime = now.toLocaleString();
  document.querySelector("#current-time").textContent = currentDateTime;

  // display the progress
  const totalDays = dateDiff(startDate, deadline);
  const pastDays = dateDiff(startDate, now);
  const progress = (pastDays / totalDays).toFixed(2);
  $('#day-progress').attr('aria-valuenow', progress); 
  $('#day-progress-bar').css('width', progress+'%').text(progress + "%"); 

  var setClock = function (newyear) {
    var timeinterval = setInterval(function () {
      var t = timeLeft(newyear);
      $("#days").text(t.days);
      $("#hours").text(t.hours);
      $("#mins").text(("0" + t.minutes).slice(-2));
      $("#secs").text(("0" + t.seconds).slice(-2));
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var now = new Date();
        var yearStr = now.getFullYear().toString();
        $("#header").text("Happy New Year!!!");
        $("#days").text(yearStr[0]);
        $("#days-text").text("Happy");
        $("#hours").text(yearStr[1]);
        $("#hours-text").text("New");
        $("#mins").text(yearStr[2]);
        $("#mins-text").text("Year");
        $("#secs").text(yearStr[3]);
        $("#secs-text").text("!!!");
        $("#info").text("Countdown starts again tomorrow!");
      }
    }, 1000);
  };

  setClock(deadline);
});
