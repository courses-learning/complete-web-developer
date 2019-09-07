var todos = [
    "clean room",
    "brush teeth",
    "study",
    "walk dog"
];

// similar to C language
for (var i=0; i< todos.length; i++) {
    todos[i] = todos[i] + "!";
    console.log(todos[i]);
}

// forEach method for iteration over elements in an array/list
todos.forEach(function(todo, i) {
    console.log(todo, i);
})

// While loop
var counterOne = 10
while (counterOne > 0) {
    console.log(counterOne);
    counterOne --;
}

// difference for do while loop is condition check follows action
var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo --;
} while (counterTwo > 0);
