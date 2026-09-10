// STEP 1: Print text to the browser console is string ""

console.log("Hello World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Elina";
const favoriteAnimal ="highland baby cattle";

// Print the variables to the console

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

// STEP 3: User interaction

// Display a pop-up message

alert("Welcome to beautiful website");

// Ask the user for their name

const visitorName = prompt("What is your name? ");

// Print the user's answer

console.log(visitorName);
console.log("Hello " + visitorName + "! Welcome to javascript");

// Ask the user for their favorite animal

const visitorfavoriteAnimal = prompt("What is your favorite animal? ");

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorfavoriteAnimal + ".");

// console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
if (visitorfavoriteAnimal == "highland baby cattle")
    {console.log("Great choice! That's my favorite animal too!");} 
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?
else if (visitorfavoriteAnimal !== "highland baby cattle")
{console.log("Nice! Your favorite animal is " + visitorfavoriteAnimal);}
// const visitorFavoriteAnimal = prompt("What is your favorite animal?");

// STEP 4: Conditionals

const visitorAge = prompt("What is your age? ");

if (visitorAge >=18) {
    console.log("You are an adult. ");
} 
else {
    console.log("You are under 18. ");
}

// STEP 5: Functions

function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("John");
greetUser(visitorName);

// STEP 6: Button click

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert("Hurrayyyy it works!");
});