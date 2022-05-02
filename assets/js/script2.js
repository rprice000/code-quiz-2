// js for the app
var appContainer = document.querySelector("#appContainer");
var openingContent = document.querySelector("#openingContent");
var quizContent = document.querySelector("#quizContent");
var startQuizbtn = document.querySelector("#startQuizButton");

var quizQuestions = [
  "1. Commonly used data types DO Not Include:",
  "2. The condition in an if/else statement is enclosed with _____.",
  "3. Arrays in JavaScript can be used to store_____.",
  "4. String values must be enclosed with _____ when being assigned to variables.",
  "5. A very useful tool used during development and debugging for printing content to the debugger is:",
];

var choicesOne = ["strings", "booleans", "alerts", "numbers"];
var choicesTwo = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var choicesThree = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
];
var choicesFour = ["commas", "curly brackets", "quotes", "parenthesis"];
var choicesFive = ["javascript", "terminal/bash", "for loops", "console.log"];

// Makes the container for All Questions
// CSS name = container
var questionContainerDiv = document.createElement("div");
questionContainerDiv.className = "container";
questionContainerDiv.id = "questionsContainer";
quizContent.appendChild(questionContainerDiv);

let time = 75;
var timeScore;


///// Line Break
var lineBreak = document.createElement("hr");
lineBreak.className = "lineBreak";
lineBreak.id = "questionLineBreak" 
quizContent.appendChild(lineBreak);
document.getElementById("questionLineBreak").style.display = "none";



var correctNote = document.createElement("p");
correctNote.textContent = "Correct!";
correctNote.className = "correctNote";
correctNote.id = "correctNotification"
quizContent.appendChild(correctNote); 
document.getElementById("correctNotification").style.display = "none";

var incorrectNote = document.createElement("p");
incorrectNote.textContent = "Inorrect!";
incorrectNote.className = "incorrectNote";
incorrectNote.id = "incorrectNotification"
quizContent.appendChild(incorrectNote);
document.getElementById("incorrectNotification").style.display = "none";


//////////////////////////////////////////////////////////////////////QUESTION ONE START/////////////////////////////////////////////
// Makes the container for Question One
// CSS id = questionOneContainer
var questionOneContainer = document.createElement("div");
questionOneContainer.id = "questionOneContainer";
questionContainerDiv.appendChild(questionOneContainer);

// Makes the p for Question One
// CSS name = container
var questionOneContent = document.createElement("p");
questionOneContent.textContent = quizQuestions[0];
questionOneContainer.appendChild(questionOneContent);

//Makes the UL for Question One
// CSS name = answerList
var answerListOne = document.createElement("ul");
answerListOne.className = "answerList";

// For Loop to make AnswerOne Choices into Buttons
// CSS Class name = itemButton
// ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
for (var i = 0; i < choicesOne.length; i++) {
  var questionOneButtons = document.createElement("button");
  questionOneButtons.className = "itemButton";
  questionOneButtons.id = "questionOneItemChoice" + i;
  questionOneButtons.appendChild(document.createTextNode(choicesOne[i]));
  answerListOne.appendChild(questionOneButtons);
}

// Adds UnorderList to Container Div
questionOneContent.appendChild(answerListOne);
document
  .getElementById("questionOneItemChoice2")
  .addEventListener("click", questionOneListen);
document
  .getElementById("questionOneItemChoice0")
  .addEventListener("click", questionOneListen);
document
  .getElementById("questionOneItemChoice1")
  .addEventListener("click", questionOneListen);
document
  .getElementById("questionOneItemChoice3")
  .addEventListener("click", questionOneListen);

function questionOneListen(event) {
  if (event.target.id === "questionOneItemChoice2") {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("correctNotification").style.display = "block";
    // Store Correct Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionOneContainer").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("correctNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerTwo").style.display = "block";
    }, 1000);
  } else if (
    event.target.id === "questionOneItemChoice0" ||
    event.target.id === "questionOneItemChoice1" ||
    event.target.id === "questionOneItemChoice3"
  ) {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("incorrectNotification").style.display = "block";
    // Store Incorrect Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionOneContainer").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("incorrectNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerTwo").style.display = "block";
    }, 1000);
    time = time - 5;
  }
}

document.getElementById("questionOneContainer").style.display = "none";

//////////////////////////////////////////////////////////////////////QUESTION ONE END/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////QUESTION TWO START/////////////////////////////////////////////

