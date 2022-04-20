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

// Makes the container for All Questions
// CSS name = container
var questionContainerDiv = document.createElement('div');
questionContainerDiv.className = 'container';
questionContainerDiv.id = 'questionsContainer';
quizContent.appendChild(questionContainerDiv);

let time = 75;


startQuizbtn.addEventListener("click", function() {
    alert("button clicked");
    
    var timeLeft = setInterval(runTimer, 1000);

    function runTimer() {
      var countDownEl = document.getElementById('countDown');
      let seconds = time;
    
      countDownEl.innerHTML = `${seconds}`;
      
      time--;
  
      if (time <= 0) {
        clearInterval(timeLeft);
        countDownEl.innerHTML = 0;
        questionContainerDiv.remove()
        return endQuiz();
      }

    }

    openingContent.remove()
    runQuestionOne();
    runTimer()
  });


/////////////////////////////////////////////////////////////////////////////// QUESTION ONE FUNCTION
function runQuestionOne() {

  // Makes the container for Question One
  // CSS id = questionOneContainer
  var questionOneContainer = document.createElement('div');
  questionOneContainer.id = 'questionOneContainer';
  questionContainerDiv.appendChild(questionOneContainer);

  // Makes the p for Question One
  // CSS name = container
  var questionOneContent = document.createElement('p');
  questionOneContent.textContent = quizQuestions[0];
  questionOneContainer.appendChild(questionOneContent);

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
  questionOneContent.appendChild(answerListOne);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionOneContent.appendChild(lineBreak);
    var correctNote = document.createElement('p');
    correctNote.textContent = 'Correct!';
    correctNote.className = 'correctNote';
    questionOneContent.appendChild(correctNote);
// Store Correct Answer in Storage
    setTimeout(function(){
      questionOneContainer.remove();
      runQuestionTwo();
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionOneContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionOneContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionOneContainer.remove();
      runQuestionTwo();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionOneContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionOneContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionOneContainer.remove();
      runQuestionTwo();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionOneContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionOneContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionOneContainer.remove();
      runQuestionTwo();
      },1000)
      time = time - 5;
    })
}



//////////////////////////////////////////////////////////////////////////////// QUESTION TWO FUNCTION
function runQuestionTwo() {


  // Makes the container for Question Two
  // CSS name = container
  var questionTwoContainer = document.createElement('div');
  questionTwoContainer.className = 'container';
  questionTwoContainer.id = 'questionContainerTwo';
  questionContainerDiv.appendChild(questionTwoContainer);

  // Makes the p for Question Two
  // CSS name = container
  var questionTwoContent = document.createElement('p');
  questionTwoContent.textContent = quizQuestions[1];
  questionTwoContainer.appendChild(questionTwoContent);

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
  questionTwoContent.appendChild(answerListTwo);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionTwoContent.appendChild(lineBreak);
    var correctNote = document.createElement('p');
    correctNote.textContent = 'Correct!';
    correctNote.className = 'correctNote';
    questionTwoContent.appendChild(correctNote);
// Store Correct Answer in Storage
    setTimeout(function(){
      questionTwoContainer.remove();
      runQuestionThree();
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionTwoContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionTwoContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionTwoContainer.remove();
      runQuestionThree();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionTwoContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionTwoContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionTwoContainer.remove();
      runQuestionThree();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionTwoContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionTwoContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionTwoContainer.remove();
      runQuestionThree();
      },1000)
      time = time - 5;
    })
}



///////////////////////////////////////////////////////////////////////// QUESTION THREE FRUNCTION
function runQuestionThree() {


   // Makes the container for Question Three
  // CSS name = container
  var questionThreeContainer = document.createElement('div');
  questionThreeContainer.className = 'container';
  questionThreeContainer.id = 'questionContainerThree';
  questionContainerDiv.appendChild(questionThreeContainer);

  // Makes the p for Question Three
  // CSS name = container
  var questionThreeContent = document.createElement('p');
  questionThreeContent.textContent = quizQuestions[2];
  questionThreeContainer.appendChild(questionThreeContent);

  //Makes the UL for Question Three
  // CSS name = answerList
  var answerListThree = document.createElement('ul');
  answerListThree.className = 'answerList'

  // For Loop to make AnswerTwo Choices into Buttons
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
  questionThreeContent.appendChild(answerListThree);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionThreeContent.appendChild(lineBreak);
    var correctNote = document.createElement('p');
    correctNote.textContent = 'Correct!';
    correctNote.className = 'correctNote';
    questionThreeContent.appendChild(correctNote);
// Store Correct Answer in Storage
    setTimeout(function(){
      questionThreeContainer.remove();
      runQuestionFour();
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionThreeContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionThreeContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionThreeContainer.remove();
      runQuestionFour();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionThreeContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionThreeContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionThreeContainer.remove();
      runQuestionFour();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionThreeContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionThreeContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionThreeContainer.remove();
      runQuestionFour();
      },1000)
      time = time - 5;
    })

}



