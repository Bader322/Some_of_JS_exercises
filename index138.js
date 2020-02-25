// Create a new index138.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Iterate over the mutants array
// Add <3 symbol before the mutant name if the iterated name is one of the following:
// Professor X
// Logan
// Phoenix
// Gambit
// Show the original mutant array items as output
// Show the updated mutant array items as output


let mutants = ["Professor X",
                "Cyclops",
                "Iceman",
                "Angel",
                "Magneto",
                "Beast",
                "Phoenix",
                "Logan",
                "Gambit"
] 



const mutant_heart = mutants.map(function (elem) {
    
    
    if(elem == "Professor X" || elem == "Logan" || elem == "Phoenix" || elem == "Gambit" ) {
        elem = "<3 " + elem;
    }
    return elem;
});


console.log(mutant_heart);