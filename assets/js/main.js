// Array with collection of objects that hold the questions and answers
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

var currentQuestion = 0; // variable to keep a count of the question that is displayed
var currentScore = 0; // variable to keep track of the score
var countdownTime = 100; // vairable to keep the quiz countodnw time

// doc variable declarations 
var quizTimerEl = document.querySelector('#quizTimer');
var startquizbuttonEl = document.querySelector('#startquizButton');
var welcomesectionEl = document.querySelector('#welcomeSection');
var questionsectionEl = document.querySelector('#questionsSection');
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var answerMessage = document.querySelector('#answerMessage');

// create ordered list elements
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// create buttons for each ordered list element created 
var li1button = document.createElement('button');
var li2button = document.createElement('button');
var li3button = document.createElement('button');
var li4button = document.createElement('button');

// append all list elements to the order list to display the question's answers
answersEl.appendChild(li1);
answersEl.appendChild(li2);
answersEl.appendChild(li3);
answersEl.appendChild(li4);

// append all the button elements to the appended list elements 
li1.appendChild(li1button);
li2.appendChild(li2button);
li3.appendChild(li3button);
li4.appendChild(li4button);

// function declaration to start quiz countown time 
function startTimer(){
  // `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // console.log(countdownTime);
    // subtract 1 second
    countdownTime--;
    quizTimerEl.textContent = countdownTime; // modify the text/attributes the quiz time element for display

    if(countdownTime===0){
      clearInterval(timeInterval); // stop the quiz countdown time

      return;

      // call function to display alldoneSection
      // displayMessage();
    }
  }, 1000);
};

// function declaration to add the quiz question and answer choices 
function addQuestion(){
  welcomesectionEl.setAttribute("style", "display:none");  // hides the welcome section display
  // welcomesectionEl.innerHTML=""; // another way to hide the welcome section display

  questionsectionEl.setAttribute("style", "display:block"); // display the questions and answers section

  // modify the text/attributes
  questionEl.textContent=quizQuestions[currentQuestion].Question;
  li1button.textContent=quizQuestions[currentQuestion].answer1;
  li2button.textContent=quizQuestions[currentQuestion].answer2;
  li3button.textContent=quizQuestions[currentQuestion].answer3;
  li4button.textContent=quizQuestions[currentQuestion].answer4;
};

// function declaration to check if the answer is correct or wrong 
function checkAnswers(event){
  var child = event.target; // variable declaration
  // console.log(child);
  // console.log(child.innerText);
  
  // to check if the answer is correct 
  if(child.innerText===quizQuestions[currentQuestion].correctAnswer){
    console.log("You got it right!");
    // answerMessage.setAttribute("style", "display:block"); 
    // answerMessage.textContent = "You got it right!";
    currentScore+=10; // if the answer is correct adds 10 points to the quiz score
  } else // to check if the answer is wrong 
  {
    console.log("You got it wrong!")
    // answerMessage.setAttribute("style", "display:block"); 
    // answerMessage.textContent = "You got it wrong!";
    countdownTime-=10; // time penalty, if the answer is wrong deducts 10 seconds from the quiz countdown time
    currentScore+=0; // if the answer is wrong no points add it to the quiz score
  };
  
  currentQuestion++; // question index to go the next questions after checking the previous question answers 
  
  console.log(countdownTime);
  console.log(currentScore);
  };

// start quiz countdown time click event listerner 
startquizbuttonEl.addEventListener("click", function(event){
  startTimer(); // function call to start the quiz countdown time
  
  addQuestion(); // function call to add the quiz question and answer choices
});

// event listener for all the questions' answer buttons
li1button.addEventListener("click", function(event){
  checkAnswers(event); // function call to check if the answer is correct or wrong 
    
  addQuestion(); // function call to add the quiz question and answer choices
});

li2button.addEventListener("click", function(event){
  checkAnswers(event); // function call to check if the answer is correct or wrong 
    
  addQuestion(); // function call to add the quiz question and answer choices
});

li3button.addEventListener("click", function(event){
  checkAnswers(event); // function call to check if the answer is correct or wrong 
    
  addQuestion(); // function call to add the quiz question and answer choices
});

li4button.addEventListener("click", function(event){
  checkAnswers(event); // function call to check if the answer is correct or wrong 
    
  addQuestion(); // function call to add the quiz question and answer choices
});