/////////////////////////////////////////////////////////////////////////// QUESTION FOUR FUNCTION
function runQuestionFour() {


  // Makes the container for Question Four
  // CSS name = container
  var questionFourContainer = document.createElement('div');
  questionFourContainer.className = 'container';
  questionFourContainer.id = 'questionContainerFour';
  questionContainerDiv.appendChild(questionFourContainer);

  // Makes the p for Question Four
  // CSS name = container
  var questionFourContent = document.createElement('p');
  questionFourContent.textContent = quizQuestions[3];
  questionFourContainer.appendChild(questionFourContent);

  //Makes the UL for Question Four
  // CSS name = answerList
  var answerListFour = document.createElement('ul');
  answerListFour.className = 'answerList'

  // For Loop to make AnswerTwo Choices into Buttons
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
  questionFourContent.appendChild(answerListFour);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFourContent.appendChild(lineBreak);
    var correctNote = document.createElement('p');
    correctNote.textContent = 'Correct!';
    correctNote.className = 'correctNote';
    questionFourContent.appendChild(correctNote);
// Store Correct Answer in Storage
    setTimeout(function(){
      questionFourContainer.remove();
      runQuestionFive();
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFourContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionFourContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionFourContainer.remove();
      runQuestionFive();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFourContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionFourContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionFourContainer.remove();
      runQuestionFive();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFourContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionFourContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionFourContainer.remove();
      runQuestionFive();
      },1000)
      time = time - 5;
    })
}




//////////////////////////////////////////////////////////////////////////////// QUESTION FIVE FUNCTION
function runQuestionFive() {


  // Makes the container for Question Five
  // CSS name = container
  var questionFiveContainer = document.createElement('div');
  questionFiveContainer.className = 'container';
  questionFiveContainer.id = 'questionContainerFive';
  questionContainerDiv.appendChild(questionFiveContainer);

  // Makes the p for Question Five
  // CSS name = container
  var questionFiveContent = document.createElement('p');
  questionFiveContent.textContent = quizQuestions[4];
  questionFiveContainer.appendChild(questionFiveContent);

  //Makes the UL for Question Five
  // CSS name = answerList
  var answerListFive = document.createElement('ul');
  answerListFive.className = 'answerList'

  // For Loop to make AnswerTwo Choices into Buttons
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
  questionFiveContent.appendChild(answerListFive);

  // Listener if Correct Choice is made.
  document.getElementById('itemChoice3').addEventListener('click', function(event) {
    // Creates line and Correct! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFiveContent.appendChild(lineBreak);
    var correctNote = document.createElement('p');
    correctNote.textContent = 'Correct!';
    correctNote.className = 'correctNote';
    questionFiveContent.appendChild(correctNote);
// Store Correct Answer in Storage
    setTimeout(function(){
      questionFiveContainer.remove();
      endQuiz();
      },1000)
  })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice0').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFiveContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionFiveContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionFiveContainer.remove();
      endQuiz();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice1').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFiveContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionFiveContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionFiveContainer.remove();
      endQuiz();
      },1000)
      time = time - 5;
    })

  // Listener if Incorrect Choice is made.
  document.getElementById('itemChoice2').addEventListener('click', function(event) {
    // Creates line and Incorrect! Note adds to bottom of List
    var lineBreak = document.createElement('hr');
    lineBreak.className = 'lineBreak';
    questionFiveContent.appendChild(lineBreak);
    var incorrectNote = document.createElement('p');
    incorrectNote.textContent = 'Inorrect!';
    incorrectNote.className = 'incorrectNote';
    questionFiveContent.appendChild(incorrectNote);
// Store Incorrect Answer in Storage
    setTimeout(function(){
      questionFiveContainer.remove();
      endQuiz();
      },1000)
      time = time - 5;
    })
}

///////////////////////////////////////////////////////////////////////////////// END QUIZ FUNCTION
function endQuiz() {
  questionContainerDiv.remove()

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