// Makes the container for Question Two
// CSS name = container
var questionTwoContainer = document.createElement("div");
questionTwoContainer.className = "container";
questionTwoContainer.id = "questionContainerTwo";
questionContainerDiv.appendChild(questionTwoContainer);

// Makes the p for Question Two
// CSS name = container
var questionTwoContent = document.createElement("p");
questionTwoContent.textContent = quizQuestions[1];
questionTwoContainer.appendChild(questionTwoContent);

//Makes the UL for Question Two
// CSS name = answerList
var answerListTwo = document.createElement("ul");
answerListTwo.className = "answerList";

// For Loop to make AnswerTwo Choices into Buttons
// CSS Class name = itemButton
// ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
for (var i = 0; i < choicesTwo.length; i++) {
  var questionTwoButtons = document.createElement("button");
  questionTwoButtons.className = "itemButton";
  questionTwoButtons.id = "questionTwoItemChoice" + i;
  questionTwoButtons.appendChild(document.createTextNode(choicesTwo[i]));
  answerListTwo.appendChild(questionTwoButtons);
}

// Adds UnorderList to Container Div
questionTwoContent.appendChild(answerListTwo);
document
  .getElementById("questionTwoItemChoice1")
  .addEventListener("click", questionTwoListen);
document
  .getElementById("questionTwoItemChoice0")
  .addEventListener("click", questionTwoListen);
document
  .getElementById("questionTwoItemChoice2")
  .addEventListener("click", questionTwoListen);
document
  .getElementById("questionTwoItemChoice3")
  .addEventListener("click", questionTwoListen);

function questionTwoListen(event) {
  if (event.target.id === "questionTwoItemChoice1") {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("correctNotification").style.display = "block";
    // Store Correct Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerTwo").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("correctNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerThree").style.display = "block";
    }, 1000);
  } else if (
    event.target.id === "questionTwoItemChoice0" ||
    event.target.id === "questionTwoItemChoice2" ||
    event.target.id === "questionTwoItemChoice3"
  ) {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("incorrectNotification").style.display = "block";
    // Store Incorrect Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerTwo").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("incorrectNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerThree").style.display = "block";
    }, 1000);
    time = time - 5;
  }
}

document.getElementById("questionContainerTwo").style.display = "none";

//////////////////////////////////////////////////////////////////////QUESTION TWO END/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////QUESTION THREE START/////////////////////////////////////////////
// Makes the container for Question Three
// CSS name = container
var questionThreeContainer = document.createElement("div");
questionThreeContainer.className = "container";
questionThreeContainer.id = "questionContainerThree";
questionContainerDiv.appendChild(questionThreeContainer);

// Makes the p for Question Three
// CSS name = container
var questionThreeContent = document.createElement("p");
questionThreeContent.textContent = quizQuestions[2];
questionThreeContainer.appendChild(questionThreeContent);

//Makes the UL for Question Three
// CSS name = answerList
var answerListThree = document.createElement("ul");
answerListThree.className = "answerList";

// For Loop to make AnswerTwo Choices into Buttons
// CSS Class name = itemButton
// ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
for (var i = 0; i < choicesThree.length; i++) {
  var questionThreeButtons = document.createElement("button");
  questionThreeButtons.className = "itemButton";
  questionThreeButtons.id = "questionThreeItemChoice" + i;
  questionThreeButtons.appendChild(document.createTextNode(choicesThree[i]));
  answerListThree.appendChild(questionThreeButtons);
}

// Adds UnorderList to Container Div
questionThreeContent.appendChild(answerListThree);
document
  .getElementById("questionThreeItemChoice3")
  .addEventListener("click", questionThreeListen);
document
  .getElementById("questionThreeItemChoice0")
  .addEventListener("click", questionThreeListen);
document
  .getElementById("questionThreeItemChoice1")
  .addEventListener("click", questionThreeListen);
document
  .getElementById("questionThreeItemChoice2")
  .addEventListener("click", questionThreeListen);

function questionThreeListen(event) {
  if (event.target.id === "questionThreeItemChoice3") {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("correctNotification").style.display = "block";
    // Store Correct Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerThree").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("correctNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerFour").style.display = "block";
    }, 1000);
  } else if (
    event.target.id === "questionThreeItemChoice0" ||
    event.target.id === "questionThreeItemChoice1" ||
    event.target.id === "questionThreeItemChoice2"
  ) {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("incorrectNotification").style.display = "block";
    // Store Incorrect Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerThree").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("incorrectNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerFour").style.display = "block";
    }, 1000);
    time = time - 5;
  }
}

document.getElementById("questionContainerThree").style.display = "none";

