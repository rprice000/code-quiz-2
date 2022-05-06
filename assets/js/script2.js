// js for the app
var appContainer = document.querySelector("#appContainer");
var openingContent = document.querySelector("#openingContent");
var quizContent = document.querySelector("#quizContent");
var startQuizbtn = document.querySelector("#startQuizButton");
startQuizbtn.id = "startButton";
var quizQuestions = [
  "1. Commonly used data types DO Not Include:",
  "2. The condition in an if/else statement is enclosed with _____.",
  "3. Arrays in JavaScript can be used to store_____.",
  "4. String values must be enclosed with _____ when being assigned to variables.",
  "5. A very useful tool used during development and debugging for printing content to the debugger is:",
];

var choicesOne = ["strings", "booleans", "alerts", "numbers"];
var choicesTwo = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var choicesThree = ["numbers and strings","other arrays","booleans","all of the above",];
var choicesFour = ["commas", "curly brackets", "quotes", "parenthesis"];
var choicesFive = ["javascript", "terminal/bash", "for loops", "console.log"];

let time;
let timeScore;
timeScore = time;
let currentUserData = [];
var highScoresArray = [];


// Makes the container for All Questions
// CSS name = container
var questionContainerDiv = document.createElement("div");
questionContainerDiv.className = "container";
questionContainerDiv.id = "questionsContainer";
quizContent.appendChild(questionContainerDiv);

///// Line Break
var lineBreak = document.createElement("hr");
lineBreak.className = "lineBreak";
lineBreak.id = "questionLineBreak";
quizContent.appendChild(lineBreak);
document.getElementById("questionLineBreak").style.display = "none";
/// Correct Notification
var correctNote = document.createElement("p");
correctNote.textContent = "Correct!";
correctNote.className = "correctNote";
correctNote.id = "correctNotification";
quizContent.appendChild(correctNote);
document.getElementById("correctNotification").style.display = "none";
/// Incorrect Notification
var incorrectNote = document.createElement("p");
incorrectNote.textContent = "Inorrect!";
incorrectNote.className = "incorrectNote";
incorrectNote.id = "incorrectNotification";
quizContent.appendChild(incorrectNote);
document.getElementById("incorrectNotification").style.display = "none";


///////////////////////////////////////// Question One DOM Elements Start///////////////////////////////
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

document.getElementById("questionOneContainer").style.display = "none";
///////////////////////////////////////// Question One DOM Elements End///////////////////////////////

///////////////////////////////////////// Question Two DOM Elements Start///////////////////////////////
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

document.getElementById("questionContainerTwo").style.display = "none";
///////////////////////////////////////// Question Two DOM Elements End///////////////////////////////

///////////////////////////////////////// Question Three DOM Elements Start///////////////////////////////
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

document.getElementById("questionContainerThree").style.display = "none";
///////////////////////////////////////// Question Three DOM Elements End///////////////////////////////

///////////////////////////////////////// Question Four DOM Elements Start///////////////////////////////
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

document.getElementById("questionContainerFour").style.display = "none";
///////////////////////////////////////// Question Four DOM Elements End///////////////////////////////

///////////////////////////////////////// Question Five DOM Elements Start///////////////////////////////
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

document.getElementById("questionContainerFive").style.display = "none";
///////////////////////////////////////// Question Five DOM Elements End///////////////////////////////


////////////////////////////////////////////End Quiz User Input DOM Elements Start/////////////////////
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
    finalScore.textContent = "Your final time score is: "
    endQuizStatement.appendChild(finalScore);
    // Makes the div to hold timeScore
    // CSS name = displayedScoreDiv
    var displayedScore = document.createElement('div');
    displayedScore.className = "scoring";
    displayedScore.id = "displayedScoreDiv";
    finalScore.appendChild(displayedScore);

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
    var inputSubmitInitials = document.createElement("input");
    inputSubmitInitials.id = "inputSubmitInitials";
    inputSubmitInitials.type = "text";
    submitInitialsContainer.appendChild(inputSubmitInitials);

    // Make button for Submit Initials
    // CSS name = submitScorebtn
    var submitScorebtn = document.createElement("input");
    submitScorebtn.id = "submitScorebtn";
    submitScorebtn.setAttribute("type", "submit");
    submitInitialsContainer.appendChild(submitScorebtn);

    document.getElementById("endQuizContainer").style.display = "none";
