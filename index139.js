// Create a new index139.js file
// Define a numbers array with values between 1000 and 1
// Iterate over the numbers array and filter the following values creating new arrays for each type:
// Even numbers
// Odd numbers
// Show the last 10 odd numbers as output
// Show the first 20 even numbers as output

let numbers = [];

for (let index = 0; index < 1000; index++) {
    numbers[index] =1000 - index;
}

const evenNums = numbers.filter(function (number){
    return (number % 2) == 0;
})

const oddNums = numbers.filter(function (number){
    return (number % 2) == 1;
})
console.log("Even nums");
for(i=-1;i >= -10;i--) {
    
console.log(evenNums[evenNums.length + i])
}
console.log("End of evens");
console.log("Odd nums");
for(i=0;i <= 20 ; i++) {
    
    console.log(oddNums[i]);
    }