//////////////////////////////////////////////////////////////////////QUESTION THREE END/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////QUESTION FOUR START/////////////////////////////////////////////

// Makes the container for Question Four
// CSS name = container
var questionFourContainer = document.createElement("div");
questionFourContainer.className = "container";
questionFourContainer.id = "questionContainerFour";
questionContainerDiv.appendChild(questionFourContainer);

// Makes the p for Question Four
// CSS name = container
var questionFourContent = document.createElement("p");
questionFourContent.textContent = quizQuestions[3];
questionFourContainer.appendChild(questionFourContent);

//Makes the UL for Question Four
// CSS name = answerList
var answerListFour = document.createElement("ul");
answerListFour.className = "answerList";

// For Loop to make AnswerTwo Choices into Buttons
// CSS Class name = itemButton
// ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
for (var i = 0; i < choicesFour.length; i++) {
  var questionFourButtons = document.createElement("button");
  questionFourButtons.className = "itemButton";
  questionFourButtons.id = "questionFourItemChoice" + i;
  questionFourButtons.appendChild(document.createTextNode(choicesFour[i]));
  answerListFour.appendChild(questionFourButtons);
}

// Adds UnorderList to Container Div
questionFourContent.appendChild(answerListFour);

document
  .getElementById("questionFourItemChoice2")
  .addEventListener("click", questionFourListen);
document
  .getElementById("questionFourItemChoice0")
  .addEventListener("click", questionFourListen);
document
  .getElementById("questionFourItemChoice1")
  .addEventListener("click", questionFourListen);
document
  .getElementById("questionFourItemChoice3")
  .addEventListener("click", questionFourListen);

function questionFourListen(event) {
  if (event.target.id === "questionFourItemChoice2") {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("correctNotification").style.display = "block";
    // Store Correct Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerFour").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("correctNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerFive").style.display = "block";
    }, 1000);
  } else if (
    event.target.id === "questionFourItemChoice0" ||
    event.target.id === "questionFourItemChoice1" ||
    event.target.id === "questionFourItemChoice3"
  ) {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("incorrectNotification").style.display = "block";
    // Store Incorrect Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerFour").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("incorrectNotification").style.display = "none";
      //   runQuestionTwo();
      document.getElementById("questionContainerFive").style.display = "block";
    }, 1000);
    time = time - 5;
  }
}

document.getElementById("questionContainerFour").style.display = "none";
//////////////////////////////////////////////////////////////////////QUESTION FOUR END/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////QUESTION FIVE START/////////////////////////////////////////////
// Makes the container for Question Five
// CSS name = container
var questionFiveContainer = document.createElement("div");
questionFiveContainer.className = "container";
questionFiveContainer.id = "questionContainerFive";
questionContainerDiv.appendChild(questionFiveContainer);

// Makes the p for Question Five
// CSS name = container
var questionFiveContent = document.createElement("p");
questionFiveContent.textContent = quizQuestions[4];
questionFiveContainer.appendChild(questionFiveContent);

//Makes the UL for Question Five
// CSS name = answerList
var answerListFive = document.createElement("ul");
answerListFive.className = "answerList";

// For Loop to make AnswerTwo Choices into Buttons
// CSS Class name = itemButton
// ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
for (var i = 0; i < choicesFive.length; i++) {
  var questionFiveButtons = document.createElement("button");
  questionFiveButtons.className = "itemButton";
  questionFiveButtons.id = "questionFiveItemChoice" + i;
  questionFiveButtons.appendChild(document.createTextNode(choicesFive[i]));
  answerListFive.appendChild(questionFiveButtons);
}

// Adds UnorderList to Container Div
questionFiveContent.appendChild(answerListFive);

document
  .getElementById("questionFiveItemChoice3")
  .addEventListener("click", questionFiveListen);
document
  .getElementById("questionFiveItemChoice0")
  .addEventListener("click", questionFiveListen);
document
  .getElementById("questionFiveItemChoice1")
  .addEventListener("click", questionFiveListen);
document
  .getElementById("questionFiveItemChoice2")
  .addEventListener("click", questionFiveListen);