////////////////////////////////////////////End Quiz User Input DOM Elements End/////////////////////
////////////////////////////////////////////Display High Scores DOM Elements Start/////////////////////
 // Makes the container for Final Score
  // CSS name = container
  var finalScoresContainerDiv = document.createElement('div');
  finalScoresContainerDiv.className = 'container';
  finalScoresContainerDiv.id = 'finalScoresContainerDiv';
  quizContent.appendChild(finalScoresContainerDiv);

  // Makes the p for Final Score Statement
  // CSS name = highScoresStatement
  var highScoresStatement = document.createElement('p');
  highScoresStatement.id = 'endQuizStatement';
  highScoresStatement.textContent = 'High Scores';
  finalScoresContainerDiv.appendChild(highScoresStatement);

  // Makes the ul for High Score List
  // CSS name = highScoreList
  var highScoreList = document.createElement('ul');
  highScoreList.id = 'highScoreList';
  highScoresStatement.appendChild(highScoreList);

  // Makes the container for Final Score Buttons
  // CSS name = container
  var finalScoresBtnContainer = document.createElement('div');
  finalScoresBtnContainer.className = 'container';
  finalScoresBtnContainer.id = 'finalScoresBtnContainer';
  quizContent.appendChild(finalScoresBtnContainer);

  // Makes Two Buttons
  // CSS Class names = finalButton
  // CSS ID names = goBackBtn / clearHighScoresBtn
  var goBackBtn = document.createElement('button');
  goBackBtn.className = 'finalButton';
  goBackBtn.id = 'goBackBtn';
  goBackBtn.textContent = 'Go Back';
  finalScoresContainerDiv.appendChild(goBackBtn);

  var clearHighScoresBtn = document.createElement('button');
  clearHighScoresBtn.className = 'finalButton';
  clearHighScoresBtn.id = 'clearHighScoresBtn';
  clearHighScoresBtn.textContent = 'Clear High Scores';
  finalScoresContainerDiv.appendChild(clearHighScoresBtn);

  document.getElementById("finalScoresContainerDiv").style.display = "none";
////////////////////////////////////////////Display High Scores DOM Elements End/////////////////////


var countDownEl = document.getElementById('countDown');

document.getElementById("startButton").addEventListener("click", startQuizFunction);


