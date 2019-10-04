// Marco! Polo! (5 points)
for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        window.console.log("Marco! Polo!");
    } else if (index % 3 == 0) {
        window.console.log("Marco!");
    } else if (index % 5 == 0) {
        window.console.log("Polo!");
    }
}