function questionFiveListen(event) {
  if (event.target.id === "questionFiveItemChoice3") {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("correctNotification").style.display = "block";
    // Store Correct Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerFive").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("correctNotification").style.display = "none";
      clearInterval(timeLeft);
      //   runQuestionTwo();
      document.getElementById("countDown").style.display = "none";
      timeScore = time;
      //   endQuiz();
      document.getElementById("endQuizContainer").style.display = "block";
    }, 1000);
  } else if (
    event.target.id === "questionFiveItemChoice0" ||
    event.target.id === "questionFiveItemChoice1" ||
    event.target.id === "questionFiveItemChoice2"
  ) {
    document.getElementById("questionLineBreak").style.display = "block";
    document.getElementById("incorrectNotification").style.display = "block";
    // Store Incorrect Answer in Storage
    setTimeout(function () {
      // questionOneContainer.remove();
      document.getElementById("questionContainerFive").style.display = "none";
      document.getElementById("questionLineBreak").style.display = "none";
      document.getElementById("incorrectNotification").style.display = "none";
      clearInterval(timeLeft);
      //   runQuestionTwo();
      document.getElementById("countDown").style.display = "none";
      timeScore = time;
      //  endQuiz();
      document.getElementById("endQuizContainer").style.display = "block";
    }, 1000);
    time = time - 5;
  }
}

document.getElementById("questionContainerFive").style.display = "none";
//////////////////////////////////////////////////////////////////////QUESTION FIVE END/////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////END QUIZ START/////////////////////////////////////////////


// Makes the container for End Quiz
// CSS name = container
var endQuizContainerDiv = document.createElement("div");
endQuizContainerDiv.className = "container";
endQuizContainerDiv.id = "endQuizContainer";
quizContent.appendChild(endQuizContainerDiv);

// Makes the p for End Quiz Statement
// CSS name = endQuizStatement
var endQuizStatement = document.createElement("p");
endQuizStatement.id = "endQuizStatement";
endQuizStatement.textContent = "All done!";
endQuizContainerDiv.appendChild(endQuizStatement);

// Makes the p for Final Score
// CSS name = endQuizStatement
var finalScore = document.createElement("p");
finalScore.id = "finalScore";
finalScore.textContent = "Your final time score is: " + timeScore;
endQuizContainerDiv.appendChild(finalScore);

// Makes the container for Submit Initials
// CSS name = endQuizStatement
var submitInitialsContainer = document.createElement("div");
submitInitialsContainer.id = "submitInitialsContainer";
endQuizContainerDiv.appendChild(submitInitialsContainer);

// Makes the p for Submit Initials
// CSS name = pSubmitInitials
var pSubmitInitials = document.createElement("p");
pSubmitInitials.id = "pSubmitInitials";
pSubmitInitials.textContent = "Enter Initials";
submitInitialsContainer.appendChild(pSubmitInitials);

// Make input for Submit Initials
// CSS name = inputSubmitInitials
var inputSubmitInitials = document.createElement('input');
inputSubmitInitials.id = 'inputSubmitInitials';
inputSubmitInitials.type = 'text';
submitInitialsContainer.appendChild(inputSubmitInitials);

// Make button for Submit Initials
// CSS name = submitScorebtn
var submitScorebtn = document.createElement('input');
submitScorebtn.id = 'submitScorebtn';
submitScorebtn.setAttribute('type', 'submit');
submitInitialsContainer.appendChild(submitScorebtn);

// Event Listener for Submitting Initials and Score
submitScorebtn.addEventListener("click", function () {
  alert("You got me");
  var initialsValue = document.getElementById("inputSubmitInitials").value;
  console.log(initialsValue);
  var initialsScoreCombo = initialsValue + " - " + timeScore;
  console.log(initialsScoreCombo);
  currentUserData.push(initialsScoreCombo);
  console.log(currentUserData);
  // containerDiv.remove()
  document.getElementById("endQuizContainer").style.display = "none";
//   displayHighScores();
});

document.getElementById("endQuizContainer").style.display = "none";

//////////////////////////////////////////////////////////////////////END QUIZ END/////////////////////////////////////////////













function startQuizFunction() {
  alert("button clicked");

  document.getElementById("openingContent").style.display = "none";
  document.getElementById("questionOneContainer").style.display = "block";
}

var timeLeft = setInterval(runTimer, 1000);
var countDownEl = document.getElementById('countDown');
function runTimer() {
    event.preventDefault;
  // var countDownEl = document.getElementById('countDown');
  let seconds = time;

  countDownEl.innerHTML = `${seconds}`;
  
  time--;

  if (time <= 0) {
    clearInterval(timeLeft);
    countDownEl.innerHTML = 0;
    timeScore = 0;
    console.log(timeScore);
    // questionContainerDiv.remove();
    // document.getElementById("questionContainerDiv").style.display = "none";
    return endQuiz();
  }
}
