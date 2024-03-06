var question = document.getElementById('question');
var choices = document.getElementsByClassName('choice');
var correctWrong = document.getElementById('correctWrong');

var questions = [
    {
        question: 'Commonly used data types do not use.',
        choice1: '1. strings',
        choice2: '2. booleans',
        choice3: '3. alerts',
        choice4: '4. numbers',
        answer: 3,
    },
    {
        question: 'The condition in an if/else statement is enclosed with ______.',
        choice1: '1. quotes',
        choice2: '2. parenthesis',
        choice3: '3. curly brackets',
        choice4: '4. square brackets',
        answer: 2,
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        choice1: '1. numbers and strings',
        choice2: '2. other arrays',
        choice3: '3. booleans',
        choice4: '4. all of the above',
        answer: 4,
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        choice1: '1. quotes',
        choice2: '2. curly brackets',
        choice3: '3. parenthesis',
        choice4: '4. commas',
        answer: 1,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: '1. JavaScript',
        choice2: '2. terminal/bash',
        choice3: '3. for loops',
        choice4: '4. console.log',
        answer: 4,
    },
    {
        question: 'What repeats until a specified condition evaluates to false',
        choice1: '1. my loops',
        choice2: '2. for loops',
        choice3: '3. while loops',
        choice4: '4. froot loops',
        answer: 2,
    },
    {
        question: 'What does CSS stand for?',
        choice1: '1. Caring, Sharing, Smiling',
        choice2: "2. Can't Stand Still",
        choice3: '3. Cascading Style Sheets',
        choice4: '4. Coding, Styling, Scripting',
        answer: 3,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"',
        choice1: '1. <link rel="javascript" href="xxx.js" />',
        choice2: '2. <script src="xxx.js" />',
        choice3: '3. <script exec="xxx.js" />',
        choice4: '4. <script rel="javascript" href="xxx.js" />',
        answer: 2,
    }
    ]

var currentQuestion = [];
var questionsLeft = [...questions];
var currentQuestionIndex

function newQuestion() {
    if (questionsLeft.length > 0) {
        var questionsIndex = Math.floor(Math.random() * questionsLeft.length);
        currentQuestionIndex = questionsIndex;
        currentQuestion = questionsLeft[questionsIndex];
        question.textContent = currentQuestion.question;

    for (let i=0; i < choices.length; i++) {
        choices[i].textContent = currentQuestion[`choice${i+1}`];
    }
}
}

for (let i=0; i < choices.length; i++) {
    choices[i].addEventListener('click', function () {
        if (questionsLeft.length > 0) {
            questionsLeft.splice(currentQuestionIndex, 1);
        }
        if (i+1 === currentQuestion.answer) {
            correctWrong.textContent = 'Correct!';
            newQuestion();
        } else {
            timeLeft -= 10
            correctWrong.textContent = 'Wrong!';
            newQuestion();
        }
    })
}

