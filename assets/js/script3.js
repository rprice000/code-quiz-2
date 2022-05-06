var viewHighScoresPage = document.querySelector("#scoringContainer");



 // Makes the container for Final Score
  // CSS name = container
  var finalScoresContainerDiv = document.createElement('div');
  finalScoresContainerDiv.className = 'container';
  finalScoresContainerDiv.id = 'finalScoresContainerDiv';
  viewHighScoresPage.appendChild(finalScoresContainerDiv);

  // Makes the p for Final Score Statement
  // CSS name = highScoresStatement
  var highScoresStatement = document.createElement('p');
  highScoresStatement.id = 'endQuizStatement';
  highScoresStatement.textContent = 'High Scores';
  finalScoresContainerDiv.appendChild(highScoresStatement);

  // Makes the ul for High Score List
  // CSS name = highScoreList
  var highScoreListTwo = document.createElement('ul');
  highScoreListTwo.id = 'highScoreListTwo';
  highScoresStatement.appendChild(highScoreListTwo);

  // Makes the container for Final Score Buttons
  // CSS name = container
  var finalScoresBtnContainer = document.createElement('div');
  finalScoresBtnContainer.className = 'container';
  finalScoresBtnContainer.id = 'finalScoresBtnContainer';
  viewHighScoresPage.appendChild(finalScoresBtnContainer);

  // Makes Two Buttons
  // CSS Class names = finalButton
  // CSS ID names = goBackBtn / clearHighScoresBtn
  var goBackFrontBtn = document.createElement('button');
  goBackFrontBtn.className = 'highScoreButtons';
  goBackFrontBtn.id = 'goBackFrontBtn';
  goBackFrontBtn.textContent = 'Go Back';
  finalScoresContainerDiv.appendChild(goBackFrontBtn);


  document.getElementById('goBackFrontBtn').onclick = function() {
      location.href = 'index.html';
  }


  var clearScoresBtn = document.createElement('button');
  clearScoresBtn.className = 'highScoreButtons';
  clearScoresBtn.id = 'clearScoresBtn';
  clearScoresBtn.textContent = 'Clear High Scores';
  finalScoresContainerDiv.appendChild(clearScoresBtn);



  var pullScoreTwoList = JSON.parse(localStorage.getItem("storedHighScores"))
  console.log(pullScoreTwoList);

  for (var i = 0; i < pullScoreTwoList.length; i++) {
    var scoreItem = document.createElement("li");
    scoreItem.className = "scoreItems";
    scoreItem.id = "scoreItem" + i;
    scoreItem.appendChild(document.createTextNode(pullScoreTwoList[i]));
    highScoreListTwo.appendChild(scoreItem);
  }




document.getElementById("clearScoresBtn").addEventListener("click", clearingScoresTwo);
// Event Listener for Clearing All Scores
function clearingScoresTwo() {
  localStorage.clear();
  highScoresArray.length = 0;
  currentUserData.length = 0;
};

