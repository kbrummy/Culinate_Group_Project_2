
$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".modal").modal();
});

var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

$.ajax({
    url: entreeQueryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    $("#entreeName").text(response.meals[0].strMeal);
    $("#entreeImage").attr("src", response.meals[0].strMealThumb);
    $("#entreeRecipe").text(response.meals[0].strInstructions);
    $("#entreeLink").attr("href", response.meals[0].strYoutube);
    
});