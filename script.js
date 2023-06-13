// property name limitation
let user = {
    name: "john",
    age: 30,
    height: "6ft"
};

// Let’s add a boolean one:
user.isAdmin = true;

// let key = prompt("what do you want to know about the user?", "name");
alert( user.isAdmin);

//The 'for...in' loop
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//     alert( key );
//     alert( user[key] )
//   }

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     intrudcuceSelf: function () {
//         console.log(`hi! i'm ${this.name[0]}.`);
//     },
// };

// person.age = 45;
// person["name"]["last"] = "Cratchit";
// person["eyes"] = "hazel";
// person.farewell = function () {
//   console.log("Bye everybody!");
// };
// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;

// console.log(person.height);

//Introducing constructors

// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function () {
//         console.log(`Hi! i'm ${this.name}.`);
//     };
// }

// const isaac = new Person("isaac");
// isaac.name;
// isaac.introduceSelf();



// const myNotification = new Notification("Hello!");
// console.log(myNotification)