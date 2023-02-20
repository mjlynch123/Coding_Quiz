// Timer
var timer1 = document.getElementById("timer");
var countdownTimer1 = document.querySelector('#timeLeft');

// Ending Page
var score = document.getElementById('score');
var outOf = document.getElementById('amountCorrect');
var endPage = document.getElementById('ending-page');
var addButton = document.getElementById("add-button");
var scoreboard = document.getElementById("scoreboard");
var playerName = document.getElementById("playerName");
var pageScore = document.getElementById("newScore");
var timer = document.getElementById("timer");
var countdownTimer = document.querySelector('#timeLeft');
var highscore = document.querySelector("#highscore");
var bottomBtns = document.querySelectorAll(".btmbtn");

// Buttons at the bottom of the ending page
var clearStorage = document.getElementById("clearStor");
var backBtn = document.getElementById("backBtn");

// We do not need the highscore link here
highscore.style.display = "none";
timer1.innerHTML = "Timer: " + 0;
timeLeft = 0; // Setting time left to 0
clearInterval(timerInterval); // Clearing timer 

// These call the local storage for an update when the script is ran
var savedName = JSON.parse(localStorage.getItem("Name"));
var savedScore = JSON.parse(localStorage.getItem("score"));
var numberOfCorrect = JSON.parse(localStorage.getItem("correct"));

// Checking to see if savedName is null or empty
if (savedName === null || savedName === []) {
    savedName = [];
}

// Checking to see if savedScore is null or empty
if (savedScore === null || savedScore === []) {
    savedScore = [];
}

// If numberOfCorrect is null then we will set the score to be a default of 0
if (numberOfCorrect === null) {
    numberOfCorrect = 0;
}

// Function gets the users score
function getScore() {
    endPage.style.display = "block";
    var userScore = numberOfCorrect * 10;
    playerScore = userScore;
    score.innerHTML = "Score: " + userScore;
    outOf.innerHTML = "You got " + numberOfCorrect + "/" + questions.length + " questions correct!";
}

// This function saves the names and scores to local storage 
function addName() {
    savedName.push(playerName.value);
    savedScore.push(playerScore);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(playerName.value.toUpperCase() + "-" + playerScore)); //Creates a new text node because it is dependant on user input
    scoreboard.appendChild(li); //Appending the list element to the scoreboard list
    playerName.value = ""; // Resetting the value in the input element
    // Saving to local storage
    localStorage.setItem("Name", JSON.stringify(savedName));
    localStorage.setItem("score", JSON.stringify(savedScore));
}

// This function get the names and scores from local storage
function getNames() {
    for (var i = 0; i < savedName.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i+1 + ". " + savedName[i].toUpperCase() + " - " + savedScore[i] // EX. 1. ML - 10
        scoreboard.appendChild(li);
    }
}

function clearLocalStorage() {
    localStorage.clear();
    scoreboard.innerHTML = "";
    // This will refresh the page so that when the player clicks the clear button, they can go right back to adding names
    window.location.reload()
}

getNames();
getScore();

// Adds the name and score to the score table
addButton.addEventListener('click', function(event){
    //event.preventDefault();
    if (playerName.value === "") return;
    addName();
});

// Clears local storage on click
clearStorage.addEventListener('click', function() {
    clearLocalStorage();
    console.log("Local Storage has been cleared");
});

// Sends us back to the main page where we start the quiz from
backBtn.addEventListener('click', function() {
    // This takes the window and changes its location to the given URL/PATH
    window.location.href = "index.html"; // Goes to the page that is specified
});

// Goes to the highscore page when the div is clicked
highscore.addEventListener("click", function() {
    window.location.href = "Ending.html"; // Goes to the page that is specified
});
