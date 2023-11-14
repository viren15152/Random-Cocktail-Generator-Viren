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

    //This section will display the data on the page 
  
    function displayCocktail(data) {
        const cocktail = data.drinks[0];
        const cocktailDiv = document.getElementById("cocktail");
      
        //This section will clear previous content from the page 
        cocktailDiv.innerHTML = "";
      
        const cocktailName = cocktail.strDrink;
        const heading = document.createElement("h1");
        heading.innerHTML = cocktailName;
        cocktailDiv.appendChild(heading);
      
        const cocktailImg = document.createElement("img");
        cocktailImg.src = cocktail.strDrinkThumb;
        cocktailDiv.appendChild(cocktailImg);
        document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
      
        const cocktailIngredients = document.createElement("ul");
        cocktailDiv.appendChild(cocktailIngredients);
      
        // This section will loop through ingredients and measurements
        for (let i = 1; i <= 15; i++) {
          const ingredient = cocktail[`strIngredient${i}`];
          const measurement = cocktail[`strMeasure${i}`];
      
          if (ingredient) {
            const listItem = document.createElement("li");
            listItem.innerHTML = measurement ? `${measurement} ${ingredient}` : ingredient;
            cocktailIngredients.appendChild(listItem);
          } else {
            break; // This will exit the loop if no more ingredients
          }
        }
      }

  