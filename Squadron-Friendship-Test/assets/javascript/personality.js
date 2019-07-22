//variable for quiz stored in an array where each question is its own object 
var prompts = [{
        prompt: '1. I see myself as someone who is reserved',
        trait: "Extraversion",
        class: 'group0',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '2. I see myself as someone who is generally trusting',
        trait: "Agreeableness",
        class: 'group1',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '3. I see myself as someone who tends to be lazy',
        trait: "Conscientiousness",
        class: 'group2',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '4. I see myself as someone whois relaxed, handles stress well',
        trait: "Neuroticism",
        class: 'group3',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '5. I see myself as someone who has few artistic interests',
        trait: "Openness to Experience",
        class: 'group4',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '6. I see myself as someone who is outgoing, sociable',
        trait: "Extraversion",
        class: 'group5',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '7. I see myself as someone who tends to find fault with others',
        trait: "Agreeableness",
        class: 'group6',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '8. I see myself as someone who does a thorough job',
        trait: "Conscientiousness",
        class: 'group7',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '9. I see myself as someone who gets nervous easily',
        trait: "Neuroticism",
        class: 'group8',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '10. I see myself as someone who has an active imagination',
        trait: "Openness to Experience",
        class: 'group9',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    }
]

// For each prompt, create a p tag to hold questions
function createPromptItems() {
    for (var i = 0; i < prompts.length; i++) {
        var inputlVal = prompts[i].prompt;
        var promptsVals = prompts[0].prompt_values;
        var promptsDiv = $(`<div class="questionCon" id="div${i}"></div>`);
        promptsDiv.append(`<p>${inputlVal}</p>`);
        $("#quiz").append(promptsDiv);

        //for each option create a radio button that groups questions together
        for (var x = 0; x < promptsVals.length; x++) {
            var radioVal = prompts[i].prompt_values[x].value;
            var radioWeight = prompts[i].prompt_values[x].weight;
            var inputGroup = i;

            promptsDiv.append(
                `<label>
                <input class="form-check-input" name="${inputGroup}" type="radio" value="${radioWeight}">
                <span  value="${radioVal}" name="${inputGroup}">${radioVal}</span>
                </label>`
            );
        }
    }
};
createPromptItems();

// ------------------------------function that stores user answer 
$('#quiz').on('change', '.form-check-input', function () {
    // GET question index out of "name" attribute so we know what question you answered
    const questionIndex = $(this).attr('name');
    // get value out of radio button selected
    const answer = $(this).val();
    // set answer to question's userAnswer property
    prompts[questionIndex].userChoice = parseInt(answer);
});

//---------------------------------------RESPONSE / SUBMISSION LOGIC -------------------//   
//Global variables for response function
var eTotal = 0;
var aTotal = 0;
var cTotal = 0;
var nTotal = 0;
var oTotal = 0;

var lance ="../Squadron-Friendship-Test/assets/images/Lance.gif";
var alex ="../Squadron-Friendship-Test/assets/images/Alex.gif";
var anna ="../Squadron-Friendship-Test/assets/images/Anna.gif";
var jeff ="../Squadron-Friendship-Test/assets/images/Jeff.gif";
var fabio ="../Squadron-Friendship-Test/assets/images/Fabio.gif";
var drew ="../Squadron-Friendship-Test/assets/images/Drew.gif";

var squadronImg ={
    lance,
    alex,
    anna,
    jeff,
    fabio,
    drew,
}



