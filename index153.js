// Exercise 153
// Create a new index153.js
// Define a arithmetic variable and assing a literal value with the following methods:
// add
// subtract
// multiply
// divide
// remainder
// Each method accepts 2 numeric parameters and shows the operation result
// So, add will add both numbers together and log the result (the rest of the methods work in the same way)
// Show an error if the parameters values are not numbers
// Call the methods:
// add(2, 10)
// subtract(10, 5)
// multiply(3, 100)
// divide(40, 2)
// remainder(20, 2)

let calc = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    },
    remainder: function(a,b){
        return a%b
    }

}

console.log("add: "+calc.add(2,4));
console.log("subtract: "+calc.subtract(10,4));
console.log("multiply: "+calc.multiply(10,4));
console.log("divide: "+calc.divide(10,4));
console.log("remainder: "+calc.remainder(10,4));