//////////////////////////////////////////START QUIZ FUNCTION START///////////////////////////////////////////////
function startQuizFunction() {
    time = 75;


    document.getElementById("openingContent").style.display = "none";
    document.getElementById("questionOneContainer").style.display = "block";
 

    document.getElementById("countDown").style.display = "block";

    var timeLeft = setInterval(runTimer, 1000);
    var countDownEl = document.getElementById('countDown');
    function runTimer() {
    
      countDownEl.innerHTML = `${time}`;
      
      time--;
  
      if (time <= 0) {
        clearInterval(timeLeft);
        countDownEl.innerHTML = 0;
        timeScore = 0;
        console.log(timeScore);
        document.getElementById("questionsContainer").style.display = "none";
        document.getElementById("endQuizContainer").style.display = "block";
      } else {
        document.getElementById("questionsContainer").style.display = "block";
      }

    }

    //////////////////////////////////////////////////////////////////////QUESTION ONE START/////////////////////////////////////////////
    document.getElementById("questionOneItemChoice2").addEventListener("click", questionOneListen);
    document.getElementById("questionOneItemChoice0").addEventListener("click", questionOneListen);
    document.getElementById("questionOneItemChoice1").addEventListener("click", questionOneListen);
    document.getElementById("questionOneItemChoice3").addEventListener("click", questionOneListen);

    function questionOneListen(event) {
      if (event.target.id === "questionOneItemChoice2") {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("correctNotification").style.display = "block";
        // Store Correct Answer in Storage
        setTimeout(function () {
          document.getElementById("questionOneContainer").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("correctNotification").style.display = "none";
          document.getElementById("questionContainerTwo").style.display = "block";
        }, 1000);
      } else if (event.target.id === "questionOneItemChoice0" || event.target.id === "questionOneItemChoice1" || event.target.id === "questionOneItemChoice3") 
      {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("incorrectNotification").style.display = "block";
        // Store Incorrect Answer in Storage
        setTimeout(function () {
          document.getElementById("questionOneContainer").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("incorrectNotification").style.display = "none";
          document.getElementById("questionContainerTwo").style.display = "block";
        }, 1000);
      }
    }
    //////////////////////////////////////////////////////////////////////QUESTION ONE END/////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////QUESTION TWO START/////////////////////////////////////////////
    document.getElementById("questionTwoItemChoice1").addEventListener("click", questionTwoListen);
    document.getElementById("questionTwoItemChoice0").addEventListener("click", questionTwoListen);
    document.getElementById("questionTwoItemChoice2").addEventListener("click", questionTwoListen);
    document.getElementById("questionTwoItemChoice3").addEventListener("click", questionTwoListen);

    function questionTwoListen(event) {
      if (event.target.id === "questionTwoItemChoice1") {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("correctNotification").style.display = "block";
        // Store Correct Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerTwo").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("correctNotification").style.display = "none";
          document.getElementById("questionContainerThree").style.display = "block";
        }, 1000);
      } else if (event.target.id === "questionTwoItemChoice0" || event.target.id === "questionTwoItemChoice2" || event.target.id === "questionTwoItemChoice3") 
      {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("incorrectNotification").style.display = "block";
        // Store Incorrect Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerTwo").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("incorrectNotification").style.display = "none";
          document.getElementById("questionContainerThree").style.display = "block";
        }, 1000);
      }
    }
    //////////////////////////////////////////////////////////////////////QUESTION TWO END/////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////QUESTION THREE START/////////////////////////////////////////////
    document.getElementById("questionThreeItemChoice3").addEventListener("click", questionThreeListen);
    document.getElementById("questionThreeItemChoice0").addEventListener("click", questionThreeListen);
    document.getElementById("questionThreeItemChoice1").addEventListener("click", questionThreeListen);
    document.getElementById("questionThreeItemChoice2").addEventListener("click", questionThreeListen);

    function questionThreeListen(event) {
      if (event.target.id === "questionThreeItemChoice3") {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("correctNotification").style.display = "block";
        // Store Correct Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerThree").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("correctNotification").style.display = "none";
          document.getElementById("questionContainerFour").style.display = "block";
        }, 1000);
      } else if (
        event.target.id === "questionThreeItemChoice0" || event.target.id === "questionThreeItemChoice1" || event.target.id === "questionThreeItemChoice2") 
        {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("incorrectNotification").style.display = "block";
        // Store Incorrect Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerThree").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("incorrectNotification").style.display = "none";
          document.getElementById("questionContainerFour").style.display = "block";
        }, 1000);
      }
    }
    //////////////////////////////////////////////////////////////////////QUESTION THREE END/////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////QUESTION FOUR START/////////////////////////////////////////////
    document.getElementById("questionFourItemChoice2").addEventListener("click", questionFourListen);
    document.getElementById("questionFourItemChoice0").addEventListener("click", questionFourListen);
    document.getElementById("questionFourItemChoice1").addEventListener("click", questionFourListen);
    document.getElementById("questionFourItemChoice3").addEventListener("click", questionFourListen);

    function questionFourListen(event) {
      if (event.target.id === "questionFourItemChoice2") {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("correctNotification").style.display = "block";
        // Store Correct Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerFour").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("correctNotification").style.display = "none";
          document.getElementById("questionContainerFive").style.display = "block";
        }, 1000);
      } else if (event.target.id === "questionFourItemChoice0" || event.target.id === "questionFourItemChoice1" || event.target.id === "questionFourItemChoice3") 
      {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("incorrectNotification").style.display = "block";
        // Store Incorrect Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerFour").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("incorrectNotification").style.display = "none";
          document.getElementById("questionContainerFive").style.display = "block";
        }, 1000);
      }
    }
    //////////////////////////////////////////////////////////////////////QUESTION FOUR END/////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////QUESTION FIVE START/////////////////////////////////////////////
    document.getElementById("questionFiveItemChoice3").addEventListener("click", questionFiveListen);
    document.getElementById("questionFiveItemChoice0").addEventListener("click", questionFiveListen);
    document.getElementById("questionFiveItemChoice1").addEventListener("click", questionFiveListen);
    document.getElementById("questionFiveItemChoice2").addEventListener("click", questionFiveListen);

    function questionFiveListen(event) {
      if (event.target.id === "questionFiveItemChoice3") {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("correctNotification").style.display = "block";
        // Store Correct Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerFive").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("correctNotification").style.display = "none";
          document.getElementById("countDown").style.display = "none";
          clearInterval(timeLeft);
          document.getElementById("endQuizContainer").style.display = "block";
        }, 1000);
      } else if (event.target.id === "questionFiveItemChoice0" || event.target.id === "questionFiveItemChoice1" || event.target.id === "questionFiveItemChoice2") 
      {
        document.getElementById("questionLineBreak").style.display = "block";
        document.getElementById("incorrectNotification").style.display = "block";
        // Store Incorrect Answer in Storage
        setTimeout(function () {
          document.getElementById("questionContainerFive").style.display = "none";
          document.getElementById("questionLineBreak").style.display = "none";
          document.getElementById("incorrectNotification").style.display = "none";
          document.getElementById("countDown").style.display = "none";
          clearInterval(timeLeft);
          document.getElementById("endQuizContainer").style.display = "block";
        }, 1000);
      }
      clearInterval(timeLeft);
    }


    //////////////////////////////////////////////////////////////////////QUESTION FIVE END/////////////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////END QUIZ END////////////////////////////////////////////
