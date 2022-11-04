// doc variable declarations 
var highscoreSection = document.querySelector('#highscoreDisplay');
var clearhighscoreButton = document.querySelector('#clearhighscoreButton');

/** function declaration to get the items from the local storage and for display
 * 
 * @returns 
 */
function renderquizScore(){
  var initials = JSON.parse(localStorage.getItem("Initials")); // get initals value from local storage
  var quizscore = JSON.parse(localStorage.getItem("QuizScore")); // get quiz score from local storage

    // checks if local storage items are empty
    if (initials===null || quizscore===null){
        return;
    };

    // modify the text/attributes for the initals and quiz score for display
    highscoreSection.textContent = '1. ' + initials + ' - ' + quizscore;
};

// function call to render/display the initals and quiz score
renderquizScore();

// event listener to clear the local storage
clearhighscoreButton.addEventListener('click', function(event){
    localStorage.clear(); // clears the local storage
    location.reload(); // page refresh 
});
