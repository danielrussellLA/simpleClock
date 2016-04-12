// var currentDate = new Date();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var currentTime = hours + ':' + minutes + ':' + seconds;
//
var clock = document.getElementById('clock');

setInterval(function(){
  clock.innerHTML = getCurrentTime();
}, 1);

function getCurrentTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();
  // var milliseconds = currentDate.getMilliseconds();
  var currentTime = hours + ':' + minutes + ':' + seconds;
  return currentTime;
}
