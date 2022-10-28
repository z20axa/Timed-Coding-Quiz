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
var myQuestions = [
  { // array [0]
    Question1:"What day is today?",
    answer1:"Monday",
    answer2:"Thursday",
    correctAnswer:"Thursday"
  },
  { // array [1]
    Question2:"What day is yesterday?",
    answer1:"Monday",
    answer2:"Wednesday",
    correctAnswer:"Wednesday"
  },
  { // array [2]
    Question3:"What day is yesterday?",
    answer1:"Monday",
    answer2:"Wednesday",
    correctAnswer:"Wednesday"
  },
  { // array [3]
    Question4:"What day is yesterday?",
    answer1:"Monday",
    answer2:"Wednesday",
    correctAnswer:"Wednesday"
  },
  { // array [4]
    Question5:"What day is yesterday?",
    answer1:"Monday",
    answer2:"Wednesday",
    correctAnswer:"Wednesday"
  }
]

var currentQuestion = 0; // to keep a count of the question that is displayed
var score = 0; // to keep track of score
var time = 10; // to keep the quiz time


var answers = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var startPageMessage = document.querySelector("#startPageMessage");


// function startTimer(){

// }

// function addQuestion(){
//   // create the question elements

//   // modify the text/attributes
//   // modify one of the attributes to say right or wrong

//   // append all elements to something on the page

//   // for all the buttons, add event listener

//     // WHEN I answer a question
//     // if answered correctly
//     // add points
//     // show as correct
//     // WHEN I answer a question incorrectly
//     // THEN time is subtracted from the clock
//     // show as incorrect

//     // after the answer, 
//     // THEN I am presented with another question
//     // need a function call to present the question

//     // if no other questions,
//     // go to highscore screen
// }

// function startQuiz(){
//   // timer starts and I am presented with a question
//   // need a function call to start the timer

//   // need a function call to present the question
// }

// eventListener here // when i click the start button

function countdown(timer=5) {
  // var timeLeft = 5;

  // `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    console.log(timer);
    // subtract 1 second
    timer--;
    timerEl.textContent = timer;

    if(timer === 0){
      // stop timer
      clearInterval(timeInterval);

      return timer;
      // call the displayMessage function
      // displayMessage();
    }
   
  }, 1000);
}

console.log(countdown(10));

// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Renders start quiz
 */
function startQuiz(){

  // add the start button
  // create
  var item = document.createElement("li");
  var btn = document.createElement("button");
  
  // modify/add attributes/values
  btn.textContent = "START";
  btn.setAttribute("id", "start-button");

  // append to a visible element on the page
  answers.appendChild(item);
  item.appendChild(btn);

  // add the question
  // modify/add attributes/values
  questionEl.textContent = "Start answering the questions!";

  var timeLeft = 10;

  var timerEl = document.createElement("span");
  var startCountdown = countdown(timeLeft);
  if(startCountdown !== timeLeft) {
    console.log(startCountdown, timeLeft);
    timerEl.textContent = timeLeft;
    questionEl.appendChild(timerEl)
  }
}

function addQuestions(){
  // clear start page display
  startPageMessage.innerHTML = "";
  
  // q: "Question 1?",
  // id: 1,  
  var question = questions[currentQuestion];

  questionEl.textContent = question.q;

  // clear answers
  answers.innerHTML = '';


  for(var i = 0; i < question.answers.length; i++){
    console.log(question.answers[i]);

    // <li>
    //       <button class="option-button" data-index="2" data-value="5" data-next="-1">Rate 5</button>
    //     </li>
    var item = document.createElement('li'); // create
    var button = document.createElement('button');
    // modify
    button.setAttribute("class", "option-button");
    button.textContent = question.answers[i];
    button.dataset.index = currentQuestion;
    button.dataset.next = currentQuestion + 1;
   
    if(question.answers[i] === question.correct){
      button.dataset.value = "correct";
    }
    else{
      button.dataset.value = "incorrect";
    }
    
    answers.appendChild(item);
    item.appendChild(button); // append
  }
}

// call startQuiz to show the first screen
startQuiz();

answers.addEventListener("click", function(event){
 
  if(child.matches("#start-button")){
    addQuestions();
  }
  if(child.matches(".option-button")){
    if(child.dataset.next < questions.length){
      currentQuestion = parseInt(child.dataset.next);
      if(child.dataset.value === "correct"){
        ans++;
      }
      addQuestions();
    }
    else{
      if(child.dataset.value === "correct"){
        ans++;
      }

      // save the ans to localstorage
      question.textContent = "Yay you got ... " + ans + " questions!";
      
      answers.innerHTML = "";
    }
  }
})

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");

// renderLastRegistered();

// /**
//  * Sets the class and message
//  * @param {*} type - class 
//  * @param {*} message - text
//  */
// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   // msgDiv.textContent = "banana";
//   // msgDiv.setAttribute("class", type);
//   msgDiv.setAttribute("");
// }

