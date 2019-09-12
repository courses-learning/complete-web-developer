// Cache html elements in variables for quicker access
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");


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
        addListListner("last");
    }
}

// Trigger create new list element if enter pressed & input lenght > 0
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
        addListListner("last");
    }
}

// Set listeners for button clicked or key pressed & call respective funcs
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);

// Set listners across all list items or last only when new added
function addListListner(allOrLast) {
    var listitems = document.querySelectorAll("li");
    if (allOrLast === "all") {
        for (var i = 0; i < listitems.length; i++) {
            listitems[i].addEventListener("click", itemclick);
        }
    } else {
        // Listener for last only when new added
        listitems[listitems.length - 1].addEventListener("click", itemclick);
    }
}

// toggle class for 'done' strikethrough on & off
function itemclick() {
    this.classList.toggle("done");
}

// Set first set of listeners for original list
addListListner('all');
