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
        if (timeLeft <= 0 && questionsLeft.length === 0 || timeLeft < 0)  {
            highscore = 0;
            clearInterval(timeInterval);
            timerCountdown.textContent = 'Timer: 0';
            endOfGameText.textContent = `Your score is: ${highscore}`;
            // need to create something to go to end-quiz 
            viewEndQuiz();
      } else if (questionsLeft.length === 0) {
            highscore = timeLeft;
            clearInterval(timeInterval);
            timerCountdown.textContent = 'Timer: 0';
            endOfGameText.textContent = `Your score is: ${highscore}`;
            // need to create something to go to end-quiz
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
    for (let i=0; i < highScoreList.length; i++) {
        var newHighScore = document.createElement("li")
        newHighScore.textContent = `Name: ${highScoreList[i].playerName} || Score: ${highScoreList[i].playerScore}`;
        highscoresListHTML.appendChild(newHighScore);
    }
})

goBackBtn.addEventListener("click", function(event) {
    // need to create something to open the begin-quiz
    viewBeginQuiz();
})

var highScoreList = JSON.parse(localStorage.getItem('highScoreList')) || [];
var emptyHighScoreList = [];
localStorage.setItem('highScoreList', JSON.stringify(highScoreList));

submitHighScore.addEventListener("click", function(event) {
    event.preventDefault();

    var localHighScore = {
        playerName: highscoresInput.value,
        playerScore: highscore
    }

    highScoreList.push(localHighScore);
    localStorage.setItem('highScoreList', JSON.stringify(highScoreList));

    for (let i=0; i < highScoreList.length; i++) {
        var newHighScore = document.createElement("li")
        newHighScore.textContent = `Name: ${highScoreList[i].playerName} || Score: ${highScoreList[i].playerScore}`;
        highscoresListHTML.appendChild(newHighScore);
    }
    viewHighScoreScreen();
})

clearHighScoreBtn.addEventListener("click", function(event) {
    localStorage.clear();
    localStorage.setItem('highScoreList', JSON.stringify(emptyHighScoreList));
    liHighScore.textContent = "";
})
