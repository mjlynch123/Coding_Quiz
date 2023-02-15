var start = document.getElementById('startQuiz');
var intro = document.getElementById('intro');
var checkAnswer = document.getElementById('answerCheck');
var endPage = document.getElementById('ending-page');
var score = document.getElementById('score');
var outOf = document.getElementById('amountCorrect');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var options = document.querySelector('options');
var optionA = document.getElementById('A')
var optionB = document.getElementById('B')
var optionC = document.getElementById('C')
var addButton = document.getElementById("add-button");
var scoreboard = document.getElementById("scoreboard");
var playerName = document.getElementById("playerName");
var pageScore = document.getElementById("newScore");
var timer = document.getElementById("timer");
var countdownTimer = document.querySelector('#timeLeft');
var highscore = document.querySelector("#highscore");

var correct = 0; // Returns the amount of questions answered correctly
var playerScore;

var timeLeft = 50;

// These call the local storage for an update when the script is ran
var savedName = JSON.parse(localStorage.getItem("Name"));
var savedScore = JSON.parse(localStorage.getItem("score"));

// Create an array of objects that represent each question that is going to be asked as well as the correct answer
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

// start.addEventListener("click", startQuiz);

// This function will check the answer that the user gave and then move the user to the next question
function proceed(answer) {
    if(answer == questions[currentQuestion].correctAnswer) {
        checkAnswer.innerHTML = "Correct";
        checkAnswer.style.color = "green";
        console.log(currentQuestion);
        correct++;
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
            quiz.style.display = "none";
            getScore();
        }, 1500);
    }
}

// Function that will start the quiz
function startQuiz() {
    //alert("Hello");
    start.style.display = "none";
    intro.style.display = "none";
    createQuestion();
    quiz.style.display = "block";

    countdownTimer.innerHTML = timeLeft;

    // This is setting the time for the quiz and decreases the time each second. The quiz ends when the timer hits 0
    var timerInterval = setInterval(function() {
        timeLeft--;
        countdownTimer.innerHTML = timeLeft; //resetting the timer on the page each second

        // If the time hits 0 then the quiz ends and display the end page and clears the interval
        if (timeLeft <= 0) {
            quiz.style.display = "none";
            endPage.style.display = "block";
            getScore();
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Function gets the users score
function getScore() {
    endPage.style.display = "block";
    var userScore = correct * 10;
    playerScore = userScore;
    score.innerHTML = "Score: " + userScore;
    outOf.innerHTML = "You got " + correct + "/" + questions.length + " questions correct!";
}

// Goes to the highscore page when the div is clicked
highscore.addEventListener("click", function() {
    quiz.style.display = "none";
    intro.style.display = "none";
    endPage.style.display = "block";
    highscore.style.display = "none";
});

// Adds the name and score to the score table
addButton.addEventListener('click', function(event){
    event.preventDefault();
    if (playerName.value === "") return;
    localStorage.setItem("Name", JSON.stringify(playerName.value));
    localStorage.setItem("score", JSON.stringify(playerScore));
    
    playerName.value = "";

    var savedName = JSON.parse(localStorage.getItem("Name"));
    var savedScore = JSON.parse(localStorage.getItem("score"));

    pageScore.innerHTML = " " + savedName + " - " + savedScore;
});

pageScore.innerHTML = " " + savedName + " - " + savedScore;





