function dateDiff(start, end) {
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

function updateDateTime() {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector("#current-time").textContent = currentDateTime;

  const startDate = new Date("2024-04-22");
  const endDate = new Date("2029-06-22");

  const date = new Date();

  const totalDays = dateDiff(startDate, endDate);
  const pastDays = dateDiff(startDate, date);
  const progress = pastDays / totalDays;

  document.querySelector("#day-progress").value = 80;
  document.querySelector("#day-progress").textContent =
    progress.toFixed(2) + "%";
  //   document.querySelector("#day-progress").setAttribute('data-label', `Progress: ${progress.toFixed(2)}%`);
}

setInterval(updateDateTime, 1000);

function timeLeft(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };
  
  $(document).ready(function() {
    var today = new Date();
    var deadline = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00";
    if (today.getMonth() == 0 && today.getDate() == 1) {
      deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";
    };
    
    $("#header").hover(function() {
      $(this).toggleClass('bluelight');
    });
    
    $(".clock").hover(function() {
      $(this).toggleClass('bluelight');
    });
    
    var setClock = function(newyear){
      var timeinterval = setInterval(function(){
        var t = timeLeft(newyear);
        $('#days').text(t.days);
        $('#hours').text(t.hours);
        $('#mins').text(('0' + t.minutes).slice(-2));
        $('#secs').text(('0' + t.seconds).slice(-2));
        if(t.total<=0){
          clearInterval(timeinterval);
          var now = new Date();
          var yearStr = now.getFullYear().toString();
          $('#header').text("Happy New Year!!!");
          $('#days').text(yearStr[0]);
          $('#days-text').text("Happy");
          $('#hours').text(yearStr[1]);
          $('#hours-text').text("New");
          $('#mins').text(yearStr[2]);
          $('#mins-text').text("Year");
          $('#secs').text(yearStr[3]);
          $('#secs-text').text("!!!");
          $('#info').text("Countdown starts again tomorrow!");
        }
      },1000);
    };
    
    setClock(deadline);
    
  });
