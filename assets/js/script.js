var startButton = document.querySelector(".button-start");
var viewHighscoreButton = document.querySelector(".view-highscore-btn");
var timerCountdown = document.getElementById('timer-countdown');
var beginQuizSection = document.getElementById('begin-quiz');
var questionScreenSection = document.getElementById('question-screen');
var highscoresScreenSection = document.getElementById('highscores-screen');
var goBackBtn = document.getElementById('go-back-btn');
var endQuizSection = document.getElementById('end-quiz');
var submitHighScore = document.getElementById('highscore-submit-btn');
var clearHighScoreBtn = document.getElementById('clear-highscore-btn');
var highscoresInput = document.getElementById('highscores-initials-input');
var highscoresListHTML = document.getElementById('highscore-list')

var highScoresList = []
var timeLeft = 60;
var highscore

function countdown() {
    var timeInterval = setInterval(function () {
      timerCountdown.textContent = 'Timer: ' + timeLeft;
      if (timeLeft <= 0 || questionsLeft.length === 0) {
        highscore = timeLeft;
        clearInterval(timeInterval);
        timerCountdown.textContent = 'Timer: 0';
        console.log(highscore)

        // need to create something to go to end-quiz
        beginQuizSection.style.display='none';
        questionScreenSection.style.display='none';
        endQuizSection.style.display='block';
        highscoresScreenSection.style.display='none';
        viewHighscoreButton.style.display='none';
      }
      timeLeft--;
    }, 1000);
  }

startButton.addEventListener("click", function(event) {
    // need to create something to open the question-screen    
    countdown();
    newQuestion();
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='block';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='none';
    viewHighscoreButton.style.display='none';
})

viewHighscoreButton.addEventListener("click", function(event) {
    // need to create something to open the highscores-screen
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='block';
    viewHighscoreButton.style.display='none';
    timerCountdown.style.display='none';
})

goBackBtn.addEventListener("click", function(event) {
    // need to create something to open the begin-quiz
    beginQuizSection.style.display='';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='none';
    viewHighscoreButton.style.display='';
    timerCountdown.style.display='';
})

submitHighScore.addEventListener("click", function(event) {
    event.preventDefault();

    var userInitials = highscoresInput.value
    highScoresList.push(userInitials)
    var liHighScore = document.createElement("li")
    liHighScore.textContent = `Name: ${highScoresList[0]} || Score: ${highscore}`
    highscoresListHTML.appendChild(liHighScore) 
    
    // need to create something to open the begin-quiz
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='block';
    viewHighscoreButton.style.display='none';
    timerCountdown.style.display='';
})

clearHighScoreBtn.addEventListener("click", function(event) {
    // need to create something to clear highscores
    
})
