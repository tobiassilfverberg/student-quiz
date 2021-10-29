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
  sound: "Woooof!",
  speak() {
    console.log(this.sound);
  },
};

console.log(`Barksby's owner is ${barksby.owner.name}`);
barksby.speak();
