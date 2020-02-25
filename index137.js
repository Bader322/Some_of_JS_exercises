// Create a new index137.js file
// Define a numbers array with values between 1 and 1000
// Iterate over each numbers item using map and increment the value in 10
// If value is 1 then it should be 11
// If value is 2 then it should be 12
// and so on..
// Show the following output for each element:
// index: 1, original number: 1, incremented value: 11




var number = []

for (let index = 0; index < 1000; index++) {
    number[index] = index+1;
    
}

const incValuesBy10 = number.map(function(num){
    return num += 10;



});
// console.dir(incValuesBy10, {'maxArrayLength': null});

console.log(" index: ") 



