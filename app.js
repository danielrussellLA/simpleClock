var clock = document.getElementById('clock');

setInterval(function(){
  clock.innerHTML = getCurrentTime();
}, 1);

function getCurrentTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
  hours === 0 ? hours = 12 : hours = hours;
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();
  var currentTime = hours + ':' + minutes + ':' + seconds;
  return currentTime;
}
