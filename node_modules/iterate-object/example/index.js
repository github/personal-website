"use strict";

// Dependencies
var IterateObject = require("../lib");

// Iterate this object
IterateObject({
    name: "Bob",
    age: 42
}, function (value, name) {
    console.log(name, value);
});
// => "name", "Bob"
//    "age", 42

// Iterate an array
IterateObject([1, 2, 3, 4, 5, 6, 7], function (value, i) {
    console.log("v[" + i + "] = " + value);
});
// => v[0] = 1
//    v[1] = 2
//    v[2] = 3
//    v[3] = 4
//    v[4] = 5
//    v[5] = 6
//    v[6] = 7

// Iterate an array
IterateObject(["Alice", "Bob", "Carol", "Dave"], function (value, i, arr) {
    console.log("Current: " + value + (arr[i + 1] ? " Next:" + arr[i + 1] : ""));
});
// => Current: Alice Next:Bob
//    Current: Bob Next:Carol
//    Current: Carol Next:Dave
//    Current: Dave