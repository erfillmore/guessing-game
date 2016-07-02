console.log("Welcome dialog")
var preferredName = prompt("Hello Friend! What's your prefered name?");
alert("Welcome, " + preferredName + "!");
var thanksEle = document.getElementsByTagName('center')[2];
thanksEle.innerText += " " + preferredName;
console.log("Start guessing game.");
var guessPet = prompt("How many pets do I have?", "");
if (guessPet == 2) {
    alert("Yay, you paid attention!");
} else if (guessPet > 2) {
    alert("Your number is too high! I have two pets!");
} else {
    alert("Your guess is too low! I have two pets!");
}

console.log("Presenting question 2.");
var baGuess = "";
while (baGuess === "") {
    baGuess = prompt("What subject did I major in at university?", "");
    if (baGuess.toLowerCase() == "english literature" || baGuess.toLowerCase() == "english" || baGuess.toLowerCase() == "literature") {
        alert("Well Done!");
    } else {
        alert(":/ I studied English Literature....");
    }
}
console.log("Question III!");
var goalGuess = prompt("What is my life goal?");
if (goalGuess.toLowerCase() == "have my pets living in luxury" || baGuess.toLowerCase() == "pets in luxury" || baGuess.toLowerCase() == "luxurious life for pets") {
    alert("Woop!");
} else {
    alert("No! I want my pets to be able to live in the lap of luxury");
}
console.log("Last question");


var count = prompt("How many alert boxes do you think I can create?", "");
if (isNaN(count)) {
  count = prompt("That is not a number, silly! Try again!", "");
}
if (count == 0 ) {
    alert("Well, don't worry, I didn't want to play your game ANYWAY");
} else if (count => 3) {
    alert("Really?! " + count + " is way too much. I refuse to do this. I am not your puppet");
} else {alert("Fiiiiiine.")}

for (count; count < 0; count++) {
    alert("Count = " + count);
}
