// Exercise 149
// Create a new index149.js
// Define a user variable and assign a literal object as value
// This user will have your personal data
// Add at least 10 properties and values to describe you
// Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)
// Define at least 5 properties when we initialize the user object:
// const myObject = {
//   property: value,
//   property: value,
// }
// Define the rest of the user properties using the dynamic way
// const myObject = {
//   property: value,
//   property: value,
// }

// myObject.newProperty = value;
// myObject.newProperty = value;
// myObject.newProperty = value;
// Show the user object as output

const user = {
    username: 'bader',
    password: '1234',
    age: 30,
    DOB: new Date(),
    beats: "Heart"
}

user.username = "klb";

user.married = false;

console.log(user)