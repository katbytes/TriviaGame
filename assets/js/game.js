// Instructions:
// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time to finish the quiz. 
// The game ends when the time runs out. The page will reveal the number 
// of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

$(document).ready(function () {

// Create a function that creates the start button and initial screen

function initialScreen() {
startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function (event) {
event.preventDefault(); 
clickSound.play();
generateHTML();

timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function (event) {
//answeredQuestion = true;
clickSound.play();
selectedAnswer = $(this).text();
if (selectedAnswer === correctAnswers[questionCounter]) {
//alert("correct");

clearInterval(theClock);
generateWin();
}
else {
//alert("wrong answer!");
clearInterval(theClock);
generateLoss();
}
}); // Close .answer click

$("body").on("click", ".reset-button", function (event) {
clickSound.play();
resetGame();
}); // Closes reset-button click

}); // Closes jQuery wrapper

function generateLossDueToTimeOut() {
unansweredTally++;
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/nope-ha.png'>";
$(".mainArea").html(gameHTML);
setTimeout(wait, 3000);  //  3 Seconds
}

function generateWin() {
correctTally++;
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'><h3>Correct! The answer is: " + correctAnswers[questionCounter] + "</h3></p>" + imageArray[questionCounter];
$(".mainArea").html(gameHTML);
setTimeout(wait, 3000);  //  3 Seconds
}

function generateLoss() {
incorrectTally++;
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'><h3>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</h3></p>" + "<img class='center-block img-wrong' src='assets/images/nope-ha.png'>";
$(".mainArea").html(gameHTML);
setTimeout(wait, 3000); //  3 Seconds
}

function generateHTML() {
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer' 10</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
$(".mainArea").html(gameHTML);
}

function wait() {
if (questionCounter < 7) {
questionCounter++;
generateHTML();
counter = 10;
timerWrapper();
}
else {
finalScreen();
}
}

function timerWrapper() {
theClock = setInterval(thirtySeconds, 1000);
function thirtySeconds() {
if (counter === 0) {
clearInterval(theClock);
generateLossDueToTimeOut();
}
if (counter > 0) {
counter--;
}
$(".timer").html(counter);
}
}

function finalScreen() {
gameHTML = "<p class='text-center'>Radical, thanks for playing!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p class='text-center'>Wrong Answers: " + incorrectTally + "</p>" + "<p class='text-center'>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
$(".mainArea").html(gameHTML);
}

function resetGame() {
questionCounter = 0;
correctTally = 0;
incorrectTally = 0;
unansweredTally = 0;
counter = 10;
generateHTML();
timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 10;
var questionArray = [
"<h3>Who is a reappearing Beavis and Butt-head character?</h3>", 
"<h3>What channel did the animated Æon Flux series air on?</h3>", 
"<h3>Which gaming console did Sonic the Hedgehog play on?</h3>", 
"<h3>What rock band released the 1991 album 'Nevermind'?</h3>", 
"<h3>Which Sci-Fi movie was about an Egyptian interstellar gateway?</h3>", 
"<h3>Which Sci-Fi movie featured the California Governator?</h3>", 
"<h3>What is the metaphor 'Darmok and Jalad at Tanagra' from?</h3>",
"<h3>Who is too sexy for their cat?</h3>"];

var answerArray = [
["Daria Morgendorffer", "Squidward Tentacles", "Eric Theodore Cartman", "Apu Nahasapeemapetilon"], 
["AMC", "VH-1", "MTV 2", "Cinemax"], 
["Atari", "Commodore", "Sega Genesis", "Super NES"], 
["Radiohead", "Cake", "Hole", "Nirvana"], 
["Twelve Monkeys", "Stargate", "Mars Attacks!", "Starship Troopers"], 
["Gattaca", "The Fifth Element", "Total Recall", "Star Trek: First Contact"], 
["The X-Files", "Star Trek: TNG", "Farscape", "Battlestar Galactica"], 
["Ricky Martin", "Right Said Fred", "Ace of Base", "Aqua"]];

var imageArray = [
"<img class='center-block img-right' src='assets/images/01.png'>", 
"<img class='center-block img-right' src='assets/images/02.png'>", 
"<img class='center-block img-right' src='assets/images/03.png'>", 
"<img class='center-block img-right' src='assets/images/04.png'>", 
"<img class='center-block img-right' src='assets/images/05.png'>", 
"<img class='center-block img-right' src='assets/images/06.png'>", 
"<img class='center-block img-right' src='assets/images/07.png'>", 
"<img class='center-block img-right' src='assets/images/08.png'>"];

var correctAnswers = [
"A. Daria Morgendorffer", 
"C. MTV 2", 
"C. Sega Genesis", 
"D. Nirvana", 
"B. Stargate", 
"C. Total Recall", 
"B. Star Trek: TNG",
"B. Right Said Fred"];

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
// var clickSound = new Audio("assets/media/zelda-oot-treasure.mp3");
// var clickSound = new Audio("assets/media/zelda-oot-get-heart.wav");
var clickSound = new Audio("assets/media/zelda-oot-get-rupee.wav");
// var clickSound = new Audio("assets/media/zelda-oot-fanfare-heart-container.wav");
