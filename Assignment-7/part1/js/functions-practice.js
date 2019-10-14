//STEP 1
function halfNumber(x) {
    "use strict";

    if (isNaN(x)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x / 2;
        window.console.log("Half of " + String(x) + " is " + String(result) + ".");
        return result;
    }
}

halfNumber(6);
halfNumber(7.5);


//STEP 2
function squareNumber(x) {
    "use strict";

    if (isNaN(x)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x * x;
        window.console.log("The result of squaring the number " + String(x) + " is " + String(result) + ".");
        return result;
    }
}

squareNumber(2);
squareNumber(5);


//STEP 3
function percentOf(x, y) {
    "use strict";

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = Math.round(x / y * 100);
        window.console.log(String(x) + " is " + String(result) + "% of " + String(y) + ".");
        return result;
    }
}

percentOf(2, 4);
percentOf(5, 15);
percentOf(20, 10);

//STEP 4
function findModulus(x, y) {
    "use strict";

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x % y;
        window.console.log(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".");
        return result;
    }
}

findModulus(4, 2);
findModulus(9, 4);
findModulus(4, 10);

// 5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

//STEP 5
function sumNumbers() {
    "use strict";
    var sum = 0;
    var numberCollection = window.prompt("Enter numbers delimited by commas");
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }

    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));

    return sum;
}

sumNumbers();

