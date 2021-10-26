let guesses = 0; //låt antalet gissningar vara 0
let highscore; //initera highscore, behövs inget värde äm

let number = Math.ceil(Math.random() * 10); //skapa slumpat tal
let running = true; //så att while-loopen alltid kör

while (running) {
  //starta loop
  guesses++;
  let answer = Number(prompt("Gissa på ett tal mellan 1-10")); //be användaren gissa på ett tal 1-10

  if (answer === 0) {
    //om svaret är 0
    alert(`Din gissning var ${answer}, spelet avslutas`);
    break; //bryt loopen och stäng ner
  }

  if (answer === number) {
    //om gissningen är rätt

    alert(
      //visa meddelande som säger att svaret var rätt, antal gissnignar.
      `Grattis, du gissade rätt. Rätt svar är: ${number}. Antal gissningar: ${guesses}`
    );
    number = Math.ceil(Math.random() * 10); //slumpa fram nytt tal
    if (!highscore) highscore = guesses; //om highscore är undefined, sätt den till antal gissningar
    if (guesses < highscore) {
      //om antal gissngar är färre än highscore
      highscore = guesses; //sätt highscore till antalet gissningar
      alert(`Grattis, nytt highscore! Ditt nya highscore är ${highscore}`); //nytt highscore
    }
    guesses = 0; //sätt antal gissningar på 0 igen
    continue; //börja om
  } else if (answer < number) {
    //annars om svaret är för lågt
    alert("Fel svar, du gissade för lågt. Gissa igen");
  } else if (answer > number) {
    //annars om svaret är för högt
    alert("Fel svar, du gissade för högt. Gissa igen");
  }
}
