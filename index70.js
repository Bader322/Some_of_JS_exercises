// Create a new index70.js file
// Use while structure to only sum odd numbers between 0 and 1000
// Show the partial result as output too
'use strict';
'use warnings';

var anym_function = function(Odd_OR_Even) {
    var odd_sum = 0;



    while(Odd_OR_Even < 13) {


        if((Odd_OR_Even % 2) == 1) {
        odd_sum += Odd_OR_Even;
        Odd_OR_Even++;
        }
        else {
            Odd_OR_Even++;
            continue;
        }
        
    }
    return odd_sum;

}


console.log(`Added sum of odds =  ${anym_function(9)}`);


