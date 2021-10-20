// Control Flow

/* const minAge = 18;
const maxAge = 65;

let age = 15;

// Logical Operators
// && = AND (both has to be true) 
// || = OR (at least one has to be true) 

if (age >= minAge && age <= maxAge) {
    console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else {
    console.log(`Too young or too old!`);
}

console.log('After if expression'); 

let username = "tobbe";
if (username == "tobbe" || username == "oskar") {
    console.log("Good morning!");
} else {
    console.log("Not welcome");
}

//more advanced if-statement 
if (age >= minAge && age <= maxAge) {
    console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (age < minAge) {
    console.log(`Too young!`);
} else if (age > maxAge) {
    console.log(`Too old!`)
} */

// for-loop
/* console.log("Yeay loop");

let maxLoops = 10;

for (let i = 0; i < maxLoops; i++) {
    console.log(i);
}

console.log("SICK"); */

let students = [
	"Deadpool",     // 0
	"Black Widow",  // 1
	"Iron Man",     // 2
	"Spider-Man",   // 3
    "Wanda",        // 4
    "Thanos"        // 5
]; 

for (let i = 0; i < students.length; i++) {
    //this will run once for every student
    console.log(`Student at index ${i} is: ${students[i]}`);
}
