// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user = {
    username: "davidw",
    password: "password123"
}

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var user1 = {
    username: "davidw",
    timeline: "Been for a run this morning"
}

var user2 = {
    username: "nicolaw",
    timeline: "Off to work"
}

var user3 = {
    username: "joew",
    timeline: "Can't find my shoes"
}

var newsFeed = [user1, user2, user3];

// Facebook code along

var userNamePrompt = prompt("What's your username? ")
var passwordPrompt = prompt("What's your password? ")

function signIn(userNamePrompt, passwordPrompt) {
    if (userNamePrompt === database[0].username &&
        passwordPrompt === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry wrong username or password")
    }
}

signIn(userNamePrompt, passwordPrompt)
