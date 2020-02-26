// Create a new index142.js
// Define a firstPerson variable
// Define a secondPerson variable
// Assign a new array to each defined variable with the following structure
// The first item is the person first name (string)
// The second item is the person last name (string)
// The third item is the person address (string)
// The fourth item is the person age (number)
// Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
// Compare the strings result to see if they are the same person (if they are they should match)
// Try using the same person (with different variables) and also try different people


var firstPerson = ["Bader", "Alsaleh", "3 Leam Rd", "30", ];
var secondPerson = ["Herb", "Harbey", "downtown nanaimo", "32"];

var first_red = firstPerson.reduce(function(acc,curr){
    return acc+curr;
})

var second_red = secondPerson.reduce(function(acc,curr){
    return acc+curr;
})
console.log(first_red);
console.log(second_red);
