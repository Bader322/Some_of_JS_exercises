// Exercise 148
// Create a new index148.js
// Define a superhero variable and assign a literal object
// Create the following properties and values to the superhero object:
// property: name, value: Batman
// property: secretName, value: Bruce
// property: sidekick, value: ['Robin', 'Alfred', 'Gordon']
// property: strength, value: 70
// Show each superhero property as output
// Show the superhero speed property
// Now add the speed property to the superhero object using dynamic property and assign the value 80
// Show the superhero speed property again


var superhero = {
    name: "Batman",
    secretName: "Bruce",
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70,
}
console.log(superhero)

superhero.sidekick.push("Erica")

console.log(superhero)





// console.log("Printing original");
// console.log(superhero);
// superhero.speed = 100;
// console.log(superhero.speed);
// superhero.speed = 2;
// console.log(superhero.speed);
// console.log(superhero);
