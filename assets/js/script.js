console.log("Hello world from the javascript")

var startButton = document.querySelector(".button-start");
var viewHighscoreButton = document.querySelector(".view-highscore-btn")
var timerCountdown = document.getElementById('timer-countdown');

function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      timerCountdown.textContent = 'Timer: ' + timeLeft;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        // need to create something to go to end-quiz
      }
      timeLeft--;
    }, 1000);
  }

startButton.addEventListener("click", function() {
    console.log("Hello again from START button");
    // need to create something to open the question-screen
    countdown();
})

viewHighscoreButton.addEventListener("click", function() {
    console.log("Hello again from VIEW HIGHSCORE button");
    // need to create something to open the highscores-screen
})
