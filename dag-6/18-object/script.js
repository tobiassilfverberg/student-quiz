/**
 * Objects
 */

/* const fluffles = [
  "Mr Fluffles", // 0 = name
  3, // 1 = age
  "Bengt", // 2 = owner
  "Annoy people", // 3 = hobbies
  "Cat", // 4 = species
];

const captainCat = [
  "Captain Cat", // 0 = name
  9, // 1 = age
  "Agda", // 2 = owner
  "HIIT", // 3 = hobbies
]; 

const showPetInfo = (pet) => {
  console.log(
    `${pet[0]} is a ${pet[4]} of ${pet[1]} year(s) old. His owner is ${pet[2]} and his favorite hobby is to ${pet[3]}.`
  );
};
*/

//Object literal notation
const fluffles = {
  name: "Mr Fluffles",
  age: 3,
  owner: "Bengt",
  hobbies: "Annoy people",
  species: "Cat",
};

const captainCat = {
  name: "Captain Cat",
  species: "Cat",
  owner: "Agda",
  age: 5,
  hobbies: "HIIT",
};

const meowJr = {
  hobbies: "Be cute",
  species: "Kitten",
  age: 1,
  name: "Meow Jr",
};
meowJr.age = 2;

const showPetInfo = (pet) => {
  console.log(
    `${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner} and his favorite hobby is to ${pet.hobbies}.`
  );
};

console.log(showPetInfo(captainCat));
console.log(showPetInfo(meowJr));
