$( document ).ready(function() {
    console.log( "ready!" );
});



var wins = 0
var loses = 0
var random;
var previous = 0 


var setupGame = function(){
    $(".crystals").empty();

    var images = [
        "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c4_Asset%202%402x.png",
        "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffec2d6ad40001720f22_Asset%205%402x.png",
        "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8d073baee9140001946903_Asset%206%402x.png",
        "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c5_Asset%201%402x.png"]
    

    random = Math.floor(Math.random()* 102+19)

    $("#answer").html("Goal: " + random + "<br>");




    for(var i = 0; i<4; i++){
    var crystalNums = Math.floor(Math.random()* 12) + 1
    
    

    var crystal = $("<div>")
       crystal.attr({
           "class": 'crystal',
           "crystalvalue":crystalNums
       });
       crystal.css({
           "background-image":"url('"+ (images[i]) + "')",
           "background-size":"cover"
       })


    $(".crystals").append(crystal);
}
$("#crystaltotal").html(previous);
}

setupGame();

$(document).on("click", ".crystal" ,function(){
    var num = parseInt($(this).attr('crystalvalue'));
    previous += num;

    $("#crystaltotal").html(previous);

    console.log(previous)

    if(previous === random){
        wins++;
        $("#win").html("Wins: " + wins + "<br>")
        previous = 0;
        setupGame();
    }
    else if (previous > random){
        loses++;
        $("#lose").html("Loses: " + loses)
        previous = 0;
        setupGame();
    }



});






































// var random = Math.floor(Math.random()* 102+19)
//  console.log(random);
//  $("#answer").html(random);



// $(crystal1).on("click", function(){
//    var crystal1Num = Math.floor(Math.random()* 12) + 1
//     console.log(crystal1Num);
//     $("#crystalresult").html(crystal1Num);

// })

// $(crystal2).on("click", function(){
//     var crystal2Num = Math.floor(Math.random()* 12) + 1
//      console.log(crystal2Num);
//      $("#crystalresult").html(crystal2Num);
     

 
// })

// $(crystal3).on("click", function(){
//    var crystal3Num = Math.floor(Math.random()* 12) + 1
//     console.log(crystal3Num);

//     $("#crystalresult").html(crystal3Num);

// })

// $(crystal4).on("click", function(){
//     var crystal4Num = Math.floor(Math.random()* 12) + 1
//      console.log(crystal4Num);
//      $("#crystalresult").html(crystal4Num);
//  })











 
