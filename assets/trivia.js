var questionSection = document.querySelector("#question-section");
var categorySection = document.querySelector("#category-section");

var triviaUrl = ["https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple", "https://opentdb.com/api.php?amount=5&category=24&difficulty=medium&type=multiple"]
var cocktailUrl;
var randDrink;
var questionData;


function getQuestions(topic) {
  fetch(triviaUrl[topic])
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
            questionData = data;
            console.log(questionData);  
      })
      .then(formatQuiz())
      ;
};

function formatQuiz(params) {
  console.log(questionSection);
  console.log(categorySection);
  questionSection.classList.add("visible");
  categorySection.classList.add("hidden");
};

function hideQestions () {
  questionSection.classList.add("hidden");
}

hideQestions();