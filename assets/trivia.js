// global variables
var getCocktail = document.querySelector("#cocktail-generate-btn");
var newCocktail = document.querySelector("#new-cocktail-btn");
var getTrivia = document.querySelector("#trivia-btn");
var backToDrink = document.querySelector("#back-to-drink");
var drinkDisplay = document.querySelector("#drink-name");
var generateDrink = document.querySelector("#generate-drink");
var drinkInfo = document.querySelector("#drink-info");
var recipeList = document.querySelector("#recipe-list");
var categorySection = document.querySelector("#category-section");
var questionSection = document.querySelector("#question-section");
var categorySection = document.querySelector("#category-section");
var statusBar = document.querySelector("#status-bar");
var questionText = document.querySelector("#question");
var answerBtn0 = document.querySelector("#answer-0-btn");
var answerBtn1 = document.querySelector("#answer-1-btn");
var answerBtn2 = document.querySelector("#answer-2-btn");
var answerBtn3 = document.querySelector("#answer-3-btn");
var subject = document.querySelector("#subject");
var drinks = document.querySelector("#drinks");
var score = document.querySelector("#score");
var triviaUrl = ["https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=5&category=24&difficulty=medium&type=multiple"]
var questionData;
var questionCount = 0;
var questionComplete = false;
var correctLocation;
var playerScore = 0;
var playerDrinks = 0;
var cocktailUrl;
var randDrink;
// Set correctString to a global variable
var correctString;

//function to get the questions from the web api and convert them into a variable to reduce the number of api calls made to the server
function getQuestions(topic) {
  fetch(triviaUrl[topic])
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
            questionData = data;
      })
      .then(function () {
        formatQuiz()
        getNextQuestion();
      })
      ;
};

//function to remove the category selection icons and show the question section as well as initialize the values used in the game
function formatQuiz(params) {
  questionSection.classList.remove("hidden");
  categorySection.classList.add("hidden");
  statusBar.classList.remove("hidden");
  subject.textContent = "Current Category: " + questionData.results[0].category;
  drinks.textContent = "Drinks: 0"
  score.textContent = "Score: 0"
  localStorage.removeItem("finalScore");
  localStorage.removeItem("finalDrinks");
  localStorage.removeItem("category");
};

//function to get the new question, randomize where the correct answer goes and then place all the answers in a spot
function getNextQuestion() {
  //the function will not run if there are no more questions that were returned from the server
  if (questionData.results.length > questionCount) {
    //checking to make sure the current question has been answered or that you are on the first question
    if (questionComplete == true || questionCount == 0) {
      questionComplete = false;
      //remove correct/incorrect
      if (questionCount > 0){
      testBox(correctLocation).classList.remove("correct");
      for (let i = 0; i < 4; i++) {
          testBox(i).classList.remove("incorrect");
        }
      }
      //removing "/' special codes
      var questionString = questionData.results[questionCount].question;
      questionString = questionString.replace(/&#039;/g , "'");
      questionString = questionString.replace(/&quot;/g , "\"");
      questionString = questionString.replace(/&eacute;/g , "é");
      questionString = questionString.replace(/&ouml;/g , "ö");
      //setting the question
        questionText.textContent = questionString;
      //selecting and placing what will be the correct answer
      correctLocation = Math.floor(Math.random() * 4);
      correctString = questionData.results[questionCount].correct_answer;
      correctString = correctString.replace(/&#039;/g , "'");
      correctString = correctString.replace(/&quot;/g , "\"");
      correctString = correctString.replace(/&eacute;/g , "é");
      correctString = correctString.replace(/&ouml;/g , "ö");
      if (correctLocation == 0) {
        answerBtn0.textContent = correctString;
      } else if (correctLocation == 1) {
        answerBtn1.textContent = correctString;
      } else if (correctLocation == 2){
        answerBtn2.textContent = correctString;
      } else {
        answerBtn3.textContent = correctString;
      }
      //placing all incorrect answers
      var placed = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== correctLocation) {
          var currentString = questionData.results[questionCount].incorrect_answers[placed];
          currentString = currentString.replace(/&#039;/g , "'");
          currentString = currentString.replace(/&quot;/g , "\"");
          testBox(i).textContent = currentString;
          placed++;
        }
        
      }
      questionCount++;
    }
    //storing the scores into local storage when there are no more questions so they can be shown on final score page
  } else {
    localStorage.setItem("finalScore", playerScore);
    localStorage.setItem("finalDrinks", playerDrinks);
    localStorage.setItem("category", questionData.results[0].category);
    window.location.href = "./final-score.html";
  }  
}
//check the answer to see if it is correct or incorrect
function checkClickedButton(button) {
  if (questionComplete == false) {
    if (correctLocation == button) {
      testBox(button).classList.add("correct");
      playerScore = playerScore + 100;
      score.textContent = "Score: " + playerScore;
  
    } else {
      for (let i = 0; i < 4; i++) {
        var currentBox = testBox(i)
        if (currentBox.textContent == correctString) {
          currentBox.classList.add("correct");
        } else {
          currentBox.classList.add("incorrect");
        }
      }
      playerDrinks = playerDrinks + 1;
      drinks.textContent = "Drinks: " + playerDrinks;
    }
  }
  questionComplete = true;
}
//a funtion to get current answer button and return it so its values can be changed
function testBox(number) {
  var currentBox = "#answer-" + number + "-btn";
  return document.querySelector(currentBox);
}

 function hideQestions () {
     questionSection.classList.add("hidden");
}
//hiding questions when the page is first loaded
hideQestions();