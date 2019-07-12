$(document).ready(function () {
	var heroes = ["ironman","captain america","spider-man","black widow","hulk","thor","hawkeye"];

	// Add buttons for original heroes array
	function renderButtons() {
		$("#hero-buttons").empty();
		for (i = 0; i < heroes.length; i++) {
			$("#hero-buttons").append("<button class='btn btn-danger' data-hero='" + heroes[i] + "'>" + heroes[i] + "</button>");
		}
	}

	renderButtons();

	// Adding a button for hero entered
	$("#add-hero").on("click", function () {
		event.preventDefault();
		var hero = $("#hero-input").val().trim();
		heroes.push(hero);
		renderButtons();
		return;
	});


	// Getting gifs from api... onto html
	$(document).on("click", "button", function () {
		var hero = $(this).attr("data-hero");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
			hero + "&api_key=69FLvA4mKbmaT3UoJmA0ojDGddHS5Wyy"

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function (response) {
			var results = response.data;
      $("#heroes").empty();
			for (var i = 0; i < results.length - 20; i++) {
				var heroDiv = $("<div>");
				var p = $("<p>").text("Rating: " + results[i].rating);
				var heroImg = $("<img>");

				heroImg.attr("src", results[i].images.original_still.url);
				heroImg.attr("data-still", results[i].images.original_still.url);
				heroImg.attr("data-animate", results[i].images.original.url);
				heroImg.attr("data-state", "still");
				heroImg.attr("class", "gif");
				heroDiv.append(p);
				heroDiv.append(heroImg);
				$("#heroes").append(heroDiv);
			}
		});
	});

	function changeState(){
    console.log("change state executed")
		var state = $(this).attr("data-state");
		var animateImage = $(this).attr("data-animate");
		var stillImage = $(this).attr("data-still");

		if (state == "still") {
			$(this).attr("src", animateImage);
      $(this).attr("data-state", "animate");
      console.log("still switch to animate")
		}

		else if (state == "animate") {
			$(this).attr("src", stillImage);
      $(this).attr("data-state", "still");
      console.log("animate to still")
		}
	}



	// $(document).on("click", "#input", displayImg);
  $(document).on("click", ".gif", changeState);


});