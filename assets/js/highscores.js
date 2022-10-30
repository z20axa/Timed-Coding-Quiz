
var highscoreSection = document.querySelector('#highscoreSection');
//
function renderquizScore() {
  var initials = localStorage.getItem("Initials");
  var quizscore = localStorage.getItem("QuizScore");

  if (!initials || !quizscore){
    return;
  };

  highscoreSection.textContent = '1. ' + initials + '- ' + quizscore;

};

renderquizScore();