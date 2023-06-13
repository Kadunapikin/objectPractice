// property name limitation
let user = {
    name: "john",
    age: 30,
    height: "6ft"
};

// Let’s add a boolean one:
user.isAdmin = true;

// How to delete a property from an object
delete user.age;

// let key = prompt("what do you want to know about the user?", "name");
alert( user.age);