/**
 * Loops
 */

/**
 * For-loops
 */

/* let sum = 0;
let points = [20, -50, 0, 100, 75, 25];
for (let i = 0; i < points.length; i++) {
    if (points[i] <= 0) {
        continue;
    }
    
    sum += points[i];
    console.log(points[i], sum);

    if (sum >= 100) {
        console.log("You got max score");
        break;
    }
}

console.log("KLAR!"); */

/* let sum = 0;
for (let i = 0; i < 20; i++) {
    console.log(`At loop ${i}`);
    if (i % 2 != 0) {
        continue;
    }

    sum += i;
    console.log(`Sum right now is ${sum}`);

    if (sum >= 100) {
        break;
    }
}

console.log(`Sum after loop is: ${sum}`); */

/* let students = [
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
} */

/**
 * While-loop
 */
/* let i = 0;
while (i < 5) { //kolla kriterierna för loop
    //gör något
    console.log("in while-loop, i is:", i);
    i++;
}

i = 5;
do { //gör något
    console.log("in do while-loop, i is:", i);
    i++;
} while (i < 5); //kolla kriterierna för loop */

//switch
let grade = "VG";
switch (grade) {
    case "MVG":
        console.log("Nice, MVG!");
        break;

    case "VG":
        console.log("Well done, VG!");
        break;

    case "G":
        console.log("OK, G!");
        break;

    case "IG":
        console.log("Not very well, IG");
        break;

    default:
        console.log("Why cheat?");
        break;
}