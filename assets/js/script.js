// js for the app
var appContainer = document.querySelector('#appContainer');
var openingContent = document.querySelector('#openingContent');
var quizContent = document.querySelector('#quizContent');
var startQuizbtn = document.querySelector('#startQuizButton');

var quizQuestions = [
  '1. Commonly used data types DO Not Include:',
  '2. The condition in an if/else statement is enclosed with _____.',
  '3. Arrays in JavaScript can be used to store_____.',
  '4. String values must be enclosed with _____ when being assigned to variables.',
  '5. A very useful tool used during development and debugging for printing content to the debugger is:'
]

// var quizAnswerChoices = [
//   choicesOne = ['strings','booleans','alerts','numbers'],
//   choicesTwo = ['quotes','curly brackets','parenthesis','square brackets'],
//   choicesThree = ['numbers and strings','other arrays','booleans','all of the above'],
//   choicesFour = ['commas','curly brackets','quotes','parenthesis'],
//   choicesFive = ['javascript','terminal/bash','for loops','console.log']
// ]

var choicesOne = ['strings','booleans','alerts','numbers']

startQuizbtn.addEventListener("click", function() {
    alert("button clicked");
    // Add timer code here
    openingContent.remove()
    runQuestionOne();
  });


function runQuestionOne() {
  // Makes the container for Question One
  // CSS name = container
  var containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  quizContent.appendChild(containerDiv)

  // Makes the p for Question One
  // CSS name = container
  var questionOne = document.createElement('p');
  questionOne.textContent = quizQuestions[0];
  containerDiv.appendChild(questionOne);

  //Makes the UL for Question One
  // CSS name = answerList
  var answerListOne = document.createElement('ul');
  answerListOne.className = 'answerList'

  // For Loop to make AnswerOne Choices into Buttons
  // CSS Class name = itemButton
  // ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
  for (var i = 0; i < choicesOne.length; i++) {
    var questionOneButtons = document.createElement('button');
    questionOneButtons.className = 'itemButton';
    questionOneButtons.id = 'itemChoice'+i;
    questionOneButtons.appendChild(document.createTextNode(choicesOne[i]));
    answerListOne.appendChild(questionOneButtons);
  }

  // Adds UnorderList to Container Div
  containerDiv.appendChild(answerListOne);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var correctNote = document.createElement('p');
    correctNote.textContent = 'Correct!';
    correctNote.className = 'correctNote';
    containerDiv.appendChild(correctNote);
// Store Correct Answer in Storage
    setTimeout(function(){
      runQuestionTwo()
      },5000)
  })

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionTwo()
      },5000)
    })

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionTwo()
      },5000)
    })

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionTwo()
      },5000)
    })
}

function runQuestionTwo() {
  quizContent.remove()
  alert("this worked")
}





// When user clicks Start Quiz
// Then main content is removed
// The timer starts counting down
// The first question is displayed
//