// //Global function for ajax call
// var ajaxGifCall = function (strID) {
//     var queryUrl =
//         "https://api.giphy.com/v1/gifs/" +
//         strID +
//         "?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ";
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     }).then(function (response) {
//         var gifResults = response.data.images.fixed_height.url;
//         var gifImage = $("<img>");
//         gifImage.attr("src", gifResults);
//         gifImage.attr("class", "giffyResult")
//         gifImage.attr("alt", "cheers");
//         $("#resultsP").prepend(gifImage);
//     });
// };

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    $("#quizForm").hide();

    //weight total of each personality trait
    eTotal = prompts[0].userChoice + prompts[5].userChoice;
    aTotal = prompts[1].userChoice + prompts[6].userChoice;
    cTotal = prompts[2].userChoice + prompts[7].userChoice;
    nTotal = prompts[3].userChoice + prompts[8].userChoice;
    oTotal = prompts[4].userChoice + prompts[9].userChoice;

    //array of result totals that can be sorted to find strongest trait -- at last index of 4
    var resultsArr = [eTotal, aTotal, cTotal, nTotal, oTotal];
    var sortedResults = resultsArr.sort(function (a, b) {
        return a - b;
    });
    // default result if all traits are low / less than a weight of 6
    if (sortedResults[4] < 6) {
      
        
        var gifImage = $("<img>");
        gifImage.attr("src", "../Squadron-Friendship-Test/assets/images/Anna.gif");
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "yourFriend");
        $("#resultsP").append(gifImage);
        

        $("#resultsP").prepend(
            `<h1>Your Best Friend would be Anna!</h1>
            <br>
            <p>Based on your results, 
            You aren't strictly one personality type! Everybody loves Anna and she definitely would understand 
            why quizzes aren't your thing.</p>
            <p>Quizzes aren't a way to pick your best friend, be friends with whoever you want to be friends with!</p>
          `
        )
    }
    //results for Extraversion trait as highest weight
    else if (eTotal === sortedResults[4]) {
        var gifImage = $("<img>");
        gifImage.attr("src", "../Squadron-Friendship-Test/assets/images/Jeff.gif");
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "yourFriend");
        $("#resultsP").append(gifImage);
        

        $("#resultsP").prepend(
            `<h1>Your Best Friend would be Jeff!</h1>
            <h4>You Scored ${eTotal} out of 10 on Extraversion Trait!</h4>
            <br>
            <p>It seems like you're a very social person! Jeff has an endless amount of energy which can only be
            matched by yours! You'd probably have great time meeting new people and going to parties together!</p>
          `
        )
    }
    //results for Consciensciousness trait as highest weight
    else if (cTotal === sortedResults[4]) {
        var gifImage = $("<img>");
        gifImage.attr("src", "../Squadron-Friendship-Test/assets/images/Lance.gif");
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "yourFriend");
        $("#resultsP").append(gifImage);
        

        $("#resultsP").prepend(
            `<h1>Your Best Friend would be Lance!</h1>
            <h4>You Scored ${cTotal} out of 10 on Conscientiousness Trait!</h4>
            <br>
            <p>You enjoy structure and seem to be detail oriented! Lance is the man with the plan whenever he has a goal he'll make
            sure it will be accomplished every step of the way.</p>
            <p>You'd be best friends because Lance will never let you down and will always provide your friendship with stability.
          `
        )
    }
    //results for Openness to New Experience trait as highest weight
    else if (oTotal === sortedResults[4]) {
        var gifImage = $("<img>");
        gifImage.attr("src", "../Squadron-Friendship-Test/assets/images/Alex.gif");
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "yourFriend");
        $("#resultsP").append(gifImage);
        

        $("#resultsP").prepend(
            `<h1>Your Best Friend would be Alex!</h1>
            <h4>You Scored ${oTotal} out of 10 on Openness to New Experiences Trait!</h4>
            <br>
            <p>You are very open to new ideas and experiences. You love trying new things, tackling new challenges, 
            and thinking about abstract concepts Alex is the exact same way!</p>
            <p>Alex is open minded and loves trying new things, he's the perfect friend for spontaneous adventures.</p>
          `
        )
    }
    //results for Agreeableness trait as highest weight
    else if (aTotal === sortedResults[4]) {
        var gifImage = $("<img>");
        gifImage.attr("src", "../Squadron-Friendship-Test/assets/images/Drew.gif");
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "yourFriend");
        $("#resultsP").append(gifImage);
        

        $("#resultsP").prepend(
            `<h1>Your Best Friend would be Drew!</h1>
            <h4>You Scored ${aTotal} out of 10 on Agreeableness Trait!</h4>
            <br>
            <p>You are a very empathetic person who cares for others. You enjoy helping and contributing to others' 
            happiness and are always there when someone needs assistance.</p>
            <p>Drew is very observant and very aware of his friends emotions. If he's your best friend than he'll
            do anything to make you feel loved. He'll drive you places you like to eat, he'll be by your side and he'll 
            always be praying for you </p>  `
        )
    }
    //results for Neuroticism trait as highest weight
    else if (nTotal === sortedResults[4]) {
        var gifImage = $("<img>");
        gifImage.attr("src", "../Squadron-Friendship-Test/assets/images/Fabio.gif");
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "yourFriend");
        $("#resultsP").append(gifImage);
        

        $("#resultsP").prepend(
            `<h1>Your Best Friend would be Fabio!</h1>
            <h4>You Scored ${nTotal} out of 10 on Neuroticism Trait!</h4>
            <br>
            <p>You are a sensitive person more inclined to feelings of anxiety but can be warm like a blanket or a hug.
            You love engaging in meaningful conversations among a small circle of friends. 
            They much prefer small social settings, and avoid large, loud, crowded environments.</p>
            <p>With Fabio as your best friend he 100% understands what that's like and will never want you to feel the same
            pain he feels. Fabio's a fixer so you'd love to have him as your best friend.</p>      
          `
        )
    }
});