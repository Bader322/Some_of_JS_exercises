// Exercise 145
// Create a new index145.js
// Copy the user object from the previous exercise with the username and password properties and values
// If the user object username is batman and password is Alfred1960KPO! then show the following output:
// Welcome back batman!!
// Else show the following output:
// Sorry, you can't enter the Batcave, try again..
// Use the user properties to create the conditions


let user  = { 
    username: "batman",
    password: "Alfred"
};

if( user.username === "batman" && user.password === 'Alfred'){
    console.log("Welcome back batman!!");

}
else {
    console.log("wrong");
    return;
};