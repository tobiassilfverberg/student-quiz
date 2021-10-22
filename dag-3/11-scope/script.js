/**
 * scope
 */
let points = 50;
let x;

for (let i = 0; i < 10; i++) {
    x = i;
    points += i;
    console.log(`x is ${x}, points is ${points}`);
}

console.log("x after for-loop", x);
console.log("Points after for-loop:", points);