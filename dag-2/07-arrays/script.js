// arrays
let students = [
    "Deadpool", 
    "Black Widow", 
    "Iron Man", 
    "Spider-man"
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);

console.log(`We have ${students.length} students in our class.`);

students[1] = "Black Window";

let names = students.join(', ');
console.log(`The students names are: ${names}`);

//find index of string "Iron Man"
console.log("Index of Iron Man:", students.indexOf("Iron Man")); //2
console.log("Index of Thanos:", students.indexOf("Thanos")); //-1, finns inte

//check if string "Alivepool" is in the array
console.log(students.includes("Alivepool"));

//add Wanda to student list
students.push("Wanda");
console.log(`The students names are: ${students.join(', ')}`);

//remove from student list
students.pop()