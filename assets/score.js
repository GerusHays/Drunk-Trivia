var scoreString = document.querySelector("#score-holder");
console.log(scoreString);
scoreString.textContent = "You got a final score of " + localStorage.getItem("finalScore") + " points and took " + localStorage.getItem("finalDrinks") + " drinks. In the " + localStorage.getItem("category") + " category!";