$(document).ready(() => {

    $("#submit").on("click", function(event) {
		event.preventDefault();
		var searched = document.getElementById("searchedWord").value;
		console.log(searched);

		var entreeQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searched;

		$.ajax({
			url: entreeQueryURL,
			method: "GET"
		}).then(function(response) {
			console.log(response);
			})

		})


});

