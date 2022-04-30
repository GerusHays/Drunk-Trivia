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
        console.log(questionData);
      })
      ;
};

function formatQuiz(params) {
  questionSection.classList.remove("hidden");
  categorySection.classList.add("hidden");
  statusBar.classList.remove("hidden");
  subject.textContent = "Current Category: " + questionData.results[0].category;
  drinks.textContent = "Drinks: "
  score.textContent = "Score: "
};

function getNextQuestion() {
  console.log(questionData.results.length);
  console.log(questionCount);
  if (questionData.results.length > questionCount) {
    if (questionComplete == true || questionCount == 0) {
      questionComplete = false;
      //remove correct/incorrect
      
      if (questionCount > 0){
      testBox(correctLocation).classList.remove("correct");
      for (let i = 0; i < 4; i++) {
          testBox(i).classList.remove("incorrect");
        }
      }
      
        //setting the question
      questionText.textContent = questionData.results[questionCount].question;
      //selecting and placing what will be the correct answer
      correctLocation = Math.floor(Math.random() * 4);
      if (correctLocation == 0) {
        answerBtn0.textContent = questionData.results[questionCount].correct_answer;
      } else if (correctLocation == 1) {
        answerBtn1.textContent = questionData.results[questionCount].correct_answer;
      } else if (correctLocation == 2){
        answerBtn2.textContent = questionData.results[questionCount].correct_answer;
      } else {
        answerBtn3.textContent = questionData.results[questionCount].correct_answer;
      }
      //placing all incorrect answers
      var placed = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== correctLocation) {
          testBox(i).textContent = questionData.results[questionCount].incorrect_answers[placed];
          placed++;
        }
        
      }
      questionCount++;
    }
  } else {
    //end of questions
    console.log("no more questions");
  }  
}
//check the answer to see if it is correct
function checkClickedButton(button) {
  if (questionComplete == false) {
    if (correctLocation == button) {
      testBox(button).classList.add("correct");
      playerScore = playerScore + 100;
      score.textContent = "Score: " + playerScore;
  
    } else {
      for (let i = 0; i < 4; i++) {
        testBox(i).classList.add("incorrect");
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

hideQestions();