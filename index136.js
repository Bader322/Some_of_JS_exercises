// Create a new index136.js file
// Define a mutants array and assign the following values
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Iterate over each mutants item using forEach
// The objective is to create a string value with Iceman, Logan and Phoenix
// To create the string you need to get the names while iterating the mutants array
// Once the iteration is over show the generated string with the selected mutants names


var mutants = ['Professor X','Cyclops', 'Iceman', 'Angel',
                'Magneto', 'Beast','Phoenix','Logan','Gambit'];
var genstr = "";
                
mutants.forEach(function(el,index){
                    console.log(el, index);
                    
                    if(el == "Iceman" || el == "Phoenix" || el == "Logan" ){
                        genstr += el + " ";
                    }
                });
                
                console.log(genstr);
// position 2, 7, 6

