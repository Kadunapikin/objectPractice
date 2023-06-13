// property name limitation
// let user = {
//     name: "john",
//     age: 30,
//     height: "6ft"
// };

// Let’s add a boolean one:
// user.isAdmin = true;

// // How to delete a property from an object
// delete user.age;

// How to us multiword property but name must be quoted
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true
//   };

// let key = prompt("what do you want to know about the user?", "name");
// alert( user["likes birds"]);

// Using Square brackets to set multiword property
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); 
