// Create a new index140.js file
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
// Filter the list using the filter method and remove the following mutants:
// Magneto
// Iceman
// Gambit
// Show the filtered list as output


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

const Mod_Mutants = mutants.filter(function(elem){
        if (elem == "Magneto" || elem == "Iceman" || elem == "Gambit") {
            return;
        }
        else{
        return elem
        }
    // if(elem != "Magneto" || elem != "Iceman" || elem != "Gambit")
    //     return elem;
})

console.log(Mod_Mutants)