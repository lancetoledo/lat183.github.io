   //create function to add values during submit button assigning value to each trait
    
    
    
   function findPromptWeight(prompts, group) {
    var weight = 0;

    for (var i = 0; i < prompts.length; i++) {
        if (prompts[i].class === group) {
            weight = prompts[i].weight;
        }
    }

    return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
    var weight = 0;

    for (var i = 0; i < values.length; i++) {
        if (values[i].value === value) {
            weight = values[i].weight;
        }
    }
    return weight;
}
