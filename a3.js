<script type="text/javascript">
console.log("Welcome dialog")
var preferredName = prompt ("Hello Friend! What's your prefered name?");
alert("Welcome, " + preferredName + "!");
var thanksEle = document.getElementsByTagName('center')[2];
thanksEle.innerText += " " + preferredName;
console.log("Start guessing game.");
var guessPet = prompt("How many pets do I have?", "");
if (guessPet == 2) {
alert("Yay, you paid attention!");
} else {
alert("Did you even read my web site? I have two pets!");
}

console.log("Presenting question 2.");
var baGuess = prompt("What subject did I major in at university?", "");
if (baGuess.toLowerCase == "english literature" || "english" || "literature") {
alert("Well Done!");
} else { alert(":/ I studied English Literature....");
}
console.log("Question III!");
var goalGuess = prompt("What is my life goal?");
if (goalGuess.toLowerCase == "have my pets living in luxury") {
alert("Woop!");
} else {alert("No! I want my pets to be able to live in the lap of luxury")
}
</script>
