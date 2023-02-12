var start = document.getElementById('startQuiz');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var options = document.querySelector('options');
var optionA = document.getElementById('A')
var optionB = document.getElementById('B')
var optionC = document.getElementById('C')

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

function check() {
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        createQuestion();
    }
}

function startQuiz() {
    //alert("Hello");
    start.style.display = "none";
    createQuestion();
    quiz.style.display = "block";
}