// /**
//  * render - process the information so we can see it
//  * because it is declared, the definition of the function will be the hoisted to the top
//  */
// function renderLastRegistered() {
//   // TODO: Retrieve the last email and password and render it to the page
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

//   if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//   // TODO: Save email and password to localStorage and render the last registered user
//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);
//   // call the render function that we defined before 
//   // - basically repeating those lines as if they were written here
//   renderLastRegistered();
//   // var email = localStorage.getItem("email");
//   // var password = localStorage.getItem("password");

//   // userEmailSpan.textContent = email;
//   // userPasswordSpan.textContent = password;
//   }
// });

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------


// // the kitten app starts here
// // collection of kitten objects
// var kittens = [
//   {
//     q: "How do you rate this kitten?",
//     id: 1,  
//     image: "assets/images/kitten1.jfif",
//     rating: ["Rate 5", "Rate 4", "Don't take this kitten!"],
//     incorrect: "Don't take this kitten!"
//   },
//   {
//     q: "How do you rate this kitten?",
//     id: 2,  
//     image: "assets/images/kitten2.jfif",
//     rating: ["Rate 5", "Rate 4", "Don't take this kitten!"],
//     incorrect: "Don't take this kitten!"
//   },
//   {
//     q: "How do you rate this kitten?",
//     id: 3,  
//     image: "assets/images/kitten3.jfif",
//     rating: ["Rate 5", "Rate 4", "Don't take this kitten!"],
//     incorrect: "Don't take this kitten!"
//   },
//   {
//     q: "How do you rate this kitten?",
//     id: 4,  
//     image: "assets/images/kitten1.jfif",
//     rating: ["Rate 5", "Rate 4", "Destroy this kitten!"],
//     incorrect: "Destroy this kitten!"
//   }
// ];

// var currentKitten = 0;
// var ans = 0;
// var menu = document.querySelector("#menu");
// var heading = document.querySelector("#heading");
// var kittenFigure = document.querySelector("#kitten");

// /**
//  * Renders start screen
//  */
// function startScreen(){

//   // add the start button
//   // create
//   var item = document.createElement("li");
//   var btn = document.createElement("button");
//   // modify/add attributes/values
//   btn.textContent = "start";
//   btn.setAttribute("id", "start-button");

//   // append to a visible element on the page
//   menu.appendChild(item);
//   item.appendChild(btn);

//   // add the heading
//   // modify/add attributes/values
//   heading.textContent = "Start Adding Kittens to your collection!"
// }

// function renderKitten(){
//   // {
//   //   q: "How do you rate this kitten?",
//   //   id: 1,  
//   //   image: "assets/images/kitten1.jfif"
//   // },
//   var kitten = kittens[currentKitten];

//   heading.textContent = kitten.q;

//   kittenFigure.innerHTML = '';

//   var kittenImage = document.createElement("img"); //create

//   kittenImage.setAttribute("src", kitten.image) //modify
//   kittenImage.setAttribute("alt", "Kitten"); // modify

//   kittenFigure.append(kittenImage); // append

//   // clear menu
//   menu.innerHTML = '';

//   for(var i = 0; i < kitten.rating.length; i++){
//     console.log(kitten.rating[i]);

//     // <li>
//     //       <button class="option-button" data-index="2" data-value="5" data-next="-1">Rate 5</button>
//     //     </li>
//     var item = document.createElement('li'); // create
//     var button = document.createElement('button');
//     // modify
//     button.setAttribute("class", "option-button");
//     button.textContent = kitten.rating[i];
//     button.dataset.index = currentKitten;
//     button.dataset.next = currentKitten + 1;
//     // if(kitten.rating[i] !== kitten.incorrect){
//     //   button.dataset.value = "correct";
//     // }
//     // else{
//     //   button.dataset.value = "incorrect";
//     // }
//     if(kitten.rating[i] === kitten.incorrect){
//       button.dataset.value = "incorrect";
//     }
//     else{
//       button.dataset.value = "correct";
//     }
    
//     menu.appendChild(item);
//     item.appendChild(button);// append
//   }
// }

// // call startscreen to show the first screen
// startScreen();

// menu.addEventListener("click", function(event){
//   console.log(ans);

//   var child = event.target;
//   console.log(child);

//   if(child.matches("#start-button")){
//     renderKitten();
//   }
//   if(child.matches(".option-button")){
//     if(child.dataset.next < kittens.length){
//       currentKitten = parseInt(child.dataset.next);
//       if(child.dataset.value === "correct"){
//         ans++;
//       }
//       renderKitten();
//     }
//     else{
//       if(child.dataset.value === "correct"){
//         ans++;
//       }

//       heading.textContent = "Yay you got ... " + ans + " kittens!";
//       // save the ans to localstorage
//       kittenFigure.innerHTML = "";
//       menu.innerHTML = "";
//     }
//   }
// })
