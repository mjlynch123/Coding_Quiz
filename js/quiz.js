// Quiz
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var options = document.querySelector('options');
var optionA = document.getElementById('A')
var optionB = document.getElementById('B')
var optionC = document.getElementById('C')
var checkAnswer = document.getElementById('answerCheck');

// High score text 
var highscore = document.querySelector("#highscore");

// Timer
var timer = document.getElementById("timer");
var countdownTimer = document.querySelector('#timeLeft');

var correct = 0; // Returns the amount of questions answered correctly
var playerScore;

var timeLeft = 50;

countdownTimer.innerHTML = timeLeft;

var timerInterval = setInterval(function() {
    timeLeft--;
    countdownTimer.innerHTML = timeLeft; //resetting the timer on the page each second

    // If the time hits 0 then the quiz ends and display the end page and clears the interval
    if (timeLeft <= 0) {
        window.location.href = "Ending.html"
        getScore();
        clearInterval(timerInterval);
        timer.innerHTML = "Timer: " + 0;
        }
}, 1000);

var questions = [
    {
        question: "How long did it take to make JavaScript?",
        optionA: "12 Days",
        optionB: "12 Years",
        optionC: "3 Months",
        correctAnswer: "A"
    },
    {
        question: "What data type is a number",
        optionA: "Boolean",
        optionB: "String",
        optionC: "Integer",
        correctAnswer: "C"
    },
    {
        question: "How is JavaScript abbreviated?",
        optionA: "js",
        optionB: "jscpt",
        optionC: "JSC",
        correctAnswer: "A"
    },
    {
        question: "What data type return true or false?",
        optionA: "Integer",
        optionB: "String",
        optionC: "Boolean",
        correctAnswer: "C"
    }
];

var currentQuestion = 0; // gives a number value for currentQuestion
var finalQuestion = questions.length - 1; // gets last question in interger form

// This function will access the current question being asked and display it to the user
function createQuestion() {
    var topic = questions[currentQuestion];

    question.innerHTML = topic.question;
    optionA.textContent = topic.optionA;
    optionB.textContent = topic.optionB;
    optionC.textContent = topic.optionC;
}

// This function will check the answer that the user gave and then move the user to the next question
function proceed(answer) {
    if(answer == questions[currentQuestion].correctAnswer) {
        checkAnswer.innerHTML = "Correct";
        checkAnswer.style.color = "green";
        console.log(currentQuestion);
        correct++;
        console.log("Correct: ", correct);
        localStorage.setItem("correct", JSON.stringify(correct));
    } else {
        checkAnswer.innerHTML = "Incorrect";
        checkAnswer.style.color = "red";
        timeLeft -= 15;
    }

    // If question is answered then the user will move to the next question.
    if (currentQuestion < finalQuestion) {
        var timerFeedback = setInterval(function () {
            checkAnswer.innerHTML = "";
            createQuestion();
        }, 1500);
        currentQuestion++; 
    } else {
        var endPage = setInterval(function() {
            window.location.href = "Ending.html";
        }, 1500);
    }
}

// Goes to the highscore page when the div is clicked
highscore.addEventListener("click", function() {
    window.location.href = "Ending.html";
});

createQuestion();
getNames();