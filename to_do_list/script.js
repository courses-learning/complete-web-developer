// Cache html elements in variables for quicker access
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Check inputted value length
function inputLength() {
    return input.value.length;
}

// Create text node for new list item and append to list
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// Trigger create new list element if button pressed & input length > 0
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Trigger create new list element if enter pressed & input lenght > 0
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Set listeners for button clicked or key pressed & call respective funcs
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
