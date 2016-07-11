var preferredName;
var score = 0

function getName() {
    while (preferredName == null || preferredName == "") {
        preferredName = prompt("Hello Friend! What's your prefered name?");
    }
    console.log(preferredName);
    alert("Welcome, " + preferredName + "!")
}

function firstQuestion() {
    var guessPet = prompt("How many pets do I have?", "");
    if (guessPet == 2) {
        document.getElementById("firstQ").innerHTML = "Your answer of " + guessPet + " was correct!";
        var colorfirstQ = document.getElementById("firstQ");
        colorfirstQ.className = "correctColor";
        score++;
    } else if (guessPet > 2) {
        document.getElementById('firstQ').innerHTML = "Your answer of " + guessPet + " was too high, and thus incorrect!";
        var colorfirstQ = document.getElementById("firstQ");
        colorfirstQ.className = "inCorrectColor"
    } else {
        document.getElementById("firstQ").innerHTML = "Your answer of " + guessPet + " was too low, and thus incorrect!";
        var colorfirstQ = document.getElementById("firstQ");
        colorfirstQ.className = "inCorrectColor"
    }
}

function secondthirdQuestion(promptAnswer, rightAnswer, id) {
    var questionGuess = prompt(promptAnswer)
    if (questionGuess.toLowerCase() == rightAnswer) {
        document.getElementById(id).innerHTML = "Your answer of " + questionGuess + " was correct!";
        var colorfirstQ = document.getElementById(id);
        colorfirstQ.className = "correctColor";
        score++;
    } else {
        document.getElementById(id).innerHTML = "Your answer of " + questionGuess + " was incorrect!";
        var colorfirstQ = document.getElementById(id);
        colorfirstQ.className = "inCorrectColor"
    }
}

function fourthQuestion() {
    var count = prompt("How many alert boxes do you think I can create?", "");
    if (isNaN(count)) {
        count = prompt("That is not a number, silly! Try again!", "");
    }
    if (count == 0) {
        document.getElementById("fourthQ").innerHTML = "Well, don't worry, I didn't want to play your game ANYWAY";
        var colorfirstQ = document.getElementById("fourthQ");
        colorfirstQ.className = "inCorrectColor"
        score++
    } else if (count => 3) {
        document.getElementById("fourthQ").innerHTML = "Really?! " + count + " is way too much. I refuse to do this. I am not your puppet";
        var colorfirstQ = document.getElementById("fourthQ");
        colorfirstQ.className = "inCorrectColor"
    } else {
        document.getElementById("fourthQ").innerHTML = "Fiiiiiine."
        var colorfirstQ = document.getElementById("fourthQ");
        colorfirstQ.className = "inCorrectColor"
    }

}

function biggestFunction() {
    if (preferredName == null) {
        preferredName = getName();
    }

    if (preferredName != "") {
        firstQuestion();
    } else {
        getName();
    }

    secondthirdQuestion("What subject did I major in at university?", "english literature", "secondQ");

    secondthirdQuestion("What is my life goal?", "have my pets living in luxury", "thirdQ");

    fourthQuestion();

    document.getElementById("score").innerHTML = "You got " + score + " right!"
    if (score >= 2) {
        var win = document.createElement("IMG");
        win.setAttribute("src", "codefellows1.jpg");
        win.setAttribute("width", "304");
        win.setAttribute("width", "228");
        win.setAttribute("alt", "Serena Williams");
        document.body.appendChild(win);
    } else {
        var lose = document.createElement("IMG");
        lose.setAttribute("src", "codefellows2.jpg");
        lose.setAttribute("width", "304");
        lose.setAttribute("width", "228");
        lose.setAttribute("alt", "You lost!");
        document.body.appendChild(lose);
    }

}
