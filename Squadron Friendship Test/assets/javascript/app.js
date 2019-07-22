$(document).ready(function () {

//Created 2 API functions- Yelp and Giphy
  //on.("click") function that calls the API function)
  //Created a variable for userLocation to pull the user location input in the click function
    //var userLocation is pulled from the click function and placed into the API function with the Yelp URL and API key

    $(".yelpLogo").hide();

  // $("#yelpArticles").hide();

  $("#run-search").on("click", function () {
    event.preventDefault();
    $("#yelpArticles").empty();
    var userLocation = $(".location-input").eq(0).val();

    $("#yelpArticles").show();
    yelpQueryURL(userLocation);
    $("#beerPic").hide();
    $(".yelpLogo").show();
  });

//Yelp doesn't allow API calls from front end
  //I was able to pull the yelp JSON response through a proxy (cors-anywhere heroku)
  //I sent an API request to cors-anywhere heroku with the yelp link behind it, 
  //and cors heroku requests the yelp JSON response, which returns the JSON response from yelp to our page
//Yelp API requires the user to pass their API through headers (standard way of using an API)
  //In the ajax call, I used data to build the URL without having to add that information to the url string

  function yelpQueryURL(userLocation) {
    var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
    var yelpKey =
      "Mkvzgj8Vt_NhJJHmP7s5yNOYpOB5P6NgLK6ev6O8HyrhXvhn9nisG3WvUovYSz1PHe3cqnhK8LUThY4AoXJ1O17QoBlD-S4IlovdzhUX2BB0j5RCO3kp4w-R1WknXXYx";

    $.ajax({
      type: "GET",
      url: url,
      headers: {
        Authorization: "Bearer " + yelpKey
      },
      data: {
        term: "brewery",
        location: userLocation
      }
    }).then(function (response) { 

      // looping through all of the yelp businesses to display the name, address, and image
      for (var i = 0; i < 12; i++) {

        $("#yelpArticles").append(
          `<div class="card m-5" style="width: 18rem;" >
               <img id="yelp-image${i}" class="card-img-top img-fluid">
               <div class="card-body">
               <p id="yelpResult${i}"></p>
               <p id="yelpAddress${i}"></p>
               <p id="yelpRating${i}"></p>
               </div>
             </div>`)


        var name = response.businesses[i].name;
        $("#yelpResult" + [i]).text(name);

        var rating = response.businesses[i].rating;
        $("#yelpRating" + [i]).text("Rating: " + rating);

        var yelpImage = $(`#yelp-image${i}`);
        yelpImage.attr("src", response.businesses[i].image_url);
        yelpImage.addClass("yelp-images");

        var address = response.businesses[i].location.address1;
        var city = response.businesses[i].location.city;
        var state = response.businesses[i].location.state;
        var zip = response.businesses[i].location.zip_code;

        $("#yelpAddress" + [i]).text(
          address + ", " + city + ", " + state + " " + zip
        );

      }
    });
  }
  // Beers: Light beers, Sours, Ciders, Porters, IPA


  //we needed specific images
//var id = ["lz4APvJRdLxLBwZOG9", "BcP32J8pMXAzqEkGDj", "ycDclgXI40MGcpA5pK", "2WHcT6O69wS3vouGVP", "l1J9Ox4goQckiAb1m"]

});
