// The “Coin Flip Streak” Game (5 points)
var coinFlip;

// Loop until coinFlip becomes 1 (Tails)
do {
    coinFlip = Math.round(Math.random());

    if (coinFlip == 0) {
        window.console.log("Heads");
    } else if (coinFlip == 1) {
        window.console.log("Tails");
    }
} while (coinFlip != 1);