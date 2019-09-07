// Setup user database
var database = [
    {
        username: "davidw",
        password: "password123",
        timeline: "Been for a run this morning"
    },
    {
        username: "nicolaw",
        password: "npw123",
        timeline: "Off to work"
    },
    {
        username: "joew",
        password: "cars",
        timeline: "Can't find my shoes"
    }
];

// Unused code practicing adding object elements to array with forEach loop
// var newsFeed = [];
//
// database.forEach(function(person) {
//     newsFeed.push({
//         username: (person.username),
//         timeline: (person.timeline)
//     });
// });

// Get login details via prompt
var userNamePrompt = prompt("What's your username? ")
var passwordPrompt = prompt("What's your password? ")

// Function to confirm valid
function signIn(userNamePrompt, passwordPrompt) {
    for (var i=0; i < database.length; i++) {
        if (userNamePrompt === database[i].username &&
            passwordPrompt === database[i].password) {
            return true;
        }
    }
    return false;
}

// Perform login and check
check = signIn(userNamePrompt, passwordPrompt);

// Display formatted feed using forEach loop if valid login or alert if not
if (check) {
    database.forEach(function(person) {
        console.log(person.username + ": " + person.timeline);
    });
} else {
    alert("Incorrect username or password");
}
