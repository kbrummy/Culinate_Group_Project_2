$(document).ready(() => {
// Searches for recipes based on input
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var searched = document.getElementById("searchedWord").value;
        console.log(searched);

        var entreeQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searched;

        $.ajax({
            url: entreeQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
                var recipeColumn = $("<div>");
                var recipeCard = $("<div>").addClass("card");
                var content = $("<div>").addClass("card-content");
                var entreeName = $("<h5>").text(response.meals[0].strMeal);
                var entreeImage = $("<img>").attr("src", response.meals[0].strMealThumb).addClass("entreeImage");
                var entreeRecipe = $("<p>").text(response.meals[0].strInstructions);
                var saveButton = $("<button>").text("Save Recipe").addClass("saveButton");
    
                content.append(entreeName, entreeImage, entreeRecipe, saveButton);
                recipeCard.append(content);
                recipeColumn.append(recipeCard);
                $("#recipeCards").append(recipeColumn);

                $.post("/feed", recipeCard)
                }).then(function (response) {
                    console.log(response);
                        var recipeColumn = $("<div>");
                        var recipeCard = $("<div>").addClass("card");
                        var content = $("<div>").addClass("card-content");
                        var entreeName = $("<h5>").text(response.meals[0].strMeal);
                        var entreeImage = $("<img>").attr("src", response.meals[0].strMealThumb).addClass("entreeImage");
                        var entreeRecipe = $("<p>").text(response.meals[0].strInstructions);
                        var saveButton = $("<button>").text("Save Recipe").addClass("saveButton");
            
                        content.append(entreeName, entreeImage, entreeRecipe, saveButton);
                        recipeCard.append(content);
                        recipeColumn.append(recipeCard);
                        $("#recipeCards").append(recipeColumn);

    }) 
})});

$("#saveButton").on("click", function(event) {
    event.preventDefault();
})
