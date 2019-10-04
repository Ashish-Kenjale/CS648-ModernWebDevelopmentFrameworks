// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

// Global Variables
var num1;
var num2;

num1 = window.prompt("Enter the first integer:");
num1 = parseInt(num1, 10);

num2 = window.prompt("Enter the second integer:");
num2 = parseInt(num2, 10);

// Displaying the numbers
document.write("The first number is: " + String(num1) + "<br>");
document.write("The second number is: " + String(num2) + "<br><br>");

// Finding the larger number and displaying appropriate result
if (num1 == num2) {
    document.write("Both the numbers are equal." + "<br>");
} else if (num1 > num2) {
    document.write(String(num1) + " is the larger number." + "<br>");
} else {
    document.write(String(num2) + " is the larger number." + "<br>");
}

