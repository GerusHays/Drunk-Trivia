//Getting all elements from doccument
var getCocktail = document.querySelector("#cocktail-generate-btn");
var makeCocktail = document.querySelector("#cocktail-make-btn");
var getQuestion = document.querySelector("#get-question-btn");
var drinkDisplay = document.querySelector("#drink-name");
var generateDrink = document.querySelector("#generate-drink");
var drinkInfo = document.querySelector("#drink-info");
var vehicleQuestionButton = document.querySelector("#category-1-btn")
var recipeList = document.querySelector("#recipe-list");
var categorySection = document.querySelector("#category-section");
var questionSection = document.querySelector("#question-section");
var cocktailInstructions = document.querySelector('#instructions');
var drinkImg = document.querySelector('#cocktail-photo');

var cocktailUrl;
var randDrink;
var currentDrink;


// This function is for the -Get Me Drunk- button and the -Back to Drink- buttons that will make the -generate cocktail btn- -generate drink statement- -category section- -question section- disapear and will then display the randomly selected cocktail
function displayDrink() {
  getCocktail.style.display = "none";
  generateDrink.style.display = "none";
  categorySection.style.display = "none";
  questionSection.style.display = "none";
  drinkInfo.style.display = "inline";
};

function getNewRecipe() {
  drinkDisplay.textContent = "";
  recipeList.textContent = "";
  cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  fetch(cocktailUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks[0].strDrink);
      currentDrink = data;
      randDrink = data.drinks[0].idDrink;
      console.log("this is your random drink: " + randDrink);
      for (var i = 0; i < 1; i++) {
        drinkDisplay.textContent = data.drinks[0].strDrink;
      }
      getrecipeApi();
      getInstruction();
      getImage();
    });
};


function getrecipeApi() {
  for (let i = 1; i <= 15; i++) {
    //init the next recipie ingredient string
    var drinkStr = "";
    //concatenate for getting ingredients
    var measure = "strMeasure" + i;
    //loop to add all ingredents to ol
    if (currentDrink.drinks[0][measure]) {
      drinkStr = currentDrink.drinks[0][measure];
    }

    var ingredient = "strIngredient" + i;
    if (currentDrink.drinks[0][ingredient]) {
      drinkStr = drinkStr + " " + currentDrink.drinks[0][ingredient];
    }

    if (currentDrink.drinks[0][measure] && currentDrink.drinks[0][ingredient]) {
      var listItem = document.createElement('li');
      listItem.textContent = drinkStr;
      recipeList.appendChild(listItem);
    }
  };
};

function getInstruction() {
  cocktailInstructions.textContent = currentDrink.drinks[0].strInstructions;
}

function getImage() {
  drinkImg.setAttribute("src", currentDrink.drinks[0].strDrinkThumb);
}

function saveDrink() {
  
}
getNewRecipe();

//getCocktail.addEventListener('click', getApi);