document.getElementById("questionOneItemChoice0").addEventListener("click", subtractTime);
document.getElementById("questionOneItemChoice1").addEventListener("click", subtractTime);
document.getElementById("questionOneItemChoice3").addEventListener("click", subtractTime);
document.getElementById("questionTwoItemChoice0").addEventListener("click", subtractTime);
document.getElementById("questionTwoItemChoice2").addEventListener("click", subtractTime);
document.getElementById("questionTwoItemChoice3").addEventListener("click", subtractTime);
document.getElementById("questionThreeItemChoice0").addEventListener("click", subtractTime);
document.getElementById("questionThreeItemChoice1").addEventListener("click", subtractTime);
document.getElementById("questionThreeItemChoice2").addEventListener("click", subtractTime);
document.getElementById("questionFourItemChoice0").addEventListener("click", subtractTime);
document.getElementById("questionFourItemChoice1").addEventListener("click", subtractTime);
document.getElementById("questionFourItemChoice3").addEventListener("click", subtractTime);
document.getElementById("questionFiveItemChoice0").addEventListener("click", subtractTime);
document.getElementById("questionFiveItemChoice1").addEventListener("click", subtractTime);
document.getElementById("questionFiveItemChoice2").addEventListener("click", subtractTime);

function subtractTime(){
  time = time - 5;
}

document.getElementById("questionFiveItemChoice3").addEventListener("click", setScore);
document.getElementById("questionFiveItemChoice0").addEventListener("click", setScore);
document.getElementById("questionFiveItemChoice1").addEventListener("click", setScore);
document.getElementById("questionFiveItemChoice2").addEventListener("click", setScore);

function setScore() {
  timeScore = time;
  displayedScoreDiv.innerHTML = `${time}`;
}

//////////////////////////////////////////////////////////////////SUBMIT SCORE START///////////////////////////////////////////////
document.getElementById("submitScorebtn").addEventListener("click", submission);
// Event Listener for Submitting Initials and Score
function submission() {

  // Makes the p for displaying Current User initials and Score
  // CSS name = userInitilScore
  var userInitilScore = document.createElement('p');
  userInitilScore.className = 'userInitilScore';
  userInitilScore.id = 'userInitilScore';
  userInitilScore.appendChild(document.createTextNode(currentUserData));
  finalScoresContainerDiv.appendChild(userInitilScore);
  var initialsValue = document.getElementById("inputSubmitInitials").value;
  var initialsScoreCombo = initialsValue + " - " + timeScore;
  currentUserData.push(initialsScoreCombo);

  highScoresArray.push(currentUserData[0]);
  localStorage.setItem("storedHighScores", JSON.stringify(highScoresArray))

  document.getElementById("endQuizContainer").style.display = "none";
  document.getElementById("finalScoresContainerDiv").style.display = "block";

};





document.getElementById("submitScorebtn").addEventListener("click", createHighScoreList);

function createHighScoreList() {

  var pullScoreList = JSON.parse(localStorage.getItem("storedHighScores"))
  console.log(pullScoreList);

  for (var i = 0; i < pullScoreList.length; i++) {
    var highScoreItem = document.createElement("li");
    highScoreItem.className = "highScoreItems";
    highScoreItem.id = "highScoreItem" + i;
    highScoreItem.appendChild(document.createTextNode(pullScoreList[i]));
    highScoreList.appendChild(highScoreItem);
  }

}




//////////////////////////////////////////////////////////////////SUBMIT SCORE END///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////END QUIZ END////////////////////////////////////////////
document.getElementById("clearHighScoresBtn").addEventListener("click", clearingScores);
// Event Listener for Clearing All Scores
function clearingScores() {
  localStorage.clear();
  highScoresArray.length = 0;
  currentUserData.length = 0;
};

document.getElementById("goBackBtn").addEventListener("click", goingBack);
function goingBack() {
    document.getElementById("finalScoresContainerDiv").style.display = "none";
    document.getElementById("finalScoresBtnContainer").style.display = "none";
    document.getElementById("openingContent").style.display = "block";
    currentUserData.length = 0;
    highScoreList.innerHTML = '';
  };
