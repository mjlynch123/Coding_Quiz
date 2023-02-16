var start = document.getElementById('startQuiz');
var intro = document.getElementById('intro');
var highscore = document.querySelector("#highscore");
var endPage = document.getElementById('ending-page');


// Function that will start the quiz
function startQuiz() {
    window.location.href = "quiz.html";

    countdownTimer.innerHTML = timeLeft;
}

// Goes to the highscore page when the div is clicked
highscore.addEventListener("click", function() {
    window.location.href = "Ending.html";
});