var start = document.getElementById('startQuiz');
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

var correct = 0;

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
        question: "What is the DOM?",
        optionA: "Data Of Mice",
        optionB: "Database Object Model",
        optionC: "Document Object Model",
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
    console.log(topic.question);

    question.innerHTML = topic.question;
    optionA.textContent = topic.optionA;
    optionB.textContent = topic.optionB;
    optionC.textContent = topic.optionC;
}

start.addEventListener("click", startQuiz);

// This function will check the answer that the user gave and then move the user to the next question
function proceed(answer) {
    if(answer == questions[currentQuestion].correctAnswer) {
        checkAnswer.innerHTML = "Correct";
        checkAnswer.style.color = "green";
        console.log("Correct");
        console.log(currentQuestion);
        correct++;
        console.log("Correct: ",correct);
    } else {
        checkAnswer.innerHTML = "Incorrect";
        checkAnswer.style.color = "red";
        console.log("incorrect");
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
    createQuestion();
    quiz.style.display = "block";
}

// Function gets the users score
function getScore() {
    endPage.style.display = "block";
    var userScore = correct * 10;
    score.innerHTML = "Score: " + userScore;
    outOf.innerHTML = "You got " + correct + "/" + questions.length + "questions correct!";
}

