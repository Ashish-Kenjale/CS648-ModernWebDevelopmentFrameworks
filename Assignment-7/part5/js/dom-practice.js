/*eslint-env browser*/

// Part 5 - Practice with the Event Model (5 points)
// In this part of the assignment you will practice working with form objects and the DOM Event Model:
// 1.	Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.

function displayMessage() {
    window.alert("I have been clicked.");
}

// 2.	Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.

var myElement = document.getElementById("myButton")
myElement.onclick = function () {
    window.alert("I have been clicked.");
}
// 3.	Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.



// 4.	Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.
// 5.	Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.

//STEP 1

//STEP 2

//STEP 3

//STEP 4

//STEP 5

