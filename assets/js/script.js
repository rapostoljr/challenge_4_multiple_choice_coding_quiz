console.log("Hello world from the javascript")

var startButton = document.querySelector(".button-start");
var viewHighscoreButton = document.querySelector(".view-highscore-btn");
var timerCountdown = document.getElementById('timer-countdown');
var beginQuizSection = document.getElementById('begin-quiz');
var questionScreenSection = document.getElementById('question-screen');
var highscoresScreenSection = document.getElementById('highscores-screen');
var goBackBtn = document.getElementById('go-back-btn');
var endQuizSection = document.getElementById('end-quiz');

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
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='block';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='none';
})

viewHighscoreButton.addEventListener("click", function() {
    console.log("Hello again from VIEW HIGHSCORE button");
    // need to create something to open the highscores-screen
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='block';
})

goBackBtn.addEventListener("click", function() {
    console.log("Hello again from GO BACK button");
    // need to create something to open the highscores-screen
    beginQuizSection.style.display='';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='none';
})

