/**
 * Workshop: Password Checker using Functions
 *
 * Skriv om lösenordskollen till att använda funktioner (inkl. forEach) och
 * kollar en lista av lösenord.
 *
 * Ni ska ha en funktion som tar emot ett lösenord och validerar det. Den ska
 * returnera true om det är ett tillräckligt säkert lösenord, eller false om
 * det inte uppfyller kraven.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 *
 * ROADMAP
 *
 * 1. Skapa en array som alla lösenord ligger i.
 *
 * 2.1. Flytta logiken som kollar om lösenordet uppfyller kraven till en egen
 * funktion.
 *
 * 2.2. Kalla på funktionen en gång för varje lösenord i array:en och skicka
 * med lösenordet till funktionen.
 *
 * 3. Ändra så att funktionen returnerar true/false istället för att logga till
 * konsollen.
 *
 */

const passwords = [
  "password", // inte giltigt
  "tjenare?mannen", //giltigt
  "p@ssw%rd", // giltigt
  "pa$$word", // giltigt
  "secretpassword", // inte giltigt
  "secret-password", // giltigt
  "such-password-much-secure-very-long", //giltigt
  "hej-sansvej", //giltigt
  "#%€&hejs", // giltigt
  "hejsan", //inte giltigt
];

const specialChars = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
];

const checkPassword = function (password) {
  if (password.length >= 16) {
    return true;
  } else if (password.length >= 12 && password.includes(`-`)) {
    return true;
  } else if (password.length >= 8) {
    let valid = specialChars.some((char) => password.includes(char));
    if (valid) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

passwords.forEach((password) => {
  const result = checkPassword(password);
  if (result) {
    console.log(`Password is valid: ${password}`);
  } else {
    console.log(`Password is not valid: ${password}`);
  }
});
