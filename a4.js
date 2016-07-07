var preferredName;

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
        document.getElementById("firstQ").innerHTML="Your answer of " +guessPet+ " was correct!";
    } else if (guessPet > 2) {
        document.getElementById('firstQ').innerHTML="Your answer of " +guessPet+ " was too high, and thus incorrect!";
    } else {
        document.getElementById("firstQ").innerHTML="Your answer of " +guessPet+ " was too low, and thus incorrect!";
    }
}

function secondQuestion() {
  var baGuess = "";
  while (baGuess === "") {
      baGuess = prompt("What subject did I major in at university?", "");
      if (baGuess.toLowerCase() == "english literature" || baGuess.toLowerCase() == "english" || baGuess.toLowerCase() == "literature") {
          alert("Well Done!");
      } else {
          alert(":/ I studied English Literature....");
      }
  }
}

function thirdQuestion() {
      var goalGuess = prompt("What is my life goal?");
      if (goalGuess.toLowerCase() == "have my pets living in luxury" || goalGuess.toLowerCase() == "pets in luxury" || goalGuess.toLowerCase() == "luxurious life for pets") {
          alert("Woop!");
      } else {
          alert("No! I want my pets to be able to live in the lap of luxury");
      }
}

function fourthQuestion() {
  var count = prompt("How many alert boxes do you think I can create?", "");
  if (isNaN(count)) {
      count = prompt("That is not a number, silly! Try again!", "");
  }
  if (count == 0) {
      alert("Well, don't worry, I didn't want to play your game ANYWAY");
  } else if (count => 3) {
      alert("Really?! " + count + " is way too much. I refuse to do this. I am not your puppet");
  } else {
      alert("Fiiiiiine.")
  }

  for (count; count < 0; count++) {
      alert("Count = " + count);
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

    secondQuestion();

    thirdQuestion();

    fourthQuestion();


}
