// Part 1 - Practice with Functions (5 points)
// 1.	Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

function halfNumber(x) {
    "use strict;"

    if (isNaN(x)) {
        const errorMessage = "Invalid argument. Need a number argument."
        window.console.log(errorMessage)
        throw new Error(errorMessage);
    } else {
        var result = x / 2
        window.console.log("Half of " + String(x) + " is " + String(result) + ".")
        return result
    }
}

halfNumber(6)
halfNumber(7.5)

// 2.	Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(x) {
    "use strict;"

    if (isNaN(x)) {
        const errorMessage = "Invalid argument. Need a number argument."
        window.console.log(errorMessage)
        throw new Error(errorMessage);
    } else {
        var result = x * x
        window.console.log("The result of squaring the number " + String(x) + " is " + String(result) + ".")
        return result
    }
}

squareNumber(2)
squareNumber(5)

// 3.	Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."


function percentOf(x, y) {
    "use strict;"

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument."
        window.console.log(errorMessage)
        throw new Error(errorMessage);
    } else {
        var result = Math.round(x / y * 100)
        window.console.log(String(x) + " is " + String(result) + "% of " + String(y) + ".")
        return result
    }
}

percentOf(2, 4)
percentOf(5, 15)
percentOf(20, 10)


// 4.	Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

function findModulus(x, y) {
    "use strict;"

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument."
        window.console.log(errorMessage)
        throw new Error(errorMessage);
    } else {
        var result = x % y
        window.console.log(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".")
        return result
    }
}

findModulus(4, 2)
findModulus(9, 4)
findModulus(4, 10)

// 5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

function sum() {
    
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
function mainSum() {
    playagain = window.prompt("Do you want to play again (y/n)?");

}
console.log(sum(2, 3));         // 5
console.log(sum(-10, 1));       // -9
console.log(sum(1, 1, 1, 1));   // 4
console.log(sum());

function findModulus(x, y) {
    "use strict;"

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument."
        window.console.log(errorMessage)
        throw new Error(errorMessage);
    } else {
        var result = x % y
        window.console.log(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".")
        return result
    }
}

//STEP 1

//STEP 2

//STEP 3

//STEP 4

//STEP 5