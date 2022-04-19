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

var choicesOne = ['strings','booleans','alerts','numbers'];
var choicesTwo = ['quotes','curly brackets','parenthesis','square brackets'];
var choicesThree = ['numbers and strings','other arrays','booleans','all of the above'];
var choicesFour = ['commas','curly brackets','quotes','parenthesis'];
var choicesFive = ['javascript','terminal/bash','for loops','console.log'];



startQuizbtn.addEventListener("click", function() {
    alert("button clicked");
    // Add timer code here
    openingContent.remove()
    runQuestionOne();
  });




/////////////////////////////////////////////////////////////////////////////// QUESTION ONE FUNCTION
function runQuestionOne() {
  // Makes the container for Question One
  // CSS name = container
  var containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.id = 'questionContainerOne';
  quizContent.appendChild(containerDiv);

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
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
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
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
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
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
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
      },1000)
    })
}



//////////////////////////////////////////////////////////////////////////////// QUESTION TWO FUNCTION
function runQuestionTwo() {
  // Removes Question One
  questionContainerOne.remove()

  // Makes the container for Question Two
  // CSS name = container
  var containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.id = 'questionContainerTwo';
  quizContent.appendChild(containerDiv);

  // Makes the p for Question Two
  // CSS name = container
  var questionTwo = document.createElement('p');
  questionTwo.textContent = quizQuestions[1];
  containerDiv.appendChild(questionTwo);

  //Makes the UL for Question Two
  // CSS name = answerList
  var answerListTwo = document.createElement('ul');
  answerListTwo.className = 'answerList'

  // For Loop to make AnswerTwo Choices into Buttons
  // CSS Class name = itemButton
  // ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
  for (var i = 0; i < choicesTwo.length; i++) {
    var questionTwoButtons = document.createElement('button');
    questionTwoButtons.className = 'itemButton';
    questionTwoButtons.id = 'itemChoice'+i;
    questionTwoButtons.appendChild(document.createTextNode(choicesTwo[i]));
    answerListTwo.appendChild(questionTwoButtons);
  }

  // Adds UnorderList to Container Div
  containerDiv.appendChild(answerListTwo);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
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
      runQuestionThree()
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionThree()
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionThree()
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionThree()
      },1000)
    })
}



///////////////////////////////////////////////////////////////////////// QUESTION THREE FRUNCTION
function runQuestionThree() {

 // Removes Question Two
 questionContainerTwo.remove()

 // Makes the container for Question Three
 // CSS name = container
 var containerDiv = document.createElement('div');
 containerDiv.className = 'container';
 containerDiv.id = 'questionContainerThree';
 quizContent.appendChild(containerDiv);

 // Makes the p for Question Three
 // CSS name = container
 var questionThree = document.createElement('p');
 questionThree.textContent = quizQuestions[2];
 containerDiv.appendChild(questionThree);

 //Makes the UL for Question Three
 // CSS name = answerList
 var answerListThree = document.createElement('ul');
 answerListThree.className = 'answerList'

 // For Loop to make AnswerThree Choices into Buttons
 // CSS Class name = itemButton
 // ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
 for (var i = 0; i < choicesThree.length; i++) {
   var questionThreeButtons = document.createElement('button');
   questionThreeButtons.className = 'itemButton';
   questionThreeButtons.id = 'itemChoice'+i;
   questionThreeButtons.appendChild(document.createTextNode(choicesThree[i]));
   answerListThree.appendChild(questionThreeButtons);
 }

 // Adds UnorderList to Container Div
 containerDiv.appendChild(answerListThree);

 // Listener if Correct Choice is made.
 document.getElementById('itemChoice3').addEventListener('click', function(event) {
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
     runQuestionFour()
     },1000)
 })

 // Listener if Incorrect Choice is made.
 document.getElementById('itemChoice0').addEventListener('click', function(event) {
   // Creates line and Incorrect! Note adds to bottom of List
   var lineBreak = document.createElement('hr');
   lineBreak.className = 'lineBreak';
   containerDiv.appendChild(lineBreak);
   var incorrectNote = document.createElement('p');
   incorrectNote.textContent = 'Inorrect!';
   incorrectNote.className = 'incorrectNote';
   containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
   setTimeout(function(){
     runQuestionFour()
     },1000)
   })

 // Listener if Incorrect Choice is made.
 document.getElementById('itemChoice1').addEventListener('click', function(event) {
   // Creates line and Incorrect! Note adds to bottom of List
   var lineBreak = document.createElement('hr');
   lineBreak.className = 'lineBreak';
   containerDiv.appendChild(lineBreak);
   var incorrectNote = document.createElement('p');
   incorrectNote.textContent = 'Inorrect!';
   incorrectNote.className = 'incorrectNote';
   containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
   setTimeout(function(){
     runQuestionFour()
     },1000)
   })

 // Listener if Incorrect Choice is made.
 document.getElementById('itemChoice2').addEventListener('click', function(event) {
   // Creates line and Incorrect! Note adds to bottom of List
   var lineBreak = document.createElement('hr');
   lineBreak.className = 'lineBreak';
   containerDiv.appendChild(lineBreak);
   var incorrectNote = document.createElement('p');
   incorrectNote.textContent = 'Inorrect!';
   incorrectNote.className = 'incorrectNote';
   containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
   setTimeout(function(){
     runQuestionFour()
     },1000)
   })

}



