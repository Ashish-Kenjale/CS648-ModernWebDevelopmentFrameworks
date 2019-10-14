/*eslint-env browser*/

//STEP 1
function displayMessage() {
    window.alert("I have been clicked.");
}

//STEP 2
var myElement = document.getElementById("myButton")
myElement.onclick = function () {
    window.alert("I have been clicked.");
}

//STEP 3
function btnOnClick() {
    window.alert("I have been clicked.")
}
var myOtherButton = window.document.getElementById("myOtherButton")
myOtherButton.addEventListener("click", btnOnClick);

//STEP 4
var myOtherButton2 = window.document.getElementById("myOtherButton2")
myOtherButton2.addEventListener("click", function() {
    window.alert("I have been clicked.")
});

//STEP 5
function init() {
    "use strict";
    var myOtherButton3 = window.document.getElementById("myOtherButton3")
    myOtherButton3.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });
}

window.addEventListener("load", init);
