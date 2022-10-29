// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

// Collection of objects that hold the questions and answers
var quizQuestions = [
  { // array [0]
    Question:"Commonly used data types DO NOT include: ",
    answer1:"Strings",
    answer2:"Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
    correctAnswer:"Alerts"
  },
  { // array [1]
    Question:"The condition in an if/else statment is enclosed with: ",
    answer1:"Parenthesis",
    answer2:"Curly Brackets",
    answer3: "Quotes",
    answer4: "Square Brackets",
    correctAnswer:"Parenthesis"
  },
  { // array [2]
    Question:"Arrays in JavaScript can be used to store: ",
    answer1:"Numbers & Strings",
    answer2:"Other Arrays",
    answer3: "Booleans",
    answer4: "All Of The Above",
    correctAnswer:"All Of The Above"
  },
  { // array [3]
    Question:"String values must be enclosed within _____ when being assigned to variables",
    answer1:"Commas",
    answer2:"Quotes",
    answer3: "Curly Brackets",
    answer4: "Parenthesis",
    correctAnswer:"Quotes"
  },
  { // array [4]
    Question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1:"JavaScript",
    answer2:"Terminal/bash",
    answer3: "For Loops",
    answer4: "Console.log",
    correctAnswer:"Console.log"
  }
];

var currentQuestion = 0; // to keep a count of the question that is displayed
var currentScore = 0; // to keep track of score
var countdownTime = 10; // to keep the quiz time

var quizTimerEl = document.querySelector('#quizTimer');
var startquizbuttonEl = document.querySelector('#startquizButton');
var welcomesectionEl = document.querySelector('#welcomeSection');
var questionsectionEl = document.querySelector('#questionsSection');
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");

// <section style="display:none" id="questionsSection">
//  <h2 id="question"></h2>
//  <ol id="answers">
//    <button></button>
//  </ol>
// </section>

// creates list elements
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var li1button = document.createElement('button');
var li2button = document.createElement('button');
var li3button = document.createElement('button');
var li4button = document.createElement('button');

// append all list elements to the order list to display the question's answers
answersEl.appendChild(li1);
answersEl.appendChild(li2);
answersEl.appendChild(li3);
answersEl.appendChild(li4);

// append all the button elements to the appended list elements above to display the question's answers
li1.appendChild(li1button);
li2.appendChild(li2button);
li3.appendChild(li3button);
li4.appendChild(li4button);


startquizbuttonEl.addEventListener("click", function(event){
  startTimer();
  // welcomesectionEl.innerHTML="";

  // add questions function call
  addQuestion();
});

// start quiz time function
function startTimer(){
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // console.log(countdownTime);
    // subtract 1 second
    countdownTime--;
    quizTimerEl.textContent = countdownTime;

    if(countdownTime === 0){
      // stop timer
      clearInterval(timeInterval);

      return;

      // call function to display alldoneSection
      // displayMessage();
    }
    
  }, 1000);
};

function addQuestion(){
  // hides the welcome section display
  welcomesectionEl.setAttribute("style", "display:none"); 
  // welcomesectionEl.innerHTML=""; // another way to hide the welcome section display

  // display the questions and answers section
  questionsectionEl.setAttribute("style", "display:block"); 

  // modify the text/attributes
  questionEl.textContent=quizQuestions[currentQuestion].Question;
  li1button.textContent=quizQuestions[currentQuestion].answer1;
  li2button.textContent=quizQuestions[currentQuestion].answer2;
  li3button.textContent=quizQuestions[currentQuestion].answer3;
  li4button.textContent=quizQuestions[currentQuestion].answer4;
};

// event listener for all the buttons, 
li1button.addEventListener("click", function(event){
  checkAnswers(event);
    
  // add questions function call
  addQuestion();
});

li2button.addEventListener("click", function(event){
  checkAnswers(event);
    
  // add questions function call
  addQuestion();
});

li3button.addEventListener("click", function(event){
  checkAnswers(event);
    
  // add questions function call
  addQuestion();
});

li4button.addEventListener("click", function(event){
  checkAnswers(event);
    
  // add questions function call
  addQuestion();
});

function checkAnswers(event){
  var child = event.target;
  // console.log(child);
  // console.log(child.innerText);
  
  if(child.innerText===quizQuestions[currentQuestion].correctAnswer){
    console.log("You got it right!");
    currentScore+=10;
  }
  else {
    console.log("You got it wrong!")
    countdownTime-=20;
    currentScore+=0;   
  }
  
  currentQuestion++;
  
  console.log(countdownTime);
  console.log(currentScore);
  };

