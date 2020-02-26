// Exercise 147
// Create a new index147.js
// Copy and paste the code from the previous exercise
// Refactor the code to match the requirements
// The shouldOpenBatCave function not longer accepts two parameters
// Now the shouldOpenBatCave function only accepts a user parameter
// Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
// The rest of the code should still work the same way and show the proper output

let user  = { 
    username: "batman",
    password: "Alfred"
}
function shouldOpenBatCave(usr) {

    if (usr == "batman") { 
        console.log("Welcome back Bat")
        return true;
    }
    else {
        console.log("Sorry not right")
        return false;
    }
}
shouldOpenBatCave(user.username);