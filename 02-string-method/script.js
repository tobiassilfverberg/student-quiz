let myName = "Tobiasb";

console.log("Name is:", myName);
console.log("Length of my name is " + myName.length + " letters");

console.log("First char in name is:", myName[0])

console.log("Name SHOUTED is:", myName.toUpperCase());
console.log("Name whispered is:", myName.toLowerCase());

console.log("Name is:", myName);

console.log("Position of ´b´ is:", myName.indexOf("b"));
console.log("Position of last ´b´ is:", myName.lastIndexOf("b"));
console.log("Position of ´z´ is:", myName.indexOf("z"));

console.log("Slice of Tobias:", myName.slice(1, 5));

console.log("Tiny name:", myName.substr(0, 3));

let email = "tobias.silfverberg@mediainstitutet.se";
console.log("Does email contain at-char?", email.includes(`@`));