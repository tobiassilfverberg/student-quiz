/**
 * Objects with Methods
 */

const barksby = {
  name: "Mr Barksby",
  species: "Dog",
  age: 5,
  hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
  owner: {
    name: "Mr Beans",
    age: 54,
  },
  speak: function () {
    console.log("Wooof!");
  },
};

console.log(`Barksby's owner is ${barksby.owner.name}`);
barksby.speak();
