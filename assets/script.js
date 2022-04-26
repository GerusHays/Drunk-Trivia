// www.thecocktaildb.com/api/json/v1/1/random.php
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

var getCocktail = document.querySelector("#cocktail-generate-btn");
var makeCocktail = document.querySelector("#cocktail-make-btn");
var getQuestion = document.querySelector("#get-question-btn")
var drinkDisplay = document.querySelector("#drink-name")
var generateDrink = document.querySelector("#generate-drink")
var drinkInfo = document.querySelector("#drink-info")

// This function will make the generate cocktail btn / generate drink statement disapear and will then display the randomly selected cocktail
function displayDrink () {
  getCocktail.style.display = "none";
  generateDrink.style.display = "none";
  drinkInfo.style.display = "inline";
}
// This function will display both the make cocktail and get question on a delay so the cocktail has time to load in
setTimeout( function displayButton () {
 makeCocktail.style.display = "inline";
 getQuestion.style.display = "inline";
}, 1100);

function getApi() { 
    var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    fetch(cocktailUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
          console.log(data.drinks[0].strDrink);
        for (var i = 0; i < 1; i++) {   
          var listItem = document.createElement('h2');
  
          listItem.textContent = data.drinks[0].strDrink;
  
          drinkDisplay.appendChild(listItem);
        }
      });
    
}
function getrecipeApi() {
    var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    fetch(cocktailUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
          console.log(data.drinks[0].strDrink);
        for (var i = 0; i < 1; i++) {   
          var listItem = document.createElement('h2');
  
          listItem.textContent = data.drinks[0].strDrink;
  
          drinkDisplay.appendChild(listItem);
        }
      });
    
}
getCocktail.addEventListener('click', getApi);

