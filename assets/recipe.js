var getCocktail = document.querySelector("#cocktail-generate-btn");
var makeCocktail = document.querySelector("#cocktail-make-btn");
var getQuestion = document.querySelector("#get-question-btn");
var drinkDisplay = document.querySelector("#drink-name");
var generateDrink = document.querySelector("#generate-drink");
var drinkInfo = document.querySelector("#drink-info");
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
function displayDrink() {
  // getCocktail.style.display = "none";
  // generateDrink.style.display = "none";
  // categorySection.style.display = "none";
  // questionSection.style.display = "none";
  // drinkInfo.style.display = "inline";
};
// This function is for the -Get Me Drunk- button that will display both the -New Cocktail- and -Get Trivia- buttons on a delay so the cocktail has time to load in
setTimeout(function displayButton() {
  newCocktail.style.display = "inline";
  getTrivia.style.display = "inline";
}, 1100);
// This function is for the -New Cocktail- button that resets the -Drink Info- and then invokes the getApi()nfunction again to get new -Drink Info-
function getNewCocktail() {
  drinkDisplay.textContent = "";
  recipeList.textContent = "";
  getApi();
};
function getApi() {
  cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  fetch(cocktailUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks[0].strDrink);
      randDrink = data.drinks[0].idDrink;
      console.log("this is your random drink: " + randDrink);
      for (var i = 0; i < 1; i++) {
        drinkDisplay.textContent = data.drinks[0].strDrink;
      }
      getrecipeApi();
    });
};
function getrecipeApi() {
  console.log(cocktailUrl);
  fetch(cocktailUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      for (let i = 1; i <= 15; i++) {
        var drinkStr = "";

        var measure = "strMeasure" + i;
        if (data.drinks[0][measure]) {
          drinkStr = data.drinks[0][measure];
        }

        var ingredient = "strIngredient" + i;
        if (data.drinks[0][ingredient]) {
          drinkStr = drinkStr + " " + data.drinks[0][ingredient];
        }

        if (data.drinks[0][measure] && data.drinks[0][ingredient]) {
          var listItem = document.createElement('li');
          listItem.textContent = drinkStr;
          recipeList.appendChild(listItem);
        }
      };

    });
};
getCocktail.addEventListener('click', getApi);