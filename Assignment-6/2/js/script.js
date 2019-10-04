// The “Coin Flip” Game (10 points)

// Get a random number between 0 & 9
var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Choose Heads (H) or Tails (T):");

isHeads = Boolean (coinFlip > 4);
isUserChoiceHeads = Boolean (choice.toUpperCase() == "H" || choice.toLowerCase() == "heads");
isUserChoiceTails = Boolean (choice.toUpperCase() == "T" || choice.toLowerCase() == "tails");

if (isHeads) {
    //Result is Heads

    if (isUserChoiceHeads) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (isUserChoiceTails) {
        window.alert("The flip was heads but you chose tails...you lose!");
    } else {
        window.alert("Invalid choice.");
    }
} else {
    //Result is Tails
    
    if (isUserChoiceHeads) {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else if (isUserChoiceTails) {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("Invalid choice.");
    }
}