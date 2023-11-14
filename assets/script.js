//I created this function to getElementById and fetch the data from the API

document.getElementById("generateButton").addEventListener("click", function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE NOT OK");
        }
      })
      .then(function (data) {
        console.log(data);
        displayCocktail(data);
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
      });
  });

  //I wrote this block of code to display the data on the page 
  function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");
  