// Create a new index75.js file
// Write a program that will show the first 10 Fibonacci sequence numbers

var n =10;
var f =0;
var f1 = -1;
var f2=1;
while(f < n){
f = f1+f2;
f1=f2;
f2 = f;
console.log(f);
}