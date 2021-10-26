/**
 * Functions
 */

//Function declaration
/* function greet() {
  alert("Hello, World!");
  console.log("Hello, World!");
}

let niceUser = true;

if (niceUser) {
  greet();
} */

/* function greetUser(name, lastname, age = 20) {
  console.log(`Hi there, ${name} ${lastname}! You are ${age} years old.`);
}

greetUser("Tobias", "Silfverberg");
greetUser("Pelle", "Pelleson", 138); */

/**
 * Function Expression
 */

/* const greet = function () {
  alert("Hello, World!");
  console.log("Hello, World!");
};
greet();

const greetUser = function (name, lastname, age = 20) {
  console.log(`Hi there, ${name} ${lastname}! You are ${age} years old.`);
};

greetUser("Tobias", "Silfverberg"); */

/* const circleCircumference = function (radius) {
  return 2 * Math.PI * radius;
};

let circumference = circleCircumference(10);
console.log(circumference); */

/**
 * Arrow function
 * (Fat arrow function)
 */

/* const circleCircumference = (radius) => 2 * Math.PI * radius;
circleCircumference(15);

const greetUser = (myName, time = "morning") => {
  console.log(`Good ${time}, ${myName}`);
};
greetUser("Tobias");

const greet = () => {
  console.log("Hi there");
};
greet(); */

let students = ["Tobias", "Kalle", "Charles", "Mange"];
//for (let i = 0; i < students.length; i++) {
//  console.log(`Student at index ${i} is: ${students}`);
//}

students.forEach((student) => {
  console.log(`Student name: ${student}`);
});
