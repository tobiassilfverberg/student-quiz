let guesses = 0;
let highscore;

let number = Math.ceil(Math.random() * 10);
let running = true;

while (running) {
  let answer = prompt("Gissa på ett tal mellan 1-10");

  if (answer == 0) {
    running = false;
    break;
  }

  if (answer == number) {
    guesses++;

    alert(
      `Grattis, du gissade rätt. Rätt svar är: ${number}. Antal gissningar: ${guesses}`
    );
    number = Math.ceil(Math.random() * 10);
    if (!highscore) highscore = guesses;
    if (guesses < highscore) {
      highscore = guesses;
      alert(`Grattis, nytt highscore! Ditt nya highscore är ${highscore}`);
    }
    guesses = 0;
    continue;
  } else if (answer < number) {
    alert("Fel svar, du gissade för lågt. Gissa igen");
  } else if (answer > number) {
    alert("Fel svar, du gissade för högt. Gissa igen");
  }
  guesses++;
}
