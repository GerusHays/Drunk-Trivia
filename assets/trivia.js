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
var cocktailUrl;
var randDrink;
var vehicleQuestionButton = document.querySelector("#category-1-btn")
// This function is for the -Get Me Drunk- button and the -Back to Drink- buttons that will make the -generate cocktail btn- -generate drink statement- -category section- -question section- disapear and will then display the randomly selected cocktail


// This function is for the -Trivia Time- button and -New Question- button that removes the -Drink Info- -Question Section- and displays the -Category Section-
function chooseCategory() {
  drinkInfo.style.display = "none";
  questionSection.style.display = "none";
  categorySection.style.display = "inline";
};
// This function is for the -Category- buttons that removes the -Category Section- and displays the -Question Section-
function getQuestion() {
  categorySection.style.display = "none";
  questionSection.style.display = "flex";
};

function getVehicleQuestion() {
  vehicleUrl = "https://opentdb.com/api.php?amount=2&category=28&type=multiple";
  fetch(vehicleUrl)
    .then(function (response) {
      return response.json();
    })
  var questionData = (data.results[0].question);
  var correctAnswerData = (data.results[0].correct_answer);
  var incorrectAnswerData = (data.results[0].incorrect_answers);
  localStorage.setItem("question1", questionData);
  localStorage.setItem("correctAnswer", correctAnswerData);
  localStorage.setItem("incorrectAnswer", incorrectAnswerData);
};

vehicleQuestionButton.addEventListener('click', getVehicleQuestion);




  // function getSportsQuestion() {
  //   cocktailUrl = "https://opentdb.com/api.php?amount=2&category=21";
  //   fetch(cocktailUrl)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data.drinks[0].strDrink);
  //       randDrink = data.drinks[0].idDrink;
  //       console.log("this is your random drink: " + randDrink);
  //       for (var i = 0; i < 1; i++) {
  //         drinkDisplay.textContent = data.drinks[0].strDrink;
  //       }
  //       getrecipeApi();
  //     });
  // };
  // function getPoliticsQuestion() {
  //   cocktailUrl = "https://opentdb.com/api.php?amount=2&category=24";
  //   fetch(cocktailUrl)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data.drinks[0].strDrink);
  //       randDrink = data.drinks[0].idDrink;
  //       console.log("this is your random drink: " + randDrink);
  //       for (var i = 0; i < 1; i++) {
  //         drinkDisplay.textContent = data.drinks[0].strDrink;
  //       }
  //       getrecipeApi();
  //     });
  // };

