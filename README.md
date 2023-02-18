# Coding_Quiz

![Main Screen Images](Assets\Images\Coding_Quiz_Screenshot.png)

# Description
This project gives the user a short 50 seconds or less quiz on the concepts of JavaScript. The user, at the end, will be able to save their name and score to the scoreboard using LocalStorage. The user will see two buttons at the bottom of the scoreboard that will allow them to go back and redo the quiz or they can clear the local storage. If they click to clear the local storage, they will see that the scoreboard clears and the players name and score will no longer be stored.

# Questions
* How long did it take to make JavaScript?
* What data type is a number?
* How is JavaScript abbreviated?
* What data type return true or false?

# Specifications
This project was created using three seperate HTML pages and scripts to make it easier to read and easier to make updates to.

Once the user clicks the starts button they will be sent to the quiz page where the timer will start counting down. When the player clicks on an answer, it will be checked and the user will be informed underneath the line whether they got it right or not. The next question will be displayed 1.5 seconds after the last question was asked. Once the player answers all of the questions they will then be sent to the ending page where they can save their name and score to the scoreboard. Each name and score is saved to their own array in local storage that is looped through when the page loads, loading all names and scores to the scoreboard.

When the user adds their name to the page, the page will be refreshed in order to format the scoreboard

## HTML Pages:
* Index.html - Main page that the user starts the quiz from
* quiz.html - This is the page that the user will take the quiz on
* Ending.html - This is the page that houses the scoreboard

## Scripts
* script.js - Holds all JS for index.html
* quis.js - Hold all JS for the quiz
* ending.js - Holds all js for the ending page

# Deployed Site
## [Live URL](https://mjlynch123.github.io/Coding_Quiz/index.html)
