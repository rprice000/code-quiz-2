// js for the app
var appContainer = document.querySelector('#appContainer');
var openingContent = document.querySelector('#openingContent');
var quizContent = document.querySelector('#quizContent');
var startQuizbtn = document.querySelector('#startQuizButton');




startQuizbtn.addEventListener("click", function() {
    alert("button clicked");
    openingContent.remove()
    var question = document.createElement('h1');
    question.textContent = "hello";
    quizContent.appendChild(question);
  });















// When user clicks Start Quiz
// Then main content is removed
// The timer starts counting down
// The first question is displayed
//