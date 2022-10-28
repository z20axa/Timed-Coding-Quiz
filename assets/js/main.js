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
    Question1:"Commonly used data types DO NOT include: ",
    answer1:"Strings",
    answer2:"Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
    correctAnswer:"Alerts"
  },
  { // array [1]
    Question2:"The condition in an if/else statment is enclosed with: ",
    answer1:"Parenthesis",
    answer2:"Curly Brackets",
    answer3: "Quotes",
    answer4: "Square Brackets",
    correctAnswer:"Parenthesis"
  },
  { // array [2]
    Question3:"Arrays in JavaScript can be used to store: ",
    answer1:"Numbers & Strings",
    answer2:"Other Arrays",
    answer3: "Booleans",
    answer4: "All Of The Above",
    correctAnswer:"All Of The Above"
  },
  { // array [3]
    Question4:"String values must be enclosed within _____ when being assigned to variables",
    answer1:"Commas",
    answer2:"Quotes",
    answer3: "Curly Brackets",
    answer4: "Parenthesis",
    correctAnswer:"Quotes"
  },
  { // array [4]
    Question5:"A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1:"JavaScript",
    answer2:"Terminal/bash",
    answer3: "For Loops",
    answer4: "Console.log",
    correctAnswer:"Console.log"
  }
];

var currentQuestion = 0; // to keep a count of the question that is displayed
var currentScore = 0; // to keep track of score

var quizTimerEl = document.querySelector('#quizTimer');
var startquizbuttonEl = document.querySelector('#startquizButton');

var welcomesectionEl = document.querySelector('#welcomeSection');

var questionsectionEl = document.querySelector('#questionsSection');
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");

// start quiz time function
function startTimer(){
  var countdownTime = 5; // to keep the quiz time

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      console.log(countdownTime);
      // subtract 1 second
      countdownTime--;
      quizTimerEl.textContent = countdownTime;
  
      if(countdownTime === 0){
        // stop timer
        clearInterval(timeInterval);
  
        // call function to display alldoneSection
        // displayMessage();
      }
      
    }, 1000);
  };


startquizbuttonEl.addEventListener("click", function(event){
  startTimer();
  // welcomesectionEl.innerHTML="";

  // add questions function call
  addQuestion();
});

function addQuestion(){
  // hides the welcome section display
  welcomesectionEl.setAttribute("style", "display:none"); 
  // welcomesectionEl.innerHTML=""; // another way to hide the welcome section display

  // display the questions and answers section
  questionsectionEl.setAttribute("style", "display:block"); 

  //   <section style="display:none" id="questionsSection">
  //   <h2 id="question"></h2>
  //   <ul id="answers">
  //   </ul>
  // </section>
    // creates list elements
  // Create ordered list items
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");

  // modify the text/attributes
  questionEl.textContent=quizQuestions[0].Question1;
  li1.textContent=quizQuestions[0].answer1;
  li2.textContent=quizQuestions[0].answer2;
  li3.textContent=quizQuestions[0].answer3;
  li4.textContent=quizQuestions[0].answer4;

  // append all list elements to the order list to display the question's answers
  answersEl.appendChild(li1);
  answersEl.appendChild(li2);
  answersEl.appendChild(li3);
  answersEl.appendChild(li4);
  

  // for all the buttons, add event listener

    // WHEN I answer a question
    // if answered correctly
    // add points
    // show as correct
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // show as incorrect

    // after the answer, 
    // THEN I am presented with another question
    // need a function call to present the question

    // if no other questions,
    // go to highscore screen
};

// function startQuiz(){
//   // timer starts and I am presented with a question
//   // need a function call to start the timer

//   // need a function call to present the question
// }

// eventListener here // when i click the start button

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

// /**
//  * Renders start quiz
//  */
// function startQuiz(){

//   // add the start button
//   // create
//   var item = document.createElement("li");
//   var btn = document.createElement("button");
  
//   // modify/add attributes/values
//   btn.textContent = "START";
//   btn.setAttribute("id", "start-button");

//   // append to a visible element on the page
//   answers.appendChild(item);
//   item.appendChild(btn);

//   // add the question
//   // modify/add attributes/values
//   questionEl.textContent = "Start answering the questions!";

//   var timeLeft = 10;

//   var timerEl = document.createElement("span");
//   var startCountdown = countdown(timeLeft);
//   if(startCountdown !== timeLeft) {
//     console.log(startCountdown, timeLeft);
//     timerEl.textContent = timeLeft;
//     questionEl.appendChild(timerEl)
//   }
// }

// function addQuestions(){
//   // clear start page display
//   startPageMessage.innerHTML = "";
  
//   // q: "Question 1?",
//   // id: 1,  
//   var question = questions[currentQuestion];

//   questionEl.textContent = question.q;

//   // clear answers
//   answers.innerHTML = '';


//   for(var i = 0; i < question.answers.length; i++){
//     console.log(question.answers[i]);

//     // <li>
//     //       <button class="option-button" data-index="2" data-value="5" data-next="-1">Rate 5</button>
//     //     </li>
//     var item = document.createElement('li'); // create
//     var button = document.createElement('button');
//     // modify
//     button.setAttribute("class", "option-button");
//     button.textContent = question.answers[i];
//     button.dataset.index = currentQuestion;
//     button.dataset.next = currentQuestion + 1;
   
//     if(question.answers[i] === question.correct){
//       button.dataset.value = "correct";
//     }
//     else{
//       button.dataset.value = "incorrect";
//     }
    
//     answers.appendChild(item);
//     item.appendChild(button); // append
//   }
// }

// // call startQuiz to show the first screen
// startQuiz();

// answers.addEventListener("click", function(event){
 
//   if(child.matches("#start-button")){
//     addQuestions();
//   }
//   if(child.matches(".option-button")){
//     if(child.dataset.next < questions.length){
//       currentQuestion = parseInt(child.dataset.next);
//       if(child.dataset.value === "correct"){
//         ans++;
//       }
//       addQuestions();
//     }
//     else{
//       if(child.dataset.value === "correct"){
//         ans++;
//       }

//       // save the ans to localstorage
//       question.textContent = "Yay you got ... " + ans + " questions!";
      
//       answers.innerHTML = "";
//     }
//   }
// })
