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
var highscoresListHTML = document.getElementById('highscore-list');
var endOfGameText = document.querySelector('#end-of-game-text');
var liHighScore = document.createElement("li");

var highScoresList = []
var timeLeft = 60;
var highscore;

function gameStart() {
    timeLeft = 60
    questionsLeft = [...questions];
    countdown();
    newQuestion();
}

function viewBeginQuiz() {
    beginQuizSection.style.display='';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='none';
    viewHighscoreButton.style.display='';
    timerCountdown.style.display='';
}

function viewQuestionScreen() {
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='block';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='none';
    viewHighscoreButton.style.display='none';
}

function viewEndQuiz() {
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='block';
    highscoresScreenSection.style.display='none';
    viewHighscoreButton.style.display='none';
}

function viewHighScoreScreen() {
    beginQuizSection.style.display='none';
    questionScreenSection.style.display='none';
    endQuizSection.style.display='none';
    highscoresScreenSection.style.display='block';
    viewHighscoreButton.style.display='none';
    timerCountdown.style.display='none';
}

function countdown() {
    var timeInterval = setInterval(function () {
        timerCountdown.textContent = 'Timer: ' + timeLeft;
        if (timeLeft === 0 || questionsLeft.length === 0 && timeLeft === 0) {
            highscore = timeLeft;
            clearInterval(timeInterval);
            timerCountdown.textContent = 'Timer: 0';
            endOfGameText.textContent = `Your score is: ${timeLeft}`            
            // need to create something to go to end-quiz
            viewEndQuiz();            
      } else if (timeLeft < 0 && questionsLeft.length === 0) {
        highscore = 0;
        clearInterval(timeInterval);
        timerCountdown.textContent = 'Timer: 0';
        endOfGameText.textContent = `Your score is: ${highscore}` 
        viewEndQuiz();
      }
      timeLeft--;
    }, 1000);
  }

startButton.addEventListener("click", function(event) {
    gameStart();
    // need to create something to open the question-screen
    viewQuestionScreen();
})

viewHighscoreButton.addEventListener("click", function(event) {
    // need to create something to open the highscores-screen
    viewHighScoreScreen();
    var storedPlayerName = localStorage.getItem("player-name");
    var storedPlayerScore = localStorage.getItem("player-score");
    liHighScore.textContent = `Name: ${storedPlayerName} || Score: ${storedPlayerScore}`;
    highscoresListHTML.appendChild(liHighScore)
})

goBackBtn.addEventListener("click", function(event) {
    // need to create something to open the begin-quiz
    viewBeginQuiz();
})

var localHighScores = {}

submitHighScore.addEventListener("click", function(event) {
    event.preventDefault();

    var userInitials = highscoresInput.value;
    highScoresList.push(userInitials);

    localStorage.setItem("player-name", userInitials);
    localStorage.setItem("player-score", highscore);

    liHighScore.textContent = `Name: ${userInitials} || Score: ${highscore}`;
    highscoresListHTML.appendChild(liHighScore);

    // need to create something to open the highscores-screen
    viewHighScoreScreen();
})

clearHighScoreBtn.addEventListener("click", function(event) {
    // need to create something to clear highscores
    // for (let i = 0; i < highScoresList.length; i++) {

    // }
})
