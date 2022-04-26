var getCocktail = document.querySelector("#cocktail-generate-btn");
var makeCocktail = document.querySelector("#cocktail-make-btn");
var getQuestion = document.querySelector("#get-question-btn");
var drinkDisplay = document.querySelector("#drink-name");
var generateDrink = document.querySelector("#generate-drink");
var drinkInfo = document.querySelector("#drink-info");



for (var i = 0; i < 15; i++) {
    // INGREDIENTS
    strIng

    // MEASUREMENTS
    strMsr

    // INSTRUCTIONS
    strInst
}



function getRecipeApi() {
    var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    fetch(cocktailUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.drinks[0].strDrink);
            for (var i = 0; i < 1; i++) {
                var listItem = document.createElement('h2');

                listItem.textContent = data.drinks[0].strDrink;
                console.log(data);

                drinkDisplay.appendChild(listItem);


                if (ingredient1) {
                    appendChild
                }
            }
        });

}


for (i=1; i < 15; i++) {
    console.log(data.drinks[0].strIngredient1);
}
console.log(data);