/////////////////////////////////////////////////////////////////////////// QUESTION FOUR FUNCTION
function runQuestionFour() {
  // Removes Question Three
  questionContainerThree.remove()

  // Makes the container for Question Four
  // CSS name = container
  var containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.id = 'questionContainerFour';
  quizContent.appendChild(containerDiv);

  // Makes the p for Question Four
  // CSS name = container
  var questionFour = document.createElement('p');
  questionFour.textContent = quizQuestions[3];
  containerDiv.appendChild(questionFour);

  //Makes the UL for Question Four
  // CSS name = answerList
  var answerListFour = document.createElement('ul');
  answerListFour.className = 'answerList'

  // For Loop to make AnswerFour Choices into Buttons
  // CSS Class name = itemButton
  // ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
  for (var i = 0; i < choicesFour.length; i++) {
    var questionFourButtons = document.createElement('button');
    questionFourButtons.className = 'itemButton';
    questionFourButtons.id = 'itemChoice'+i;
    questionFourButtons.appendChild(document.createTextNode(choicesFour[i]));
    answerListFour.appendChild(questionFourButtons);
  }

  // Adds UnorderList to Container Div
  containerDiv.appendChild(answerListFour);

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
      runQuestionFive()
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionFive()
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionFive()
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      runQuestionFive()
      },1000)
    })
}




//////////////////////////////////////////////////////////////////////////////// QUESTION FIVE FUNCTION
function runQuestionFive() {
  // Removes Question Four
  questionContainerFour.remove()

  // Makes the container for Question Five
  // CSS name = container
  var containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.id = 'questionContainerFive';
  quizContent.appendChild(containerDiv);

  // Makes the p for Question Five
  // CSS name = container
  var questionFive = document.createElement('p');
  questionFive.textContent = quizQuestions[4];
  containerDiv.appendChild(questionFive);

  //Makes the UL for Question Five
  // CSS name = answerList
  var answerListFive = document.createElement('ul');
  answerListFive.className = 'answerList'

  // For Loop to make AnswerFive Choices into Buttons
  // CSS Class name = itemButton
  // ID names =  itemChoice0, itemChoice1, itemChoice2, itemChoice3
  for (var i = 0; i < choicesFive.length; i++) {
    var questionFiveButtons = document.createElement('button');
    questionFiveButtons.className = 'itemButton';
    questionFiveButtons.id = 'itemChoice'+i;
    questionFiveButtons.appendChild(document.createTextNode(choicesFive[i]));
    answerListFive.appendChild(questionFiveButtons);
  }

  // Adds UnorderList to Container Div
  containerDiv.appendChild(answerListFive);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
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
      endQuiz()
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      endQuiz()
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      endQuiz()
      },1000)
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    containerDiv.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    containerDiv.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      endQuiz()
      },1000)
    })
}

///////////////////////////////////////////////////////////////////////////////// END QUIZ FUNCTION
function endQuiz() {
  // Removes Question Five
  questionContainerFive.remove()

  // Makes the container for End Quiz
  // CSS name = container
  var containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.id = 'endQuizContainer';
  quizContent.appendChild(containerDiv);

  // Makes the p for Question Five
  // CSS name = container
  var endQuizStatement = document.createElement('p');
  endQuizStatement.textContent = 'You have completed the quiz';
  containerDiv.appendChild(endQuizStatement);

}


// When user clicks Start Quiz
// Then main content is removed
// The timer starts counting down
// The first question is displayed
//