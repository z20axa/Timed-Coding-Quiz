// doc variable declarations 
var highscoreSection = document.querySelector('#highscoreSection');
var clearhighscoreButton = document.querySelector('#clearhighscoreButton');

// function declaration to get the items from the local storage and for display
function renderquizScore(){
  var initials = JSON.parse(localStorage.getItem("Initials")); // get initals value from local storage
  var quizscore = JSON.parse(localStorage.getItem("QuizScore")); // get quiz score from local storage

    // checks if local storage items are empty
    if (!initials || !quizscore){
        return;
    };

    // modify the text/attributes for the initals and quiz score for display
    highscoreSection.textContent = '1. ' + initials + ' - ' + quizscore;
};

renderquizScore();

// function declaration to clear the local storage
clearhighscoreButton.addEventListener('click', function(event){
    localStorage.setItem("Initials", JSON.stringify(""));
    localStorage.setItem("QuizScore", JSON.stringify(""));
});
